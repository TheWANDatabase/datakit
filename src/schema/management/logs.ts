import {managementSchema} from "../schema";
import {bigint, index, jsonb, text} from "drizzle-orm/pg-core";


export const logs = managementSchema.table('logs', {
  id: bigint('id', {mode: "bigint"}).unique().primaryKey().notNull(),
  source: text('source').notNull(),
  level: text('level').notNull(),
  message: text('message').notNull(),
  meta: jsonb('meta'),
}, (table) => {
  return {
    sourceIdx: index('source_idx').on(table.source).desc(),
    levelIdx: index('level_idx').on(table.level).desc(),
    metaIdx: index('meta_idx').on(table.meta).desc(),
  }
})