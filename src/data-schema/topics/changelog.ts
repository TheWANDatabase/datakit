import {integer, pgTable, timestamp} from "drizzle-orm/pg-core";
import {topics} from "./topics";
import {changes} from "./changes";
import {relations} from "drizzle-orm";

export const changelog = pgTable('topics_changelogs', {
  topicId: integer('topic_id').primaryKey().references(() => topics.id),
  started: timestamp('started').defaultNow()
})

export const changelogRelations = relations(changelog, ({one, many}) => ({
  topic: one(topics, {
    fields: [changelog.topicId],
    references: [topics.id]
  }),
  proposals: many(changes)
}))