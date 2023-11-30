import {integer, text} from "drizzle-orm/pg-core";
import {accounts} from "./accounts";
import {dataSchema} from "../schema";

export const userSettings = dataSchema.table('users_settings', {
  uid: integer('uid').primaryKey().unique().references(() => accounts.id),
  displayName: text('full_name'),
  email: text('email'),
  password: text('password')
})