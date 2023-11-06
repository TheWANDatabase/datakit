import {boolean, integer, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {companies} from "../companies/companies";
import {sponsorSpot} from "./spots";

export const campaigns = pgTable('sponsors_campaigns', {
  id: serial('id').primaryKey().unique(),
  name: text('name'),
  message: text('message'),
  url: text('url'),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
  companyId: integer('company').references(() => companies.id),
  isDennis: boolean('is_dennis'),
  safe: boolean('safe') // Set true by default, but can be set to false if the sponsor company was dropped for ethical reasons
})

export const campaignsRelations = relations(campaigns, ({many, one}) => ({
  company: one(companies, {
    fields: [campaigns.companyId],
    references: [companies.id]
  }),
  spots: many(sponsorSpot)
}))