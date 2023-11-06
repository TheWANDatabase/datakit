import {integer, pgEnum, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";
import {changelog} from "./changelog";
import {accounts} from "../users/accounts";
import {comments} from "./comments";
import {relations} from "drizzle-orm";

export const changeStatus = pgEnum('change_status', [
  'draft',
  'proposed',
  'accepted',
  'rejected',
  'rolled_back'
]);


export const changes: any = pgTable('topics_changes', {
  id: serial('id').primaryKey().unique(),
  changelogId: integer('changelog_id').references(() => changelog.topicId),
  status: changeStatus('status').default('draft'),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
  authorId: integer('author').references(() => accounts.id),
  title: text('title'),
  parentId: integer('parent').references(() => changes.id),
  start: integer('start'),
  end: integer('end'),
});

const changesRelations = relations(changes, ({one, many}) => ({
  changelog: one(changelog, {
    fields: [changes.changelogId],
    references: [changelog.topicId]
  }),
  parent: one(changes, {
    fields: [changes.parentId],
    references: [changes.id]
  }),
  author: one(accounts, {
    fields: [changes.authorId],
    references: [accounts.id]
  }),
  comments: many(comments)
}))