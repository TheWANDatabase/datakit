import {media} from "./media";

import {jsonb, pgTable, serial, text, uuid} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {castPositions} from "./castPositions";

export const cast = pgTable('cast_members', {
  id: serial('id').primaryKey().unique(),
  alias: text('alias'),
  forename: text('forename'),
  surname: text('surname'),
  debut: text('debut_id'),
  avatar: uuid('avatar_id').unique().references(() => media.id),
  socials: jsonb('socials').$type<CastSocials>(),
})

export const castRelations = relations(cast, ({many}) => ({
  positions: many(castPositions)
}))

export type CastSocials = {
  twitter?: string
  instagram?: string
  linkedin?: string
  imdb?: string
  wikipedia?: string
  ltt_forum?: string
}