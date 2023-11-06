import {bigint, index, pgTable, timestamp,} from "drizzle-orm/pg-core";

export const optimus = pgTable('optimus_metrics', {
  time: timestamp('time').primaryKey().unique().defaultNow(),

  entitySize: bigint('entity_size', {mode: "number"}).notNull().default(0),
  entitySizeDelta: bigint('entity_size_delta', {mode: "number"}).notNull().default(0),

  entityCount: bigint('entity_count', {mode: "number"}).notNull().default(0),
  entityCountDelta: bigint('entity_count_delta', {mode: "number"}).notNull().default(0),

  queueBacklog: bigint('queue_backlog', {mode: "number"}).notNull().default(0),
  queueBacklogDelta: bigint('queue_backlog_delta', {mode: "number"}).notNull().default(0),

}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
})

