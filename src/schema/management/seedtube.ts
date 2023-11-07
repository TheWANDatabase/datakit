import {index, timestamp} from "drizzle-orm/pg-core";
import {managementSchema} from "../schema";

export const seedtube = managementSchema.table('seedtube', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  currentImminence: timestamp('current_imminence').notNull(),

  secondsSinceLastUpdate: timestamp('seconds_since_last_update').notNull(),

}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
});