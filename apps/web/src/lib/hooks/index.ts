/**
 * Barrel export for client-side hooks.
 */

export { useAuth } from "./useAuth"
export {
  useProducts,
  useProduct,
  useFeaturedProduct,
  useActivePromotion,
  type ProductWithTiers,
  type PromotionRow,
} from "./useProducts"
export { useSupabase } from "./useSupabase"
