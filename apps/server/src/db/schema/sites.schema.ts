import {
  boolean,
  integer,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { studyAreas } from './study-areas.schema';

export const miningSites = pgTable('mining_sites', {
  id: uuid('id').defaultRandom().primaryKey(),
  studyAreaId: uuid('study_area_id')
    .references(() => studyAreas.id)
    .notNull(),
  name: text('name').notNull(),
  source: text('source').default('SATELLITE').notNull(),
  status: text('status').default('ACTIVE').notNull(),
  confidence: text('confidence').default('UNCONFIRMED').notNull(),
  boundary: text('boundary').notNull(),
  centroid: text('centroid').notNull(),
  areaHa: real('area_ha').notNull(),
  riskScore: integer('risk_score').default(0).notNull(),
  riskLevel: text('risk_level').default('LOW').notNull(),
  isDeleted: boolean('is_deleted').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const detections = pgTable('detections', {
  id: uuid('id').defaultRandom().primaryKey(),
  siteId: uuid('site_id')
    .references(() => miningSites.id)
    .notNull(),
  boundary: text('boundary').notNull(),
  areaHa: real('area_ha').notNull(),
  deltaNdvi: real('delta_ndvi').notNull(),
  deltaBsi: real('delta_bsi').notNull(),
  detectionDate: timestamp('detection_date', { withTimezone: true }).notNull(),
  source: text('source').default('SATELLITE').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
