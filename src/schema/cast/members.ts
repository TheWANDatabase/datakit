import {media} from "../media";
import {jobs} from "./jobs";

import {jsonb, text, uuid} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const members = dataSchema.table('cast_members', {
  id: uuid('id').primaryKey().unique(),
  alias: text('alias'),
  forename: text('forename'),
  surname: text('surname'),
  debut: text('debut_id'),
  avatar: uuid('avatar_id').unique().references(() => media.id),
  socials: jsonb('socials').$type<CastSocials>(),
})

export const castRelations = relations(members, ({one, many}) => ({
  positions: many(jobs),
  avatar: one(media, {
    fields: [members.avatar],
    references: [media.id]
  })
}))

export type CastSocials = {
  twitter?: string
  instagram?: string
  linkedin?: string
  imdb?: string
  wikipedia?: string
  ltt_forum?: string
}