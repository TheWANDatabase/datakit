import {boolean, index, integer, varchar} from "drizzle-orm/pg-core";
import {episodes} from "./episodes";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const episodeMarkers = dataSchema.table('episodes_markers', {
  id: varchar('id', {length: 12}).unique().references(() => episodes.id),
  youtubeCaptions: boolean('youtube_captions').default(false),
  floatplaneCaptions: boolean('floatplane_captions').default(false),
  guest: boolean('has_guest').default(false),
  live: boolean('is_live').default(false),
  contentWarning: boolean('has_content_warning').default(false),
  corrupt: boolean('is_corrupt').default(false),
  merchMessages: boolean('has_merch_messages').default(false),
  productLaunch: boolean('has_product_launch').default(false),
  topicCount: integer('topic_count').default(0),
  productCount: integer('product_count').default(0),
  castCount: integer('cast_count').default(0),
}, (table) => {
  return {
    contentWarningIdx: index('content_warning_idx').on(table.contentWarning).asc(),
  }
})

export const episodeMarkersRelations = relations(episodeMarkers, ({one}) => ({
  episode: one(episodes, {
    fields: [episodeMarkers.id],
    references: [episodes.id]
  })
}))