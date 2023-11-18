import {index, jsonb, numeric, text, timestamp} from "drizzle-orm/pg-core";
import {managementSchema} from "../schema";

export const seedtube = managementSchema.table('seedtube', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  currentImminence: numeric('current_imminence').notNull(),
  currentTextImminence: text('current_text_imminence').notNull(),
  secondsSinceLastUpdate: numeric('seconds_since_last_update').notNull(),
  title: text('title'),
  sponsors: jsonb('sponsors'),
  thumbnail: text('thumbnail'),
}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
});