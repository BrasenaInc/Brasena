"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, Building2, Trash2, Pencil, Loader2, MapPin } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useShopLanguage } from "@/components/shop/shop-language-provider";
import type { addresses as addressesSchema, users } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";

type Address = InferSelectModel<typeof addressesSchema>;
type User = InferSelectModel<typeof users>;

export function AccountView({
  user,
  initialAddresses,
}: {
  user: User;
  initialAddresses: Address[];
}) {
  const router = useRouter();
  const [fullName, setFullName] = useState(user.fullName ?? "");
  const [phone, setPhone] = useState(user.phone ?? "");
  const [businessName, setBusinessName] = useState(user.businessName ?? "");
  const [ein, setEin] = useState(user.ein ?? "");
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    label: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
  });
  const [editAddressForm, setEditAddressForm] = useState<Partial<Address> | null>(null);

  const { t } = useShopLanguage();
  const { data: currentUser = user } = trpc.users.me.useQuery(undefined, {
    initialData: user,
  });
  const { data: addresses = initialAddresses } = trpc.addresses.list.useQuery(
    undefined,
    { initialData: initialAddresses }
  );
  const utils = trpc.useUtils();
  const updateProfile = trpc.users.updateProfile.useMutation({
    onSuccess: () => {
      utils.users.me.invalidate();
    },
  });
  const setDefaultAddress = trpc.addresses.setDefault.useMutation({
    onSuccess: () => utils.addresses.list.invalidate(),
  });
  const updateAddress = trpc.addresses.update.useMutation({
    onSuccess: () => {
      utils.addresses.list.invalidate();
      setEditingAddressId(null);
      setEditAddressForm(null);
    },
  });
  const deleteAddress = trpc.addresses.delete.useMutation({
    onSuccess: () => utils.addresses.list.invalidate(),
  });
  const createAddress = trpc.addresses.create.useMutation({
    onSuccess: () => {
      utils.addresses.list.invalidate();
      setShowAddAddress(false);
      setNewAddress({ label: "", street: "", apt: "", city: "", state: "", zip: "" });
    },
  });

  const handleSaveProfile = () => {
    updateProfile.mutate({
      fullName: fullName || undefined,
      phone: phone || undefined,
      ...(currentUser.customerType === "business"
        ? { businessName: businessName || undefined, ein: ein || undefined }
        : {}),
    });
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  const isB2B = currentUser.customerType === "business";

  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">{t("account.account")}</h1>
      </div>

      {/* Profile */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-base font-semibold">{t("account.profile")}</h2>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
              currentUser.customerType === "business"             ? "bg-sage/20 text-sage" : "bg-muted text-muted-foreground"
            }`}
          >
            {isB2B ? (
              <>
                <Building2 className="h-3 w-3" /> {t("account.businessAccount")}
              </>
            ) : (
              <>
                <Home className="h-3 w-3" /> {t("account.personalAccount")}
              </>
            )}
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>{t("account.fullName")}</Label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label>{t("account.email")}</Label>
            <Input value={currentUser.email ?? ""} readOnly className="bg-muted" />
          </div>
          <div className="space-y-2">
            <Label>{t("account.phone")}</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Optional"
            />
          </div>
          {isB2B && (
            <>
              <div className="space-y-2">
                <Label>{t("account.businessName")}</Label>
                <Input
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Business name"
                />
              </div>
              <div className="space-y-2">
                <Label>{t("account.ein")}</Label>
                <Input
                  value={ein}
                  onChange={(e) => setEin(e.target.value)}
                  placeholder="XX-XXXXXXX"
                />
              </div>
            </>
          )}
        </div>
        <Button
          className="mt-4 bg-sage hover:bg-sage-dark text-white"
          onClick={handleSaveProfile}
          disabled={updateProfile.isPending}
        >
          {updateProfile.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            t("account.saveChanges")
          )}
        </Button>
      </section>

      {/* Addresses */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold">{t("account.myAddresses")}</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAddAddress((v) => !v)}
          >
            {showAddAddress ? t("account.cancel") : t("account.addAddress")}
          </Button>
        </div>
        {showAddAddress && (
          <div className="mb-6 space-y-3 rounded-lg border bg-muted/30 p-4">
            <Label>{t("checkout.label")}</Label>
            <Input
              placeholder="Home, Restaurant..."
              value={newAddress.label}
              onChange={(e) =>
                setNewAddress((a) => ({ ...a, label: e.target.value }))
              }
            />
            <Label>Street</Label>
            <Input
              value={newAddress.street}
              onChange={(e) =>
                setNewAddress((a) => ({ ...a, street: e.target.value }))
              }
            />
            <Label>{t("checkout.aptOptional")}</Label>
            <Input
              value={newAddress.apt}
              onChange={(e) =>
                setNewAddress((a) => ({ ...a, apt: e.target.value }))
              }
            />
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label>{t("checkout.city")}</Label>
                <Input
                  value={newAddress.city}
                  onChange={(e) =>
                    setNewAddress((a) => ({ ...a, city: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label>{t("checkout.state")}</Label>
                <Input
                  placeholder="XX"
                  maxLength={2}
                  value={newAddress.state}
                  onChange={(e) =>
                    setNewAddress((a) => ({
                      ...a,
                      state: e.target.value.toUpperCase(),
                    }))
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
                  setNewAddress((a) => ({
                    ...a,
                    zip: e.target.value.replace(/\D/g, "").slice(0, 5),
                  }))
                }
              />
            </div>
            <Button
              className="bg-sage hover:bg-sage-dark text-white"
              disabled={
                !newAddress.label ||
                !newAddress.street ||
                !newAddress.city ||
                newAddress.state.length !== 2 ||
                newAddress.zip.length !== 5 ||
                createAddress.isPending
              }
              onClick={() =>
                createAddress.mutate({
                  type: isB2B ? "business" : "residential",
                  label: newAddress.label,
                  street: newAddress.street,
                  apt: newAddress.apt || undefined,
                  city: newAddress.city,
                  state: newAddress.state,
                  zip: newAddress.zip,
                  isDefault: addresses.length === 0,
                })
              }
            >
              {createAddress.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t("account.saveAddress")
              )}
            </Button>
          </div>
        )}
        {addresses.length === 0 && !showAddAddress ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <MapPin className="mb-4 h-12 w-12 text-muted-foreground/40" />
            <h3 className="mb-1 text-base font-medium text-muted-foreground">
              No saved addresses
            </h3>
            <p className="mb-4 text-sm text-muted-foreground/60">
              Add an address for faster checkout.
            </p>
            <Button variant="outline" onClick={() => setShowAddAddress(true)}>
              Add your first address
            </Button>
          </div>
        ) : (
        <ul className="space-y-3">
          {addresses.map((addr) => (
            <li
              key={addr.id}
              className="flex flex-col gap-2 rounded-lg border p-4"
            >
              {editingAddressId === addr.id && editAddressForm ? (
                <div className="space-y-2">
                  <Input
                    placeholder="Label"
                    value={editAddressForm.label ?? addr.label}
                    onChange={(e) =>
                      setEditAddressForm((f) => ({
                        ...f,
                        label: e.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder="Street"
                    value={editAddressForm.street ?? addr.street}
                    onChange={(e) =>
                      setEditAddressForm((f) => ({
                        ...f,
                        street: e.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder="Apt"
                    value={editAddressForm.apt ?? addr.apt ?? ""}
                    onChange={(e) =>
                      setEditAddressForm((f) => ({ ...f, apt: e.target.value }))
                    }
                  />
                  <div className="flex gap-2">
                    <Input
                      placeholder="City"
                      value={editAddressForm.city ?? addr.city}
                      onChange={(e) =>
                        setEditAddressForm((f) => ({
                          ...f,
                          city: e.target.value,
                        }))
                      }
                    />
                    <Input
                      placeholder="State"
                      maxLength={2}
                      value={editAddressForm.state ?? addr.state}
                      onChange={(e) =>
                        setEditAddressForm((f) => ({
                          ...f,
                          state: e.target.value.toUpperCase(),
                        }))
                      }
                    />
                    <Input
                      placeholder="ZIP"
                      maxLength={5}
                      value={editAddressForm.zip ?? addr.zip}
                      onChange={(e) =>
                        setEditAddressForm((f) => ({
                          ...f,
                          zip: e.target.value.replace(/\D/g, "").slice(0, 5),
                        }))
                      }
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => {
                        const { id: _id, customerId: _c, type: _t, createdAt: _ca, ...rest } = editAddressForm;
                        updateAddress.mutate({
                          id: addr.id,
                          label: rest.label,
                          street: rest.street,
                          apt: rest.apt ?? undefined,
                          city: rest.city,
                          state: rest.state,
                          zip: rest.zip,
                        });
                      }}
                      disabled={updateAddress.isPending}
                    >
                      {updateAddress.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        t("account.saveChanges")
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingAddressId(null);
                        setEditAddressForm(null);
                      }}
                    >
                      {t("account.cancel")}
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-medium">{addr.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {addr.street}
                    {addr.apt ? `, ${addr.apt}` : ""} — {addr.city}, {addr.state}{" "}
                    {addr.zip}
                  </p>
                  {addr.isDefault && (
                    <span className="text-xs font-medium text-sage">{t("account.default")}</span>
                  )}
                  <div className="flex gap-2">
                    {!addr.isDefault && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setDefaultAddress.mutate({ id: addr.id })}
                        disabled={setDefaultAddress.isPending}
                      >
                        {setDefaultAddress.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          t("account.setAsDefault")
                        )}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setEditingAddressId(addr.id);
                        setEditAddressForm({
                          label: addr.label,
                          street: addr.street,
                          apt: addr.apt ?? undefined,
                          city: addr.city,
                          state: addr.state,
                          zip: addr.zip,
                        });
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          disabled={deleteAddress.isPending}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete address?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will remove {addr.label} from your saved addresses.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            onClick={() => deleteAddress.mutate({ id: addr.id })}
                            disabled={deleteAddress.isPending}
                          >
                            {deleteAddress.isPending ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              "Delete"
                            )}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        )}
      </section>

      {/* Preferences */}
      <section className="rounded-xl border bg-card p-6">
        <h2 className="mb-4 text-base font-semibold">{t("account.preferences")}</h2>
        <p className="mb-2 text-sm text-muted-foreground">{t("account.language")}</p>
        <div className="flex gap-2">
          <Button
            variant={currentUser.language === "en" ? "default" : "outline"}
            size="sm"
            className={currentUser.language === "en" ? "bg-sage hover:bg-sage-dark text-white" : ""}
            onClick={() => updateProfile.mutate({ language: "en" })}
          >
            EN
          </Button>
          <Button
            variant={currentUser.language === "es" ? "default" : "outline"}
            size="sm"
            className={currentUser.language === "es" ? "bg-sage hover:bg-sage-dark text-white" : ""}
            onClick={() => updateProfile.mutate({ language: "es" })}
          >
            ES
          </Button>
        </div>
      </section>

      <Button
        variant="outline"
        className="w-full border-destructive text-destructive hover:bg-destructive/10"
        onClick={handleSignOut}
      >
        {t("account.signOut")}
      </Button>
    </div>
  );
}
