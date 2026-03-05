import { cache } from "react";
import { getAuthUser } from "@/lib/supabase/server";

export const createTRPCContext = cache(async () => {
  try {
    const { supabase, user, error } = await getAuthUser();
    return {
      supabase,
      user: error ? null : user,
    };
  } catch {
    return { supabase: null, user: null };
  }
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
