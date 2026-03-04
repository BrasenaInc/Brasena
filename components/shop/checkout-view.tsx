"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useShopLanguage } from "@/components/shop/shop-language-provider";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "@/server/routers";
import type { users, addresses as addressesSchema } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type CartItem = inferRouterOutputs<AppRouter>["cart"]["get"][number];
type Address = InferSelectModel<typeof addressesSchema>;
type User = InferSelectModel<typeof users>;

const MIN_B2C_CENTS = 2500;
const MIN_B2B_CENTS = 15000;
const DELIVERY_FEE_CENTS = 499;

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function CheckoutView({
  initialCart,
  user,
  initialAddresses,
}: {
  initialCart: CartItem[];
  user: User;
  initialAddresses: Address[];
}) {
  const { t } = useShopLanguage();
  const router = useRouter();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    initialAddresses.find((a) => a.isDefault)?.id ?? initialAddresses[0]?.id ?? null
  );
  const [showNewAddressForm, setShowNewAddressForm] = useState(
    initialAddresses.length === 0
  );
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "invoice">(
    user.customerType === "business" ? "invoice" : "card"
  );
  const [mockCardNumber, setMockCardNumber] = useState("");
  const [mockExpiry, setMockExpiry] = useState("");
  const [mockCvc, setMockCvc] = useState("");
  const [newAddress, setNewAddress] = useState({
    label: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    save: true,
  });

  const { data: addresses = initialAddresses } = trpc.addresses.list.useQuery(
    undefined,
    { initialData: initialAddresses }
  );
  const createAddress = trpc.addresses.create.useMutation({
    onSuccess: () => {
      utils.addresses.list.invalidate();
    },
  });
  const utils = trpc.useUtils();
  const createOrder = trpc.orders.create.useMutation({
    onSuccess: (data) => {
      utils.cart.get.invalidate();
      router.push(`/orders/${data.orderId}/confirmation`);
    },
    onError: (err) => {
      toast.error("Something went wrong", {
        description: err.message,
      });
    },
  });

  const subtotalCents = initialCart.reduce((sum, i) => sum + i.subtotalCents, 0);
  const isB2B = user.customerType === "business";
  const minCents = isB2B ? MIN_B2B_CENTS : MIN_B2C_CENTS;
  const meetsMinimum = subtotalCents >= minCents;
  const deliveryFeeCents = subtotalCents >= 15000 ? 0 : DELIVERY_FEE_CENTS;
  const totalCents = subtotalCents + deliveryFeeCents;

  const hasValidAddress =
    selectedAddressId !== null ||
    (showNewAddressForm &&
      newAddress.label &&
      newAddress.street &&
      newAddress.city &&
      newAddress.state.length === 2 &&
      newAddress.zip.length === 5 &&
      newAddress.save);
  const canPlaceOrder =
    meetsMinimum &&
    hasValidAddress &&
    (paymentMethod === "invoice" ||
      (mockCardNumber.trim() !== "" &&
        mockExpiry.trim() !== "" &&
        mockCvc.trim() !== ""));

  const handlePlaceOrder = async () => {
    let addressId = selectedAddressId;
    if (
      showNewAddressForm &&
      newAddress.label &&
      newAddress.street &&
      newAddress.city &&
      newAddress.state &&
      newAddress.zip &&
      newAddress.save
    ) {
      const created = await createAddress.mutateAsync({
        type: isB2B ? "business" : "residential",
        label: newAddress.label,
        street: newAddress.street,
        apt: newAddress.apt || undefined,
        city: newAddress.city,
        state: newAddress.state.slice(0, 2).toUpperCase(),
        zip: newAddress.zip.replace(/\D/g, "").slice(0, 5),
        isDefault: addresses.length === 0,
      });
      addressId = created.id;
    }
    if (!addressId) {
      toast.error("Address required", {
        description: t("checkout.selectAddress"),
      });
      return;
    }
    createOrder.mutate({
      addressId,
      paymentMethod,
      deliveryNotes: deliveryNotes.slice(0, 200) || undefined,
    });
  };

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">{t("checkout.checkout")}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr,360px]">
        <div className="min-w-0 space-y-8">
          {/* Delivery address */}
          <section>
            <h2 className="mb-4 text-base font-semibold">{t("checkout.deliveryAddress")}</h2>
            {addresses.length > 0 && (
              <div className="space-y-2">
                {addresses.map((addr) => (
                  <button
                    key={addr.id}
                    type="button"
                    onClick={() => {
                      setSelectedAddressId(addr.id);
                      setShowNewAddressForm(false);
                    }}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-colors ${
                      selectedAddressId === addr.id && !showNewAddressForm
                        ? "border-sage bg-sage/10"
                        : "border-border hover:bg-accent/50"
                    }`}
                  >
                    <p className="font-medium">{addr.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {addr.street}
                      {addr.apt ? `, ${addr.apt}` : ""} — {addr.city}, {addr.state} {addr.zip}
                    </p>
                    {addr.isDefault && (
                      <span className="mt-1 inline-block text-xs font-medium text-sage">{t("checkout.default")}</span>
                    )}
                  </button>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setShowNewAddressForm(true);
                    setSelectedAddressId(null);
                  }}
                >
                  {t("checkout.addNewAddress")}
                </Button>
              </div>
            )}
            {showNewAddressForm && (
              <div className="mt-4 rounded-xl border bg-muted/30 p-4 space-y-3">
                <Label>{t("checkout.label")}</Label>
                <Input
                  placeholder="Home, Restaurant..."
                  value={newAddress.label}
                  onChange={(e) => setNewAddress((a) => ({ ...a, label: e.target.value }))}
                />
                <Label>{t("checkout.street")}</Label>
                <Input
                  value={newAddress.street}
                  onChange={(e) => setNewAddress((a) => ({ ...a, street: e.target.value }))}
                />
                <Label>{t("checkout.aptOptional")}</Label>
                <Input
                  value={newAddress.apt}
                  onChange={(e) => setNewAddress((a) => ({ ...a, apt: e.target.value }))}
                />
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label>{t("checkout.city")}</Label>
                    <Input
                      value={newAddress.city}
                      onChange={(e) => setNewAddress((a) => ({ ...a, city: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>{t("checkout.state")}</Label>
                    <Input
                      placeholder="XX"
                      maxLength={2}
                      value={newAddress.state}
                      onChange={(e) =>
                        setNewAddress((a) => ({ ...a, state: e.target.value.toUpperCase() }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label>{t("checkout.zip")}</Label>
                  <Input
                    placeholder="12345"
                    maxLength={5}
                    value={newAddress.zip}
                    onChange={(e) =>
                      setNewAddress((a) => ({ ...a, zip: e.target.value.replace(/\D/g, "").slice(0, 5) }))
                    }
                  />
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={newAddress.save}
                    onChange={(e) =>
                      setNewAddress((a) => ({ ...a, save: e.target.checked }))
                    }
                  />
                  {t("checkout.saveAddress")}
                </label>
              </div>
            )}
          </section>

          {/* Delivery notes */}
          <section>
            <Label htmlFor="deliveryNotes">{t("checkout.deliveryNotes")}</Label>
            <textarea
              id="deliveryNotes"
              className="mt-2 w-full rounded-lg border bg-background px-3 py-2 text-sm min-h-[80px]"
              maxLength={200}
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
              placeholder={t("checkout.deliveryNotesPlaceholder")}
            />
          </section>

          {/* Payment */}
          <section>
            <h2 className="mb-4 text-base font-semibold">{t("checkout.payment")}</h2>
            <div className="space-y-4">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border p-4">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <div className="flex-1">
                  <p className="font-medium">{t("checkout.card")}</p>
                  {paymentMethod === "card" && (
                    <div className="mt-3 space-y-2">
                      <span className="inline-block rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-700 dark:border-amber-800/50 dark:bg-amber-950/20 dark:text-amber-400">
                        {t("checkout.testMode")}
                      </span>
                      <Input
                        placeholder={t("checkout.cardPlaceholder")}
                        value={mockCardNumber}
                        onChange={(e) => setMockCardNumber(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Input
                          placeholder={t("checkout.expiryPlaceholder")}
                          value={mockExpiry}
                          onChange={(e) => setMockExpiry(e.target.value)}
                        />
                        <Input
                          placeholder={t("checkout.cvcPlaceholder")}
                          value={mockCvc}
                          onChange={(e) => setMockCvc(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </label>
              {isB2B && (
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border p-4">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "invoice"}
                    onChange={() => setPaymentMethod("invoice")}
                  />
                  <div>
                    <p className="font-medium">{t("checkout.payOnInvoice")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("checkout.invoiceNote")} {user.email}. {t("checkout.invoiceDue")}
                    </p>
                  </div>
                </label>
              )}
            </div>
          </section>
        </div>

        {/* Order summary — stacks below form on mobile */}
        <div className="min-w-0 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="mb-4 text-base font-semibold">{t("checkout.orderSummary")}</h2>
            <ul className="space-y-2 text-sm">
              {initialCart.map((item) => (
                <li key={item.id} className="flex justify-between gap-2">
                  <span className="text-muted-foreground">
                    {item.product.name} — {item.weightLbs}lb × {item.quantity}
                  </span>
                  <span className="text-foreground">{formatPrice(item.subtotalCents)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("cart.subtotal")}</span>
                <span className="text-foreground">{formatPrice(subtotalCents)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("cart.delivery")}</span>
                <span className={deliveryFeeCents === 0 ? "font-medium text-sage" : "text-foreground"}>
                  {deliveryFeeCents === 0 ? t("cart.free") : formatPrice(deliveryFeeCents)}
                </span>
              </div>
              {isB2B && (
                <div className="flex justify-between font-medium text-sage">
                  <span>{t("checkout.wholesaleDiscount")}</span>
                  <span>{t("cart.applied")}</span>
                </div>
              )}
            </div>
            <div className="my-4 flex justify-between border-t border-border pt-4 text-base font-bold text-foreground">
              <span>{t("cart.total")}</span>
              <span>{formatPrice(totalCents)}</span>
            </div>
            {!meetsMinimum && (
              <p className="mb-4 text-sm text-amber-600 dark:text-amber-400">
                {t("checkout.minOrder")}: {formatPrice(minCents)}
              </p>
            )}
            <Button
              className="w-full bg-sage hover:bg-sage-dark text-white"
              disabled={!canPlaceOrder || createOrder.isPending}
              onClick={handlePlaceOrder}
            >
              {createOrder.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("checkout.placingOrder")}
                </>
              ) : (
                t("checkout.placeOrder")
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
