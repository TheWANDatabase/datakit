import {integer, jsonb, text, timestamp, uuid} from "drizzle-orm/pg-core";

import {media} from "../media";
import {relations} from "drizzle-orm";
import {jobs} from "../cast/jobs";
import {dataSchema} from "../schema";

export const companies = dataSchema.table('companies', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  name: text('name'),
  links: jsonb('links').default([]),
  logo: uuid('logo').unique().references(() => media.id),
  founded: integer('founded'),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
});

export const companiesRelations = relations(companies, ({one, many}) => ({
  jobs: many(jobs),
  one: one(media, {
    fields: [companies.logo],
    references: [media.id]
  })
}))