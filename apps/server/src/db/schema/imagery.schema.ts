import {
  jsonb,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { studyAreas } from './study-areas.schema';

export const imageryScenes = pgTable('imagery_scenes', {
  id: uuid('id').defaultRandom().primaryKey(),
  studyAreaId: uuid('study_area_id')
    .references(() => studyAreas.id)
    .notNull(),
  sceneId: text('scene_id').notNull(),
  acquisitionDate: timestamp('acquisition_date', {
    withTimezone: true,
  }).notNull(),
  cloudCover: real('cloud_cover').notNull(),
  status: text('status').default('DOWNLOADED').notNull(),
  sourcePath: text('source_path'),
  metadata: jsonb('metadata').default({}).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const pipelineRuns = pgTable('pipeline_runs', {
  id: uuid('id').defaultRandom().primaryKey(),
  studyAreaId: uuid('study_area_id')
    .references(() => studyAreas.id)
    .notNull(),
  status: text('status').default('STARTED').notNull(),
  startedAt: timestamp('started_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  finishedAt: timestamp('finished_at', { withTimezone: true }),
  summary: jsonb('summary').default({}).notNull(),
});
