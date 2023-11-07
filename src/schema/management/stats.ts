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
}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
})