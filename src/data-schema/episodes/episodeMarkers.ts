import {boolean, integer, pgTable, varchar} from "drizzle-orm/pg-core";
import {episodes} from "./episodes";
import {relations} from "drizzle-orm";

export const episodeMarkers = pgTable('episodes_markers', {
  id: varchar('id', {length: 12}).unique().references(() => episodes.id),
  thumb: boolean('has_thumbnail').default(false),
  audioOnDemand: boolean('has_audio_on_demand').default(false),
  videoOnDemand: boolean('has_video_on_demand').default(false),
  webvtt: boolean('has_webvtt').default(false),
  guest: boolean('has_guest').default(false),
  live: boolean('is_live').default(false),
  contentWarning: boolean('has_content_warning').default(false),
  corrupt: boolean('is_corrupt').default(false),
  merchMessages: boolean('has_merch_messages').default(false),
  productLaunch: boolean('has_product_launch').default(false),
  topicCount: integer('topic_count').default(0),
  productCount: integer('product_count').default(0),
  castCount: integer('cast_count').default(0),
})

export const episodeMarkersRelations = relations(episodeMarkers, ({one}) => ({
  episode: one(episodes, {
    fields: [episodeMarkers.id],
    references: [episodes.id]
  })
}))