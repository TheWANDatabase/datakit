import {managementSchema} from "../schema";
import {bigint, index, integer, jsonb, timestamp} from "drizzle-orm/pg-core";


export const stats = managementSchema.table('stats', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  /* Episode Statistics */
  castCount: integer('cast_count').notNull(),
  episodeCount: integer('episode_count').notNull(),
  sponsorCount: integer('sponsor_count').notNull(),
  sponsorSpotCount: integer('sponsor_spot_count').notNull(),
  sponsorSpotDuration: integer('sponsor_spot_duration').notNull(),
  lttProductsIndexed: integer('ltt_products_indexed').notNull(),
  topicCount: integer('topic_count').notNull(),
  topicContributorCount: integer('topic_contributor_count').notNull(),

  /* User Statistics */
  usersCount: integer('users_count').notNull(),

  /* CDN Statistics */
  entitySize: bigint('entity_size', {mode: "number"}).notNull().default(0),
  entitySizeDelta: bigint('entity_size_delta', {mode: "number"}).notNull().default(0),
  entityCount: bigint('entity_count', {mode: "number"}).notNull().default(0),
  entityCountDelta: bigint('entity_count_delta', {mode: "number"}).notNull().default(0),
  queueBacklog: bigint('queue_backlog', {mode: "number"}).notNull().default(0),
  queueBacklogDelta: bigint('queue_backlog_delta', {mode: "number"}).notNull().default(0),
  entityCountsByType: jsonb('entity_counts_by_type').notNull().default({}),


}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
})