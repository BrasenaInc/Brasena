"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, Building2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { login } from "@/actions/login";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CustomerType = "residential" | "business";

export function SignupFlow() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [customerType, setCustomerType] = useState<CustomerType | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [ein, setEin] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = trpc.users.updateProfile.useMutation();

  const handleContinueFromStep1 = () => {
    if (customerType) setStep(customerType === "business" ? 2 : 3);
  };

  const handleContinueFromStep2 = () => {
    setStep(3);
  };

  const handleBack = () => {
    if (step === 3) setStep(customerType === "business" ? 2 : 1);
    else if (step === 2) setStep(1);
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const supabase = createClient();

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${typeof window !== "undefined" ? window.location.origin : ""}/auth/callback`,
        },
      });
      if (signUpError) throw signUpError;

      await login();

      await updateProfile.mutateAsync({
        fullName,
        customerType: customerType ?? "residential",
        ...(customerType === "business" && businessName
          ? { businessName, ein }
          : {}),
      });

      router.push("/auth/callback");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Step 1: Account type */}
      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold">How will you use Brasena?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card
              className={`cursor-pointer transition-colors ${
                customerType === "residential"
                  ? "border-sage bg-sage/10"
                  : "hover:bg-accent/50"
              }`}
              onClick={() => setCustomerType("residential")}
            >
              <CardHeader className="pb-2">
                <Home className="h-8 w-8 text-sage" />
                <CardTitle className="text-base">Personal / Family</CardTitle>
                <CardDescription>
                  Order fresh cuts for your household. Minimum order $25.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card
              className={`cursor-pointer transition-colors ${
                customerType === "business"
                  ? "border-sage bg-sage/10"
                  : "hover:bg-accent/50"
              }`}
              onClick={() => setCustomerType("business")}
            >
              <CardHeader className="pb-2">
                <Building2 className="h-8 w-8 text-sage" />
                <CardTitle className="text-base">Restaurant / Business</CardTitle>
                <CardDescription>
                  Wholesale pricing with 15% off. Minimum order $150.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Button
            className="w-full bg-sage hover:bg-sage-dark text-white"
            disabled={!customerType}
            onClick={handleContinueFromStep1}
          >
            Continue
          </Button>
        </>
      )}

      {/* Step 2: Business info (only if business) */}
      {step === 2 && customerType === "business" && (
        <>
          <h2 className="text-xl font-semibold">Tell us about your business</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (businessName.trim() && ein.trim()) handleContinueFromStep2();
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="businessName">Business name</Label>
              <Input
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Your business name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ein">EIN</Label>
              <Input
                id="ein"
                value={ein}
                onChange={(e) => setEin(e.target.value)}
                placeholder="XX-XXXXXXX"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-sage hover:bg-sage-dark text-white"
              disabled={!businessName.trim() || !ein.trim()}
            >
              Continue
            </Button>
          </form>
          <button
            type="button"
            onClick={handleBack}
            className="text-sm text-muted-foreground underline hover:text-foreground"
          >
            Back
          </button>
        </>
      )}

      {/* Step 3: Credentials */}
      {step === 3 && (
        <>
          <h2 className="text-xl font-semibold">Create your account</h2>
          <form onSubmit={handleCreateAccount} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                minLength={8}
                required
              />
            </div>
            {error && (
              <p className="mt-1 text-xs text-destructive">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-sage hover:bg-sage-dark text-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating account…" : "Create account"}
            </Button>
          </form>
          <div className="space-y-2 text-center text-sm">
            <button
              type="button"
              onClick={handleBack}
              className="text-muted-foreground underline hover:text-foreground"
            >
              Back
            </button>
            <p>
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Sign in
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
