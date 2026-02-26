import { z } from "zod"

// ─── Auth Schemas ──────────────────────────────────────

const signupBaseSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{10,}$/, "Please enter a valid phone number"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),

  profileType: z.enum(["residential", "business"]),

  preferredLanguage: z.enum(["en", "es"]).default("en"),

  // B2B only fields
  businessName: z.string().optional(),
  ein: z.string().optional(),

  // Agreement (boolean so form can default to false; validation requires true)
  agreeToTerms: z
    .boolean()
    .refine((v) => v === true, { message: "You must agree to the terms" }),
})

const businessRefine = (
  data: { profileType: string; businessName?: string; ein?: string }
) => {
  if (data.profileType === "business") {
    return !!data.businessName && !!data.ein
  }
  return true
}

export const signupSchema = signupBaseSchema.refine(businessRefine, {
  message: "Business name and EIN are required for business accounts",
  path: ["businessName"],
})

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

// ─── Address Schema ────────────────────────────────────

export const addressSchema = z.object({
  street: z
    .string()
    .min(5, "Please enter a valid street address"),

  apt: z.string().optional(),

  city: z
    .string()
    .min(2, "City is required"),

  state: z
    .string()
    .length(2, "Please use 2-letter state code (e.g. NY)"),

  zip: z
    .string()
    .regex(/^\d{5}$/, "Please enter a valid 5-digit ZIP code"),

  instructions: z
    .string()
    .max(200, "Instructions too long")
    .optional(),
})

// Signup with address and birthday (for residential/business form pages)
export const signupWithAddressSchema = signupBaseSchema
  .extend({
    birthday: z.string().min(1, "Birthday is required"),
    deliveryAddress: addressSchema,
  })
  .refine(businessRefine, {
    message: "Business name and EIN are required for business accounts",
    path: ["businessName"],
  })

// ─── Checkout Schema ───────────────────────────────────

export const checkoutSchema = z.object({
  deliveryAddress: addressSchema,
  paymentMethodId: z.string().min(1, "Please select a payment method"),
  saveAddress: z.boolean().default(false),
  notes: z.string().max(200).optional(),
})

// ─── Phone Order Schema (CSR) ──────────────────────────

export const phoneOrderSchema = z.object({
  customerPhone: z
    .string()
    .regex(/^\+?[\d\s\-().]{10,}$/, "Invalid phone number"),

  deliveryAddress: addressSchema,

  items: z.array(
    z.object({
      productId: z.string().uuid(),
      weightLbs: z.enum(["10", "20", "30", "40"]),
      quantity: z.number().int().min(1).max(99),
    })
  ).min(1, "Order must have at least one item"),

  paymentMethod: z.enum(["card", "cash_on_delivery"]),
  notes: z.string().optional(),
})

// ─── Type Exports ──────────────────────────────────────

export type SignupFormData        = z.infer<typeof signupSchema>
export type SignupWithAddressFormData = z.infer<typeof signupWithAddressSchema>
export type LoginFormData         = z.infer<typeof loginSchema>
export type AddressFormData  = z.infer<typeof addressSchema>
export type CheckoutFormData = z.infer<typeof checkoutSchema>
export type PhoneOrderData   = z.infer<typeof phoneOrderSchema>
