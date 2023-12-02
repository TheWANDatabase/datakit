import {uuid, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {episodes} from "../episodes/episodes";
import {campaigns} from "./campaigns";
import {dataSchema} from "../schema";

export const sponsorSpot = dataSchema.table('sponsors_spots', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  episodeId: varchar('episode_id', {length: 12}).references(() => episodes.id),
  campaignId: uuid('campaign_id').references(() => campaigns.id),
})

export const sponsorSpotRelations = relations(sponsorSpot, ({one}) => ({
  campaign: one(sponsorSpot, {
    fields: [sponsorSpot.campaignId],
    // @ts-ignore
    references: [campaigns.id]
  }),
  episode: one(episodes, {
    fields: [sponsorSpot.episodeId],
    references: [episodes.id]
  })
}))