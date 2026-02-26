/**
 * Reusable form field: label, input, and error message. Used for consistent
 * auth and checkout forms with accessible labels and inline validation errors.
 */

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface FormFieldProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "className"> {
  label: string
  error?: string
  required?: boolean
  inputClassName?: string
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  function FormField(
    { label, error, required, inputClassName, id, ...inputProps },
    ref
  ): JSX.Element {
    const fieldId = id ?? `field-${label.replace(/\s/g, "-").toLowerCase()}`
    return (
      <div className="w-full">
        <label
          htmlFor={fieldId}
          className="block text-xs font-semibold uppercase tracking-[0.06em] text-text-muted mb-1.5"
        >
          {label}
          {required && <span className="text-brand-sage ml-0.5">*</span>}
        </label>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={cn("input", error && "border-[color:var(--color-error)] focus:border-[color:var(--color-error)]", inputClassName)}
          {...inputProps}
        />
        {error && (
          <p
            id={`${fieldId}-error`}
            role="alert"
            className="mt-1.5 text-sm text-[color:var(--color-error)]"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
