import {integer, jsonb, pgTable, serial, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {media} from "./media";

export const mediaOutlets = pgTable('media_outlets', {
  id: serial('id').primaryKey().unique(),
  name: text('name'),
  links: jsonb('links').default([]),
  logo: uuid('logo').unique().references(() => media.id),
  founded: integer('founded'),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
});