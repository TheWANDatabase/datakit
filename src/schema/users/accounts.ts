import {pgTable, serial, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {media} from "../media";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const accounts = dataSchema.table('users_accounts', {
  id: serial('id').primaryKey().unique(),
  username: text('username').unique(),
  avatar: uuid('avatar').references(() => media.id),
  created: timestamp('created').defaultNow(),
  loggedIn: timestamp('logged_in'),
})

export const accountsRelations = relations(accounts, ({one}) => ({
  avatar: one(media, {
    fields: [accounts.avatar],
    references: [media.id]
  })
}))