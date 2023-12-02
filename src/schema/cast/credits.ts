import {members} from "./members";
import {jobs} from "./jobs";

import {serial, uuid, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {episodes} from "../episodes/episodes";
import {dataSchema} from "../schema";


export const credits = dataSchema.table('cast_credits', {
  id: serial('id').primaryKey().unique(),
  castId: uuid('cast_id').references(() => members.id),
  positionId: uuid('position_id').references(() => jobs.id),
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