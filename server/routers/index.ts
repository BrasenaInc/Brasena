import { router } from "../trpc";
import { usersRouter } from "./users";
import { stripeRouter } from "./stripe";

export const appRouter = router({
  users: usersRouter,
  stripe: stripeRouter,
});

export type AppRouter = typeof appRouter;
