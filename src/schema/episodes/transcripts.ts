import {integer, pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {episodes} from "./episodes";
import {speakers} from "./speakers";
import {dataSchema} from "../schema";

export const transcripts = dataSchema.table('episodes_transcripts', {
  id: serial('id').primaryKey().unique(),
  episodeId: varchar('episode_id', {length: 12}).references(() => episodes.id),
  filename: text('filename'),
  started: timestamp('started'),
  completed: timestamp('completed'),
  revised: timestamp('revised'),
})

export const transcriptRelations = relations(transcripts, ({one, many}) => ({
  episode: one(episodes, {
    fields: [transcripts.episodeId],
    references: [episodes.id]
  }),
  speakers: many(speakers)
}))
