import {accounts} from "./accounts";
import {index, integer, serial, text, timestamp} from "drizzle-orm/pg-core";
import {dataSchema} from "../schema";
import {relations} from "drizzle-orm";

export const awards = dataSchema.table('users_awards', {
  id: serial('id').primaryKey().unique(),
  uid: integer('uid').references(() => accounts.id),
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