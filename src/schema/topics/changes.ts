import {integer, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {changelog} from "./changelog";
import {accounts} from "../users/accounts";
import {comments} from "./comments";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export enum ChangeStatus {
  draft,
  proposed,
  accepted,
  rejected,
  rolled_back
};


export const changes: any = dataSchema.table('topics_changes', {
  id: uuid('id').primaryKey().unique(),
  changelogId: uuid('changelog_id').references(() => changelog.topicId),
  status: integer('status').default(ChangeStatus.draft),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
  authorId: uuid('author').references(() => accounts.id),
  title: text('title'),
  parentId: uuid('parent').references(() => changes.id),
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