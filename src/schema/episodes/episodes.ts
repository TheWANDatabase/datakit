import {credits} from "../cast/credits";
import {productLinker} from "../lttstore/productLinker";

import {boolean, index, integer, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
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
  introStart: integer('intro_start'),
  introDuration: integer('intro_duration'),
  preShowOffset: integer('pre_show_offset').default(0),
  youtubeCaptions: boolean('youtube_captions').default(false),
  floatplaneCaptions: boolean('floatplane_captions').default(false),
  guest: boolean('has_guest').default(false),
  live: boolean('is_live').default(false),
  contentWarning: boolean('has_content_warning').default(false),
  corrupt: boolean('is_corrupt').default(false),
  merchMessages: boolean('has_merch_messages').default(false),
  productLaunch: boolean('has_product_launch').default(false),
}, (table) => {
  return {
    airedIdx: index('aired_idx').on(table.aired).desc(),
    durationIdx: index('duration_idx').on(table.duration).desc(),
    titleIdx: index('title_idx').on(table.title).desc(),
    contentWarningIdx: index('content_warning_idx').on(table.contentWarning).asc(),
    corruptionWarningIdx: index('corruption_warning_idx').on(table.corrupt).asc(),
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