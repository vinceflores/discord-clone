// NOTE: You can remove this file. Declaring the shape
// of the database is entirely optional in Convex.
// See https://docs.convex.dev/database/schemas.

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
  {
    server: defineTable({
      name: v.string(),
      owner_email: v.string(),
      owner_id: v.id("user"),
      icon: v.string(),
      updated_at: v.number(),
    }),

    channel: defineTable({
      server_id: v.id("server"),
      name: v.string(),
      type: v.string(),
      updated_at: v.number(),
    }),

    message: defineTable({
      channel_id: v.string(),
      sender_name: v.string(),
      sender_id: v.id("user"),
    }).index("by_channel", ["channel_id"]),

    role: defineTable({
      server_id: v.id("server"),
      name: v.string(),
      permissions: v.object({}),
    }),

    // This definition matches the example query and mutation code:
    numbers: defineTable({
      value: v.number(),
    }),
  },
  { schemaValidation: true }
);
