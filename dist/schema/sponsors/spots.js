"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorSpotRelations = exports.sponsorSpot = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const episodes_1 = require("../episodes/episodes");
const campaigns_1 = require("./campaigns");
const schema_1 = require("../schema");
exports.sponsorSpot = schema_1.dataSchema.table('sponsors_spots', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    episodeId: (0, pg_core_1.varchar)('episode_id', { length: 12 }).references(() => episodes_1.episodes.id),
    campaignId: (0, pg_core_1.uuid)('campaign_id').references(() => campaigns_1.campaigns.id),
});
exports.sponsorSpotRelations = (0, drizzle_orm_1.relations)(exports.sponsorSpot, ({ one }) => ({
    campaign: one(exports.sponsorSpot, {
        fields: [exports.sponsorSpot.campaignId],
        // @ts-ignore
        references: [campaigns_1.campaigns.id]
    }),
    episode: one(episodes_1.episodes, {
        fields: [exports.sponsorSpot.episodeId],
        references: [episodes_1.episodes.id]
    })
}));
