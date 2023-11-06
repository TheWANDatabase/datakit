import {serial, pgTable, integer, text, boolean, timestamp} from "drizzle-orm/pg-core";
import {mediaOutlets} from "./mediaOutlets";
import {cast} from "./cast";
import {relations} from "drizzle-orm";

export const castPositions = pgTable('cast_positions', {
  id: serial('id').primaryKey().unique(),
  outlet: integer('outlet').references(() => mediaOutlets.id),
  role: text('role'),
  isPrimary: boolean('is_primary'),
  from: timestamp('from'),
  to: timestamp('to'),
  castId: integer('cast_id'),
})

export const castPositionsRelations = relations(castPositions, ({one}) => ({
  castMember: one(cast, {
    fields: [castPositions.castId],
    references: [cast.id]
  })
}))