import {text, uuid} from "drizzle-orm/pg-core";
import {dataSchema} from "../schema";

export const userSettings = dataSchema.table('users_settings', {
  uid: uuid('uuid').primaryKey().unique().defaultRandom(),
  username: text('username'),
  email: text('email'),
  password: text('password')
})