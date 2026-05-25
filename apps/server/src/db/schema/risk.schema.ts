import {
  integer,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { miningSites } from './sites.schema';

export const riskZones = pgTable('risk_zones', {
  id: uuid('id').defaultRandom().primaryKey(),
  siteId: uuid('site_id')
    .references(() => miningSites.id)
    .notNull(),
  detectionId: uuid('detection_id').notNull(),
  zoneBoundary: text('zone_boundary').notNull(),
  zoneAreaHa: real('zone_area_ha').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const riverNetwork = pgTable('river_network', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  riverType: text('river_type').notNull(),
  geom: text('geom').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const communities = pgTable('communities', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  population: integer('population').default(0).notNull(),
  location: text('location').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const contaminationEvents = pgTable('contamination_events', {
  id: uuid('id').defaultRandom().primaryKey(),
  siteId: uuid('site_id')
    .references(() => miningSites.id)
    .notNull(),
  riverId: uuid('river_id')
    .references(() => riverNetwork.id)
    .notNull(),
  communityId: uuid('community_id')
    .references(() => communities.id)
    .notNull(),
  intersectionGeom: text('intersection_geom').notNull(),
  distanceToRiverM: real('distance_to_river_m').notNull(),
  intersectionLengthM: real('intersection_length_m').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
