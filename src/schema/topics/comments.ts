import {text, timestamp, uuid} from "drizzle-orm/pg-core";
import {changes} from "./changes";
import {accounts} from "../users/accounts";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const comments = dataSchema.table('topics_comments', {
  id: uuid('id').primaryKey().defaultRandom(),
  changeId: uuid('change_id').references(() => changes.id),
  message: text('message'),
  added: timestamp('added').defaultNow(),
  authorId: uuid('author').references(() => accounts.id),
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