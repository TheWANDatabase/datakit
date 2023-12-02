import {companies} from "../companies/companies";
import {members} from "./members";

import {boolean, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const jobs = dataSchema.table('cast_jobs', {
  id: uuid('id').primaryKey().unique(),
  outletId: uuid('outlet_id').references(() => companies.id),
  role: text('role'),
  isPrimary: boolean('is_primary'),
  from: timestamp('from'),
  to: timestamp('to'),
  castId: uuid('cast_id').references(() => members.id),
})

export const castPositionsRelations = relations(jobs, ({one}) => ({
  castMember: one(members, {
    fields: [jobs.castId],
    references: [members.id],
  }),
  outlet: one(companies, {
    fields: [jobs.outletId],
    references: [companies.id]
  })
}))