import { router } from "../trpc";
import { usersRouter } from "./users";
import { stripeRouter } from "./stripe";
import { productsRouter } from "./products";
import { addressesRouter } from "./addresses";
import { cartRouter } from "./cart";
import { ordersRouter } from "./orders";
import { settingsRouter } from "./settings";

export const appRouter = router({
  users: usersRouter,
  stripe: stripeRouter,
  products: productsRouter,
  addresses: addressesRouter,
  cart: cartRouter,
  orders: ordersRouter,
  settings: settingsRouter,
});

export type AppRouter = typeof appRouter;
