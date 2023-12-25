import {boolean, index, text, uuid} from "drizzle-orm/pg-core";
import {dataSchema} from "../schema";

export const userSettings = dataSchema.table('users_settings', {
  uid: uuid('uuid').primaryKey().unique().defaultRandom(),
  username: text('username').unique().notNull(),
  email: text('email').unique().notNull(),
  password: text('password'),
  canLogIn: boolean('can_log_in').default(true)
}, (table) => {
  return {
    emailIdx: index('email_idx').on(table.email)
  }
})