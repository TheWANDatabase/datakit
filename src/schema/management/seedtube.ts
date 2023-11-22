import {boolean, index, numeric, text, timestamp} from "drizzle-orm/pg-core";
import {managementSchema} from "../schema";

export const seedtube = managementSchema.table('seedtube', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  live: boolean('live').notNull(),
  wan: boolean('wan').notNull(),
  title: text('title').notNull(),
  thumbnail: text('thumbnail').notNull(),
  imminence: numeric('imminence').notNull(),
  textImminence: text('text_imminence').notNull()
}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
});