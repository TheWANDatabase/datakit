import {integer, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {episodes} from "../episodes/episodes";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const topics = dataSchema.table('topics', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  episodeId: varchar('episode_id', {length: 12}),
  title: text('title'),
  parent: uuid('parent'),
  start: integer('start'),
  end: integer('end'),
  created: timestamp('created').defaultNow(),
  modified: timestamp('modified').defaultNow(),
})

const topicsRelations = relations(topics, ({one}) => ({
  episode: one(episodes, {
    fields: [topics.episodeId],
    references: [episodes.id]
  })
}))