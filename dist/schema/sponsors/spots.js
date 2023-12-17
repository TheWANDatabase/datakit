"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorSpotRelations = exports.sponsorSpot = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const episodes_1 = require("../episodes/episodes");
const schema_1 = require("../schema");
const companies_1 = require("../companies/companies");
exports.sponsorSpot = schema_1.dataSchema.table('sponsors_spots', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    message: (0, pg_core_1.text)('message'),
    url: (0, pg_core_1.text)('url'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
    companyId: (0, pg_core_1.uuid)('company').references(() => companies_1.companies.id),
    isDennis: (0, pg_core_1.boolean)('is_dennis'),
    start: (0, pg_core_1.integer)('start'),
    end: (0, pg_core_1.integer)('end'),
    safe: (0, pg_core_1.boolean)('safe'), // Set true by default, but can be set to false if the sponsor company was dropped for ethical reasons
    episodeId: (0, pg_core_1.varchar)('episode_id', { length: 12 }).references(() => episodes_1.episodes.id),
    isSponsorDebut: (0, pg_core_1.boolean)('is_sponsor_debut').notNull().default(false)
});
exports.sponsorSpotRelations = (0, drizzle_orm_1.relations)(exports.sponsorSpot, ({ one }) => ({
    episode: one(episodes_1.episodes, {
        fields: [exports.sponsorSpot.episodeId],
        references: [episodes_1.episodes.id]
    })
}));
