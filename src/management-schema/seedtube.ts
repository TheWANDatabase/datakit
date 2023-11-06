import {index, pgTable, timestamp} from "drizzle-orm/pg-core";

export const seedtube = pgTable('seedtube', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  currentImminence: timestamp('current_imminence').notNull(),

  secondsSinceLastUpdate: timestamp('seconds_since_last_update').notNull(),

}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
})