"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.episodesRelations = exports.episodes = void 0;
const credits_1 = require("../cast/credits");
const productLinker_1 = require("../lttstore/productLinker");
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const spots_1 = require("../sponsors/spots");
const topics_1 = require("../topics/topics");
const media_1 = require("../media");
const message_1 = require("../merchMessages/message");
const schema_1 = require("../schema");
exports.episodes = schema_1.dataSchema.table('episodes', {
    id: (0, pg_core_1.varchar)('id', { length: 12 }).primaryKey().unique(),
    floatplane: (0, pg_core_1.varchar)('floatplane', { length: 12 }).unique(),
    title: (0, pg_core_1.text)('title').default('Title Unavailable'),
    description: (0, pg_core_1.text)('description').default('Description Unavailable'),
    thumbnail: (0, pg_core_1.uuid)('thumbnail').unique().references(() => media_1.media.id),
    aired: (0, pg_core_1.timestamp)('aired').defaultNow(),
    duration: (0, pg_core_1.integer)('duration'),
}, (table) => {
    return {
        airedIdx: (0, pg_core_1.index)('aired_idx').on(table.aired).desc(),
        durationIdx: (0, pg_core_1.index)('duration_idx').on(table.duration).desc(),
        titleIdx: (0, pg_core_1.index)('title_idx').on(table.title).desc(),
    };
});
exports.episodesRelations = (0, drizzle_orm_1.relations)(exports.episodes, ({ one, many }) => ({
    castMembers: many(credits_1.credits),
    products: many(productLinker_1.productLinker),
    sponsorSpots: many(spots_1.sponsorSpot),
    topics: many(topics_1.topics),
    merchMessages: many(message_1.merchMessages),
    thumbnail: one(media_1.media, {
        fields: [exports.episodes.thumbnail],
        references: [media_1.media.id]
    })
}));
