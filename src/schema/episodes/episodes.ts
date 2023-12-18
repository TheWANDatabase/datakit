import {credits} from "../cast/credits";
import {productLinker} from "../lttstore/productLinker";

import {bigint, index, integer, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {sponsorSpot} from "../sponsors/spots";
import {topics} from "../topics/topics";
import {media} from "../media";
import {merchMessages} from "../merchMessages/message";
import {dataSchema} from "../schema";

export const episodes = dataSchema.table('episodes', {
  id: varchar('id', {length: 12}).primaryKey().unique(),
  floatplane: varchar('floatplane', {length: 12}).unique(),
  title: text('title').default('Title Unavailable'),
  description: text('description').default('Description Unavailable'),
  thumbnail: uuid('thumbnail').unique().references(() => media.id),
  aired: timestamp('aired').defaultNow(),
  duration: integer('duration'),
  topicCount: bigint('topic_count', {mode: "number"}).notNull().default(0),
  hostCount: bigint('host_count', {mode: "number"}).notNull().default(0),
  sponsorCount: bigint('host_count', {mode: "number"}).notNull().default(0),
  merchMessageCount: bigint('host_count', {mode: "number"}).notNull().default(0),
  introStart: integer('intro_start'),
  introDuration: integer('intro_duration'),
  preShowOffset: integer('pre_show_offset').default(0)
}, (table) => {
  return {
    airedIdx: index('aired_idx').on(table.aired).desc(),
    durationIdx: index('duration_idx').on(table.duration).desc(),
    titleIdx: index('title_idx').on(table.title).desc(),
  }
})

export const episodesRelations = relations(episodes, ({one, many}) => ({
  castMembers: many(credits),
  products: many(productLinker),
  sponsorSpots: many(sponsorSpot),
  topics: many(topics),
  merchMessages: many(merchMessages),
  thumbnail: one(media, {
    fields: [episodes.thumbnail],
    references: [media.id]
  })
}))