import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const studyAreas = pgTable('study_areas', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  boundary: text('boundary').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
