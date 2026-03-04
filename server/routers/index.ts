import { router } from "../trpc";
import { usersRouter } from "./users";
import { stripeRouter } from "./stripe";
import { productsRouter } from "./products";

export const appRouter = router({
  users: usersRouter,
  stripe: stripeRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
