import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const reports = pgTable("reports", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  kind: text("kind").notNull(),
  status: text("status").default("PENDING").notNull(),
  payload: jsonb("payload").default({}).notNull(),
  generatedAt: timestamp("generated_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const alerts = pgTable("alerts", {
  id: uuid("id").defaultRandom().primaryKey(),
  siteId: uuid("site_id"),
  severity: text("severity").default("INFO").notNull(),
  message: text("message").notNull(),
  acknowledgedAt: timestamp("acknowledged_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const auditLog = pgTable("audit_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  action: text("action").notNull(),
  resourceType: text("resource_type").notNull(),
  resourceId: uuid("resource_id"),
  metadata: jsonb("metadata").default({}).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
