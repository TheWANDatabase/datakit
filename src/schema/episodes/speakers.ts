import {integer, pgTable, serial} from "drizzle-orm/pg-core";
import {credits} from "../cast/credits";
import {relations} from "drizzle-orm";
import {transcripts} from "./transcripts";
import {dataSchema} from "../schema";

export const speakers = dataSchema.table('episodes_speakers', {
  id: serial('id').primaryKey().unique(),
  transcriptId: integer('transcript_id').references(() => transcripts.id),
  creditId: integer('credit_id').references(() => credits.id),
})

export const speakersRelations = relations(speakers, ({one}) => ({
  transcript: one(transcripts, {
    fields: [speakers.transcriptId],
    references: [transcripts.id]
  }),
  credit: one(credits, {
    fields: [speakers.creditId],
    references: [credits.id]
  })
}));