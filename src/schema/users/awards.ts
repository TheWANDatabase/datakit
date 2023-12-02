import {index, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {dataSchema} from "../schema";
import {relations} from "drizzle-orm";
import {accounts} from "./accounts";

export const awards = dataSchema.table('users_awards', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  uid: uuid('uid'),//.references(() => accounts.id),
  award: text('award'),
  awardedAt: timestamp('awarded_at').defaultNow(),
}, (table) => {
  return {
    userIdx: index('user_idx').on(table.uid).desc(),
    awardIdx: index('award_idx').on(table.award).desc(),
  }
})

export const awardsRelations = relations(awards, ({one}) => ({
  account: one(accounts, {
    fields: [awards.uid],
    references: [accounts.id]
  })
}))