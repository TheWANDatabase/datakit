import {integer, pgEnum, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {episodes} from "../episodes/episodes";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const topicType = pgEnum('kind', ['topic', 'merch message', 'sponsor', 'tangent'])

export const topics = dataSchema.table('topics', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  episodeId: varchar('episode_id', {length: 12}),
  title: text('title'),
  parent: uuid('parent'),
  start: integer('start'),
  end: integer('end'),
  created: timestamp('created').defaultNow(),
  ref: text('ref'),
  kind: topicType('kind').default("topic"),
  modified: timestamp('modified').defaultNow(),
})

const topicsRelations = relations(topics, ({one}) => ({
  episode: one(episodes, {
    fields: [topics.episodeId],
    references: [episodes.id]
  })
}))