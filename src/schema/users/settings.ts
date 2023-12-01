import {integer, text} from "drizzle-orm/pg-core";
import {accounts} from "./accounts";
import {dataSchema} from "../schema";

export const userSettings = dataSchema.table('users_settings', {
  uid: integer('uid').primaryKey().unique().references(() => accounts.id),
  username: text('username'),
  email: text('email'),
  password: text('password')
})