import {timestamp, uuid} from "drizzle-orm/pg-core";
import {topics} from "./topics";
import {changes} from "./changes";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const changelog = dataSchema.table('topics_changelogs', {
  topicId: uuid('topic_id').primaryKey().references(() => topics.id),
  started: timestamp('started').defaultNow()
})

export const changelogRelations = relations(changelog, ({one, many}) => ({
  topic: one(topics, {
    fields: [changelog.topicId],
    references: [topics.id]
  }),
  proposals: many(changes)
}))