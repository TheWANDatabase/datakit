import {managementSchema} from "../schema";
import {index, integer, jsonb, numeric, timestamp} from "drizzle-orm/pg-core";


export const cdn = managementSchema.table('cdn', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  entitySizeTotal: integer('entity_size_total').notNull(),
  entitySizeDelta: integer('entity_size_delta').notNull(),
  entitySizeAverage: numeric('entity_size_average').notNull(),
  entitySizeMin: integer('entity_size_min').notNull(),
  entitySizeMax: integer('entity_size_max').notNull(),
  entitySizeDeviation: numeric('entity_size_deviation').notNull(),

  entityCountTotal: integer('entity_count_total').notNull(),
  entityCountDelta: integer('entity_count_delta').notNull(),
  entityCountAverage: numeric('entity_count_average').notNull(),
  entityCountMin: integer('entity_count_min').notNull(),
  entityCountMax: integer('entity_count_max').notNull(),
  entityCountDeviation: numeric('entity_count_deviation').notNull(),

  queueBacklogTotal: integer('queue_backlog_total').notNull(),
  queueBacklogDelta: integer('queue_backlog_delta').notNull(),
  queueBacklogAverage: numeric('queue_backlog_average').notNull(),
  queueBacklogMin: integer('queue_backlog_min').notNull(),
  queueBacklogMax: integer('queue_backlog_max').notNull(),
  queueBacklogDeviation: numeric('queue_backlog_deviation').notNull(),

  entityCountsByType: jsonb('entity_counts_by_type').notNull().default({}),

}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
})