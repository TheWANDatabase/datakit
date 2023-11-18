import {managementSchema} from "../schema";
import {index, jsonb, text, timestamp} from "drizzle-orm/pg-core";


export const logs = managementSchema.table('logs', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  source: text('source').notNull(),
  level: text('level').notNull(),
  message: text('message').notNull(),
  meta: jsonb('meta'),
}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
})