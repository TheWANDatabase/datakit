import {integer, pgTable, timestamp, text} from "drizzle-orm/pg-core";
import {changes} from "./changes";
import {accounts} from "../users/accounts";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const comments = dataSchema.table('topics_comments', {
  id: integer('id').primaryKey(),
  changeId: integer('change_id').references(() => changes.id),
  message: text('message'),
  added: timestamp('added').defaultNow(),
  authorId: integer('author').references(() => accounts.id),
})

export const commentsRelations = relations(comments, ({one}) => ({
  change: one(changes, {
    fields: [comments.changeId],
    references: [changes.id]
  }),
  author: one(accounts, {
    fields: [comments.authorId],
    references: [accounts.id]
  })
}))