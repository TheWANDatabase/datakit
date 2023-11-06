import {integer, pgTable, text} from "drizzle-orm/pg-core";
import {accounts} from "./accounts";

export const userSettings = pgTable('users_settings', {
  uid: integer('uid').primaryKey().unique().references(() => accounts.id),
  full_name: text('full_name'),
  email: text('email'),

})