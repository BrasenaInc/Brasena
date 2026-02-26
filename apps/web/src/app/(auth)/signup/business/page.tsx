"use client"

/**
 * Signup Step 2 (business): same as residential plus business name and EIN.
 * Inserts profile, address, and business_profiles row. Redirects to /home.
 */

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { ROUTES } from "@/config"
import { useLanguage } from "@/lib/context/language"
import { useSupabase } from "@/lib/hooks/useSupabase"
import {
  signupWithAddressSchema,
  type SignupWithAddressFormData,
} from "@/lib/validators"
import type { TablesInsert } from "@/types/supabase"
import { BrasenaLogo } from "@/components/brasena-logo"
import { FormField } from "@/components/ui/form-field"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

const defaultValues: SignupWithAddressFormData = {
  name: "",
  email: "",
  phone: "",
  password: "",
  profileType: "business",
  preferredLanguage: "en",
  businessName: "",
  ein: "",
  birthday: "",
  deliveryAddress: {
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
  },
  agreeToTerms: false,
}

export default function SignupBusinessPage(): JSX.Element {
  const router = useRouter()
  const { t } = useLanguage()
  const supabase = useSupabase()
  const [showPassword, setShowPassword] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignupWithAddressFormData>({
    resolver: zodResolver(signupWithAddressSchema),
    defaultValues,
  })

  const preferredLanguage = watch("preferredLanguage")

  async function onSubmit(data: SignupWithAddressFormData): Promise<void> {
    setSubmitError(null)
    if (data.profileType !== "business" || !data.businessName || !data.ein) {
      setSubmitError("Business name and EIN are required.")
      return
    }
    try {
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
            phone: data.phone,
            profile_type: "business",
            preferred_language: data.preferredLanguage,
          },
        },
      })
      if (signUpError) {
        setSubmitError(signUpError.message)
        return
      }
      const userId = authData.user?.id
      if (!userId) {
        setSubmitError("Account created but session not found. Please sign in.")
        return
      }

      const now = new Date().toISOString()
      const profile: TablesInsert<"profiles"> = {
        id: userId,
        email: data.email,
        full_name: data.name,
        phone: data.phone,
        role: "customer",
        profile_type: "business",
        preferred_language: data.preferredLanguage,
        created_at: now,
        updated_at: now,
      }
      const { error: profileError } = await supabase.from("profiles").insert(profile)
      if (profileError) {
        setSubmitError(profileError.message)
        return
      }

      const businessProfile: TablesInsert<"business_profiles"> = {
        user_id: userId,
        business_name: data.businessName,
        ein: data.ein,
        verified: false,
      }
      const { error: bizError } = await supabase
        .from("business_profiles")
        .insert(businessProfile)
      if (bizError) {
        setSubmitError(bizError.message)
        return
      }

      const address: TablesInsert<"addresses"> = {
        user_id: userId,
        street: data.deliveryAddress.street,
        apt: data.deliveryAddress.apt || null,
        city: data.deliveryAddress.city,
        state: data.deliveryAddress.state,
        zip: data.deliveryAddress.zip,
        instructions: data.deliveryAddress.instructions ?? null,
        is_default: true,
      }
      const { error: addressError } = await supabase.from("addresses").insert(address)
      if (addressError) {
        setSubmitError(addressError.message)
        return
      }

      router.push(ROUTES.SHOP)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  return (
    <>
      <div className="mb-6 flex justify-center">
        <BrasenaLogo size="sm" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <Link
          href={ROUTES.SIGNUP}
          className="text-text-secondary hover:text-brand-sage text-sm font-medium min-h-touch flex items-center"
        >
          ← {t("common.back")}
        </Link>
        <Link
          href={ROUTES.LOGIN}
          className="text-text-secondary hover:text-brand-sage text-sm font-medium min-h-touch flex items-center"
        >
          {t("login.submit")}
        </Link>
      </div>
      <p className="text-brand-sage text-sm font-medium mb-6">{t("signup.step2")}</p>

      <h1 className="font-display text-2xl font-semibold text-text-primary mb-1">
        {t("form.businessTitle")}
      </h1>
      <p className="text-text-secondary text-base mb-6">
        {t("form.subtitle")}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          label={t("form.name")}
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          label={t("form.businessName")}
          required
          error={errors.businessName?.message}
          {...register("businessName")}
        />
        <FormField
          label={t("form.ein")}
          required
          error={errors.ein?.message}
          {...register("ein")}
        />
        <FormField
          label={t("form.email")}
          type="email"
          autoComplete="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <FormField
          label={t("form.phone")}
          type="tel"
          autoComplete="tel"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
        <div className="w-full">
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            {t("form.password")} <span className="text-brand-sage ml-0.5">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              className={cn(
                "input pr-12",
                errors.password && "border-[color:var(--color-error)]"
              )}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary min-h-touch min-w-touch flex items-center justify-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && (
            <p role="alert" className="mt-1.5 text-sm text-[color:var(--color-error)]">
              {errors.password.message}
            </p>
          )}
        </div>
        <FormField
          label={t("form.birthday")}
          type="date"
          required
          error={errors.birthday?.message}
          {...register("birthday")}
        />

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-text-primary">{t("form.addressSection")}</legend>
          <FormField
            label={t("form.street")}
            required
            error={errors.deliveryAddress?.street?.message}
            {...register("deliveryAddress.street")}
          />
          <FormField
            label={t("form.aptShort")}
            error={errors.deliveryAddress?.apt?.message}
            {...register("deliveryAddress.apt")}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label={t("form.city")}
              required
              error={errors.deliveryAddress?.city?.message}
              {...register("deliveryAddress.city")}
            />
            <FormField
              label={t("form.state")}
              required
              error={errors.deliveryAddress?.state?.message}
              {...register("deliveryAddress.state")}
            />
          </div>
          <FormField
            label={t("form.zip")}
            required
            error={errors.deliveryAddress?.zip?.message}
            {...register("deliveryAddress.zip")}
          />
        </fieldset>

        <div className="w-full">
          <span className="block text-sm font-medium text-text-primary mb-2">
            {t("form.language")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setValue("preferredLanguage", "en")}
              className={cn(
                "flex-1 py-3 rounded-xl font-medium min-h-touch border transition-all",
                preferredLanguage === "en"
                  ? "bg-brand-sage/20 border-brand-sage text-brand-sage"
                  : "bg-surface-muted border-surface-border text-text-secondary hover:border-brand-sage/40"
              )}
            >
              {t("common.english")}
            </button>
            <button
              type="button"
              onClick={() => setValue("preferredLanguage", "es")}
              className={cn(
                "flex-1 py-3 rounded-xl font-medium min-h-touch border transition-all",
                preferredLanguage === "es"
                  ? "bg-brand-sage/20 border-brand-sage text-brand-sage"
                  : "bg-surface-muted border-surface-border text-text-secondary hover:border-brand-sage/40"
              )}
            >
              {t("common.espanol")}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 rounded border-surface-border bg-surface-muted text-brand-sage focus:ring-brand-sage"
            {...register("agreeToTerms")}
          />
          <span className="text-sm text-text-secondary">
            {t("form.agreeTerms")}
          </span>
        </label>
        {errors.agreeToTerms && (
          <p role="alert" className="text-sm text-[color:var(--color-error)]">
            {errors.agreeToTerms.message}
          </p>
        )}

        {submitError && (
          <p role="alert" className="text-sm text-[color:var(--color-error)]">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2 min-h-touch"
        >
          {isSubmitting ? <Spinner size="sm" color="white" /> : t("form.submit")}
        </button>
      </form>
    </>
  )
}
