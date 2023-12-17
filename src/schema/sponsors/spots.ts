import {boolean, integer, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {episodes} from "../episodes/episodes";
import {dataSchema} from "../schema";
import {companies} from "../companies/companies";

export const sponsorSpot = dataSchema.table('sponsors_spots', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  message: text('message'),
  url: text('url'),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
  companyId: uuid('company').references(() => companies.id),
  isDennis: boolean('is_dennis'),
  start: integer('start'),
  end: integer('end'),
  safe: boolean('safe'), // Set true by default, but can be set to false if the sponsor company was dropped for ethical reasons
  episodeId: varchar('episode_id', {length: 12}).references(() => episodes.id),
  isSponsorDebut: boolean('is_sponsor_debut').notNull().default(false)
})

export const sponsorSpotRelations = relations(sponsorSpot, ({one}) => ({
  episode: one(episodes, {
    fields: [sponsorSpot.episodeId],
    references: [episodes.id]
  })
}))