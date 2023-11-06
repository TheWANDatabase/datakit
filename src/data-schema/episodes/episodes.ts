import {credits} from "../cast/credits";
import {productLinker} from "../lttstore/productLinker";

import {integer, pgTable, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {sponsorSpot} from "../sponsors/spots";
import {topics} from "../topics/topics";
import {media} from "../media";
import {merchMessages} from "../merchMessages/message";

export const episodes = pgTable('episodes', {
  id: varchar('id', {length: 12}).primaryKey().unique(),
  floatplane: varchar('floatplane', {length: 12}).unique(),``
  title: text('title').default('Title Unavailable'),
  description: text('description').default('Description Unavailable'),
  thumbnail: uuid('thumbnail').unique().references(() => media.id),
  aired: timestamp('aired').defaultNow(),
  duration: integer('duration'),
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