import type { ProfileType, UserRole, OrderStatus } from "@/config"

// ─── User & Auth ───────────────────────────────────────
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  role: UserRole
  profileType: ProfileType
  preferredLanguage: "en" | "es"
  createdAt: string
}

export interface BusinessProfile {
  userId: string
  businessName: string
  ein: string  // Employer Identification Number
  verified: boolean
}

// ─── Product ───────────────────────────────────────────
export type Category = "Beef" | "Pork" | "Chicken"

export interface WeightTier {
  weightLbs: 10 | 20 | 30 | 40
  pricePerLb: number
  totalPrice: number
  savingsAmount: number
  savingsPercent: number
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: Category
  cutType: string          // e.g. "Breast", "Ribeye", "Shoulder"
  images: string[]
  cutDiagramUrl?: string
  weightTiers: WeightTier[]
  usdaGrade?: string       // e.g. "Choice", "Select"
  servingSize: string      // e.g. "Serves 4-6"
  pieceCount?: string      // e.g. "8-10 pieces"
  sku: string
  inStock: boolean
  featured: boolean
  // B2B vs B2C pricing multiplier (future)
  b2bPriceMultiplier?: number
}

// ─── Cart ──────────────────────────────────────────────
export interface CartItem {
  productId: string
  product: Product
  weightLbs: 10 | 20 | 30 | 40
  quantity: number
  unitPrice: number
  subtotal: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  savings: number
  tax: number
  deliveryFee: number
  total: number
}

// ─── Address ───────────────────────────────────────────
export interface Address {
  id?: string
  street: string
  apt?: string
  city: string
  state: string
  zip: string
  instructions?: string
  isDefault?: boolean
}

// ─── Order ─────────────────────────────────────────────
export interface Order {
  id: string
  orderNumber: string       // human-readable, e.g. "BR-2024-0042"
  customerId: string
  vendorId: string
  items: OrderItem[]
  status: OrderStatus
  deliveryAddress: Address
  profileType: ProfileType
  subtotal: number
  savings: number
  tax: number
  deliveryFee: number
  total: number
  paymentIntentId: string
  estimatedDelivery: string // ISO date string (next day)
  confirmedAt?: string
  preparedAt?: string
  pickedUpAt?: string
  deliveredAt?: string
  deliveryPhotoUrl?: string // proof of delivery
  notes?: string
  createdAt: string
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  productName: string
  sku: string
  weightLbs: number
  quantity: number
  unitPrice: number
  subtotal: number
}

// ─── Vendor ────────────────────────────────────────────
export interface Vendor {
  id: string
  name: string
  type: "meat_market" | "warehouse"
  address: Address
  serviceZipCodes: string[]
  contactName: string
  contactPhone: string
  isActive: boolean
}

// ─── Delivery ──────────────────────────────────────────
export type DeliveryProvider = "uber_direct" | "doordash" | "private_van"

export interface Delivery {
  id: string
  orderId: string
  provider: DeliveryProvider
  driverId?: string
  driverName?: string
  driverPhone?: string
  trackingUrl?: string
  estimatedPickup?: string
  estimatedDelivery?: string
  currentLat?: number
  currentLng?: number
  status: "pending" | "assigned" | "picked_up" | "delivered" | "failed"
  photoProofUrl?: string
}

// ─── Notification ──────────────────────────────────────
export interface Notification {
  id: string
  userId: string
  title: string
  body: string
  type: "order_update" | "daily_special" | "discount" | "system"
  read: boolean
  data?: Record<string, string>
  createdAt: string
}

// ─── API Response Wrappers ─────────────────────────────
export interface ApiSuccess<T> {
  data: T
  message?: string
}

export interface ApiError {
  error: string
  code?: string
  details?: Record<string, string[]>
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError
