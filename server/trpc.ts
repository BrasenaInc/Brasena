import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { Context } from "./context";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

const enforceAuth = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceAuth);

const enforceAdmin = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { ...ctx, user: ctx.user } });
});

export const adminProcedure = t.procedure.use(enforceAuth).use(
  t.middleware(async ({ ctx, next }) => {
    const userId = ctx.user!.id;
    try {
      const [dbUser] = await db.select().from(users).where(eq(users.id, userId));
      if (!dbUser || dbUser.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN", message: "Admin only" });
      }
      return next({ ctx: { ...ctx, dbUser } });
    } catch (e) {
      if (e instanceof TRPCError) throw e;
      throw new TRPCError({ code: "FORBIDDEN", message: "Admin only" });
    }
  })
);
