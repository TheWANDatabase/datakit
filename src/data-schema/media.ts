import {bigint, jsonb, pgTable, text, timestamp, uuid} from "drizzle-orm/pg-core";

export const media = pgTable('media', {
  id: uuid('id').primaryKey().unique().notNull().defaultRandom(),
  blur: text('blur'),
  original: jsonb('original').$type<OriginalMediaMetadata>(),
  additional: jsonb('additional').$type<AdditionalMediaMetadata>(),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
  kind: text('kind').notNull(),
  bytes: bigint('bytes', {mode: "number"}).notNull().default(0),
})

export type OriginalMediaMetadata = {
  url: string
  width: number
  height: number
  mime: string
}

export type AdditionalMediaMetadata = {
  [key: string]: string
}