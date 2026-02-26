"use client"

/**
 * Login page: email/password sign-in with Supabase, validation via loginSchema,
 * and redirect to /home on success. Replaces Sprint 1 smoke test placeholder.
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
import { loginSchema, type LoginFormData } from "@/lib/validators"
import { BrasenaLogo } from "@/components/brasena-logo"
import { FormField } from "@/components/ui/form-field"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export default function LoginPage(): JSX.Element {
  const router = useRouter()
  const { t } = useLanguage()
  const supabase = useSupabase()
  const [showPassword, setShowPassword] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  async function onSubmit(data: LoginFormData): Promise<void> {
    setSubmitError(null)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })
      if (error) {
        setSubmitError(error.message)
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
      <h1 className="font-display text-2xl font-semibold text-text-primary mb-1">
        {t("login.title")}
      </h1>
      <p className="text-text-secondary text-base mb-6">
        {t("login.subtitle")}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          label={t("login.email")}
          type="email"
          autoComplete="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <div className="w-full">
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            {t("login.password")} <span className="text-brand-sage ml-0.5">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              aria-invalid={!!errors.password}
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
          {isSubmitting ? (
            <Spinner size="sm" color="white" />
          ) : (
            t("login.submit")
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-text-secondary text-sm">
        {t("login.newUser")}{" "}
        <Link href={ROUTES.SIGNUP} className="text-brand-sage font-medium hover:underline">
          {t("login.createAccount")}
        </Link>
      </p>
    </>
  )
}
