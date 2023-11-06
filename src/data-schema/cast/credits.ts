import {members} from "./members";
import {jobs} from "./jobs";

import {integer, pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {episodes} from "../episodes/episodes";


export const credits = pgTable('cast_credits', {
  id: serial('id').primaryKey().unique(),
  castId: integer('cast_id').references(() => members.id),
  positionId: integer('position_id').references(() => jobs.id),
  episodeId: varchar('episode_id', {length: 12}).references(() => episodes.id),
})

export const creditsRelations = relations(credits, ({one}) => ({
  castMember: one(members, {
    fields: [credits.castId],
    references: [members.id]
  }),
  position: one(jobs, {
    fields: [credits.positionId],
    references: [jobs.id]
  }),
  episode: one(episodes, {
    fields: [credits.episodeId],
    references: [episodes.id]
  })
}));