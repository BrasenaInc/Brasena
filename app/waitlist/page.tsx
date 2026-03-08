"use client";

import { useState, Suspense, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { CheckIcon, CopyIcon, Share2, MapPin } from "lucide-react";

// Phone input: format as XXX-XXX-XXXX
function formatPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

type Step = 0 | 1 | 2 | 3;
type UserType = "b2c" | "b2b";

interface SignupState {
  fullName: string;
  email: string;
  phone: string;
  birthday: string;
  address: string;
  smsOptIn: boolean;
}

interface CompletedState {
  email: string;
  firstName: string;
  referralCode: string;
  entries: number;
  customerId: string;
}

const SURVEY_QUESTIONS = [
  {
    id: "source",
    label: "1. How did you hear about us?",
    multi: false,
    options: ["Instagram", "TikTok", "Friend / Family", "Flyer", "Google", "Other"],
  },
  {
    id: "frequency",
    label: "2. How often do you buy meat?",
    multi: false,
    options: ["Weekly", "Bi-weekly", "Monthly", "Occasionally"],
  },
  {
    id: "budget",
    label: "3. Monthly meat budget?",
    multi: false,
    options: ["Under $50", "$50–$100", "$100–$200", "$200+"],
  },
  {
    id: "priority",
    label: "4. What matters most to you?",
    multi: false,
    options: ["Price", "Quality", "Convenience", "Variety"],
  },
  {
    id: "meatTypes",
    label: "5. What types do you buy most?",
    multi: true,
    options: ["Beef", "Chicken", "Pork", "Lamb", "Seafood", "Mixed"],
  },
  {
    id: "bundles",
    label: "6. Interested in bulk bundles?",
    multi: false,
    options: ["Yes definitely", "Maybe", "Not really"],
  },
];

const ENTRY_LADDER = [
  { label: "Join the waitlist", bonus: "+1 entry" },
  { label: "Complete the survey", bonus: "+2 entries" },
  { label: "Refer a friend", bonus: "+3 per referral" },
  { label: "5 referrals", bonus: "+10 bonus" },
  { label: "10 referrals", bonus: "+25 bonus" },
  { label: "25 referrals", bonus: "+75 bonus" },
];

const PRIZES = [
  { place: "Grand Prize", value: "$500 cash", color: "#d4af37" },
  { place: "2nd Place", value: "$250 gift card", color: "#b0b0b0" },
  { place: "3rd Place", value: "$100 + 20×$25", color: "#c4885a" },
];

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://brasenabx.com";

function WaitlistContent() {
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref") ?? "";

  const [step, setStep] = useState<Step>(0);
  const [userType, setUserType] = useState<UserType>("b2c");
  const [surveyAnswers, setSurveyAnswers] = useState<
    Record<string, string | string[]>
  >({});
  const [completed, setCompleted] = useState<CompletedState | null>(null);
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [surveyError, setSurveyError] = useState("");
  const [locale, setLocale] = useState<"en" | "es">("en");
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
  const [addressLoading, setAddressLoading] = useState(false);
  const [showAddressDropdown, setShowAddressDropdown] = useState(false);
  const addressDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const addressWrapperRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<SignupState>({
    fullName: "",
    email: "",
    phone: "",
    birthday: "",
    address: "",
    smsOptIn: false,
  });

  const fetchAddressSuggestions = useCallback(async (query: string) => {
    const trimmed = query.trim();
    if (trimmed.length < 3) {
      setAddressSuggestions([]);
      return;
    }
    setAddressLoading(true);
    try {
      const params = new URLSearchParams({
        q: `${trimmed}, New York`,
        format: "json",
        addressdetails: "1",
        limit: "5",
        countrycodes: "us",
        viewbox: "-79.76,40.50,-71.86,45.02",
        bounded: "1",
      });
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?${params}`,
        { headers: { Accept: "application/json", "User-Agent": "BrasenaWaitlist/1.0 (contact@brasenabx.com)" } }
      );
      const data = (await res.json()) as { display_name: string }[];
      setAddressSuggestions(data.map((a) => a.display_name));
      setShowAddressDropdown(true);
    } catch {
      setAddressSuggestions([]);
    } finally {
      setAddressLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (addressWrapperRef.current && !addressWrapperRef.current.contains(e.target as Node)) {
        setShowAddressDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const signupMutation = trpc.waitlist.signup.useMutation({
    onSuccess: (data) => {
      if (!data) return;
      const firstName = form.fullName.trim().split(/\s+/)[0] ?? form.fullName;
      setCompleted({
        email: form.email,
        firstName,
        referralCode: data?.referralCode ?? "",
        entries: data?.entries ?? 1,
        customerId: data?.customerId ?? "",
      });
      setStep(2);
      setSubmitError("");
    },
    onError: (err) => {
      setSubmitError(err.message ?? "Something went wrong. Please try again.");
    },
  });

  const surveyMutation = trpc.waitlist.submitSurvey.useMutation({
    onSuccess: () => {
      setStep(3);
      setSurveyError("");
    },
    onError: () => {
      setStep(3);
    },
  });

  function handleTypeSelect(type: UserType) {
    setUserType(type);
    setStep(1);
  }

  function handleInfoSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim()) return;
    const parts = form.fullName.trim().split(/\s+/);
    const firstName = parts[0] ?? form.fullName;
    const lastName = parts.slice(1).join(" ") || undefined;
    signupMutation.mutate({
      firstName,
      lastName,
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim() || undefined,
      birthday: form.birthday.trim() || undefined,
      address: form.address.trim() || undefined,
      smsOptIn: form.smsOptIn,
      type: userType,
      referralCode: refCode || undefined,
      source: refCode ? "referral" : "direct",
    });
  }

  function toggleAnswer(questionId: string, option: string, multi: boolean) {
    setSurveyAnswers((prev) => {
      if (multi) {
        const current = (prev[questionId] as string[]) ?? [];
        const next = current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option];
        return { ...prev, [questionId]: next };
      }
      return { ...prev, [questionId]: option };
    });
  }

  function isSelected(
    questionId: string,
    option: string,
    multi: boolean
  ): boolean {
    if (multi) {
      return ((surveyAnswers[questionId] as string[]) ?? []).includes(option);
    }
    return surveyAnswers[questionId] === option;
  }

  function handleSurveySubmit() {
    if (!completed?.customerId) {
      setStep(3);
      return;
    }
    surveyMutation.mutate({
      customerId: completed.customerId,
      answers: surveyAnswers,
    });
  }

  function handleSurveySkip() {
    setStep(3);
  }

  function handleCopy() {
    const link = `${BASE_URL}/waitlist?ref=${completed?.referralCode ?? ""}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const referralLink = `${BASE_URL}/waitlist?ref=${completed?.referralCode ?? ""}`;

  return (
    <div className="min-h-screen w-full bg-[#0C0F0C]">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
        <Link
          href="/marketing"
          className="font-serif text-lg font-bold tracking-[0.2em] text-white"
        >
          BRASENA
        </Link>
        <div className="flex rounded-full border border-white/20 bg-white/5 p-0.5">
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === "en"
                ? "bg-white text-[#0C0F0C]"
                : "text-white/70 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLocale("es")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === "es"
                ? "bg-white text-[#0C0F0C]"
                : "text-white/70 hover:text-white"
            }`}
          >
            ES
          </button>
        </div>
      </header>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-12">
      {step > 0 && (
        <div className="w-full max-w-[440px] flex gap-1 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[3px] flex-1 rounded-full transition-all duration-500"
              style={{
                background: step >= i ? "#7a9e80" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      )}

      <div
        className="w-full max-w-[440px] rounded-[20px] overflow-hidden"
        style={{
          background: "#192019",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {step === 0 && (
          <div className="p-8">
            <div
              className="rounded-xl p-4 mb-6 text-center"
              style={{
                background: "rgba(122,158,128,0.1)",
                border: "1px solid rgba(122,158,128,0.2)",
              }}
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#7a9e80] mb-1">
                Launch Day Raffle
              </p>
              <p className="font-['Playfair_Display'] text-white text-lg font-bold leading-snug">
                Sign up & enter to win
              </p>
              <div className="flex justify-center gap-4 mt-3">
                {PRIZES.map((p) => (
                  <div key={p.place} className="text-center">
                    <p
                      className="text-[11px] font-bold"
                      style={{ color: p.color }}
                    >
                      {p.value}
                    </p>
                    <p className="text-[9px] text-white/30 mt-0.5">
                      {p.place}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-1">
              Join the Waitlist
            </h1>
            <p className="text-sm text-white/40 mb-6">
              Choose how you will use Brasena
            </p>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleTypeSelect("b2c")}
                className="text-left rounded-xl p-5 transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7a9e80]">
                  B2C
                </span>
                <p className="text-white font-semibold text-base mt-0.5 mb-0.5">
                  For Families
                </p>
                <p className="text-white/40 text-xs mb-3">
                  Personal & household
                </p>
                <div className="space-y-1 mb-4">
                  {[
                    "Wholesale prices",
                    "5–20 lb box sizes",
                    "Flexible delivery",
                    "No membership fee",
                  ].map((f) => (
                    <p key={f} className="text-white/60 text-xs">
                      + {f}
                    </p>
                  ))}
                </div>
                <p className="text-[#7a9e80] font-bold text-sm">
                  From $4.99 / lb
                </p>
                <p className="text-white/25 text-[11px]">
                  vs $8–12 / lb retail
                </p>
              </button>

              <button
                type="button"
                onClick={() => handleTypeSelect("b2b")}
                className="text-left rounded-xl p-5 transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7a9e80]">
                  B2B
                </span>
                <p className="text-white font-semibold text-base mt-0.5 mb-0.5">
                  For Businesses
                </p>
                <p className="text-white/40 text-xs mb-3">
                  Restaurants, lounges & catering
                </p>
                <div className="space-y-1 mb-4">
                  {[
                    "Full case bulk pricing",
                    "Custom cut specifications",
                    "Priority scheduling",
                    "Dedicated account manager",
                  ].map((f) => (
                    <p key={f} className="text-white/60 text-xs">
                      + {f}
                    </p>
                  ))}
                </div>
                <p className="text-[#7a9e80] font-bold text-sm">
                  Volume pricing available
                </p>
                <p className="text-white/25 text-[11px]">
                  Contact us for quotes
                </p>
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleInfoSubmit} className="p-8">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7a9e80]">
                {userType === "b2c" ? "B2C" : "B2B"}
              </span>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                Back
              </button>
            </div>

            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-1 mt-3">
              Your Information
            </h2>
            <p className="text-sm text-white/40 mb-6">
              We need a few details to confirm your spot
            </p>

            {submitError && (
              <p className="text-red-400 text-sm mb-4">{submitError}</p>
            )}

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, fullName: e.target.value }))
                  }
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: formatPhoneInput(e.target.value) }))
                  }
                  placeholder="212-555-0123"
                  maxLength={12}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.smsOptIn}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, smsOptIn: e.target.checked }))
                    }
                    className="accent-[#7a9e80]"
                  />
                  <span className="text-xs text-white/40">
                    Text me launch updates (msg & data rates apply, reply STOP to
                    unsubscribe)
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                  Birthday
                </label>
                <input
                  type="date"
                  value={form.birthday}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, birthday: e.target.value }))
                  }
                  className="w-full rounded-xl px-4 py-3 text-sm text-white/60 outline-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    colorScheme: "dark",
                  }}
                />
              </div>

              <div ref={addressWrapperRef} className="relative">
                <label className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1.5">
                  Address
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none"
                    aria-hidden
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    value={form.address}
                    onChange={(e) => {
                      const v = e.target.value;
                      setForm((p) => ({ ...p, address: v }));
                      if (addressDebounceRef.current) clearTimeout(addressDebounceRef.current);
                      addressDebounceRef.current = setTimeout(() => fetchAddressSuggestions(v), 300);
                    }}
                    onFocus={() => addressSuggestions.length > 0 && setShowAddressDropdown(true)}
                    placeholder="Start typing your address..."
                    className="w-full rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/25 outline-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                </div>
                {showAddressDropdown && (addressSuggestions.length > 0 || addressLoading) && (
                  <ul
                    className="absolute z-10 w-full mt-1 rounded-xl overflow-hidden border border-white/10 max-h-48 overflow-y-auto"
                    style={{
                      background: "#192019",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                  >
                    {addressLoading ? (
                      <li className="px-4 py-3 text-sm text-white/50">Searching...</li>
                    ) : (
                      addressSuggestions.map((suggestion, i) => (
                        <li key={`${i}-${suggestion}`}>
                          <button
                            type="button"
                            className="w-full text-left px-4 py-3 text-sm text-white/90 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                            onClick={() => {
                              setForm((p) => ({ ...p, address: suggestion }));
                              setAddressSuggestions([]);
                              setShowAddressDropdown(false);
                            }}
                          >
                            {suggestion}
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                )}
                <p className="text-[10px] text-white/25 mt-1.5">
                  New York only. Start typing to search and select your address.
                </p>
              </div>

              <button
                type="submit"
                disabled={signupMutation.isPending}
                className="w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-all mt-2"
                style={{
                  background: signupMutation.isPending
                    ? "rgba(122,158,128,0.5)"
                    : "#7a9e80",
                }}
              >
                {signupMutation.isPending ? "Saving..." : "Continue to Survey"}
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="p-8">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-1">
              Quick Survey
            </h2>
            <p className="text-sm text-white/40 mb-1">
              Help us know you better (optional)
            </p>
            <p className="text-xs text-[#7a9e80] mb-6">
              Completing it earns you +2 raffle entries
            </p>

            {surveyError && (
              <p className="text-red-400 text-sm mb-4">{surveyError}</p>
            )}

            <div className="flex flex-col gap-6">
              {SURVEY_QUESTIONS.map((q) => (
                <div key={q.id}>
                  <p className="text-sm text-white/80 font-medium mb-2.5">
                    {q.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => {
                      const sel = isSelected(q.id, opt, q.multi);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleAnswer(q.id, opt, q.multi)}
                          className="px-3.5 py-2 rounded-xl text-xs font-medium transition-all"
                          style={{
                            background: sel
                              ? "rgba(122,158,128,0.12)"
                              : "transparent",
                            border: sel
                              ? "1px solid #7a9e80"
                              : "1px solid rgba(255,255,255,0.1)",
                            color: sel
                              ? "#7a9e80"
                              : "rgba(255,255,255,0.55)",
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <button
                type="button"
                onClick={handleSurveySubmit}
                disabled={surveyMutation.isPending}
                className="w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-all"
                style={{
                  background: surveyMutation.isPending
                    ? "rgba(122,158,128,0.5)"
                    : "#7a9e80",
                }}
              >
                {surveyMutation.isPending ? "Saving..." : "Submit Survey"}
              </button>
              <button
                type="button"
                onClick={handleSurveySkip}
                className="w-full text-center text-xs text-white/30 hover:text-white/50 transition-colors py-2"
              >
                Skip for now
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="p-8">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-1">
              You&apos;re on the list
              {completed?.firstName ? `, ${completed.firstName}` : ""}.
            </h2>
            <p className="text-sm text-white/40 mb-6">
              You&apos;re entered in the grand opening raffle.
            </p>

            <div
              className="rounded-xl p-5 mb-6 flex items-center justify-between"
              style={{
                background: "rgba(122,158,128,0.08)",
                border: "1px solid rgba(122,158,128,0.15)",
              }}
            >
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-1">
                  Your Raffle Entries
                </p>
                <p className="text-4xl font-bold text-[#7a9e80] leading-none">
                  {completed?.entries ?? 1}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/30 mb-1">Referral Code</p>
                <p className="text-sm font-mono font-semibold text-white/70">
                  {completed?.referralCode ?? "—"}
                </p>
              </div>
            </div>

            <div className="flex gap-px mb-6 rounded-xl overflow-hidden">
              {PRIZES.map((p) => (
                <div
                  key={p.place}
                  className="flex-1 py-3 px-2 text-center"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <p
                    className="text-[11px] font-bold"
                    style={{ color: p.color }}
                  >
                    {p.value}
                  </p>
                  <p className="text-[9px] text-white/25 mt-0.5">{p.place}</p>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-white mb-2">
              Share to earn more entries
            </p>
            <p className="text-xs text-white/40 mb-3">
              Every friend who signs up with your link = +3 entries for you.
            </p>

            <div
              className="rounded-xl p-3.5 mb-4 flex items-center justify-between gap-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-xs font-mono text-white/50 truncate flex-1">
                {referralLink}
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-semibold shrink-0 transition-colors"
                style={{
                  color: copied ? "#7a9e80" : "rgba(255,255,255,0.5)",
                }}
              >
                {copied ? (
                  <CheckIcon size={13} />
                ) : (
                  <CopyIcon size={13} />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full rounded-xl py-3.5 text-sm font-semibold text-white mb-6"
              style={{ background: "#7a9e80" }}
            >
              <span className="flex items-center justify-center gap-2">
                <Share2 size={15} />
                Share your link
              </span>
            </button>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "20px",
              }}
            >
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/25 mb-3">
                How to earn more entries
              </p>
              {ENTRY_LADDER.map((row, i) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-2.5 text-xs"
                  style={{
                    borderBottom:
                      i < ENTRY_LADDER.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <span className="text-white/50">{row.label}</span>
                  <span className="font-semibold text-[#7a9e80]">
                    {row.bonus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {step === 0 && (
        <p className="text-xs text-white/20 mt-6 text-center max-w-xs">
          Launching in The Bronx, NYC · 2026
        </p>
      )}
      </div>
    </div>
  );
}

export default function WaitlistPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-[#0C0F0C] flex items-center justify-center">
          <p className="text-white/50">Loading...</p>
        </div>
      }
    >
      <WaitlistContent />
    </Suspense>
  );
}
