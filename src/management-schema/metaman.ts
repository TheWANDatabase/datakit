import {index, integer, pgTable, timestamp} from "drizzle-orm/pg-core";

export const metaman = pgTable('metaman', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  castCount: integer('cast_count').notNull(),
  episodeCount: integer('episode_count').notNull(),
  sponsorCount: integer('sponsor_count').notNull(),
  sponsorSpotCount: integer('sponsor_spot_count').notNull(),
  sponsorSpotDuration: integer('sponsor_spot_duration').notNull(),
  lttProductsIndexed: integer('ltt_products_indexed').notNull(),
  topicCount: integer('topic_count').notNull(),
  topicContributorCount: integer('topic_contributor_count').notNull(),
  usersCount: integer('users_count').notNull(),


}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }

})