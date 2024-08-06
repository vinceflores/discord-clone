// import {mutation}

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { arch } from "os";

export const makeServer = mutation({
  args: {},
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    const email = user?.email;
  },
});

export const joinServer = mutation({
  args: {},
  handler: async (ctx, args) => {},
});

export const leaveServer = mutation({
  args: {},
  handler: async (ctx, args) => {},
});

export const getAllServer = query({
  args: {
    id: v.id("user"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.query("server").filter((q) =>
      q.eq(q.field("owner_id"), args.id)
    ).collect()
  },
});
