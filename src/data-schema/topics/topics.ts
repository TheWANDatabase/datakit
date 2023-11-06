import {integer, pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {episodes} from "../episodes/episodes";
import {relations} from "drizzle-orm";

export const topics = pgTable('topics', {
  id: serial('id').primaryKey().unique(),
  episodeId: varchar('episode_id', {length: 12}),
  title: text('title'),
  parent: integer('parent'),
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