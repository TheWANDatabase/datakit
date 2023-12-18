import {boolean, serial, text, uuid} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";
import {companies} from "./companies";

export const sponsorMatching = dataSchema.table('companies_mappings', {
  id: serial('id').unique().notNull().primaryKey(),
  pattern: text('pattern').notNull(),
  flags: text('flags').default('gm'),
  enabled: boolean('enabled').default(true),
  priority: serial('priority').unique(),
  company: uuid('company').references(() => companies.id)
});

export const sponsorsRelations = relations(sponsorMatching, ({one, many}) => ({
  one: one(companies, {
    fields: [sponsorMatching.company],
    references: [companies.id]
  })
}))