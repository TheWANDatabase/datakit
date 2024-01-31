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
    introStart: (0, pg_core_1.integer)('intro_start'),
    introDuration: (0, pg_core_1.integer)('intro_duration'),
    preShowOffset: (0, pg_core_1.integer)('pre_show_offset').default(0),
    youtubeCaptions: (0, pg_core_1.boolean)('youtube_captions').default(false),
    floatplaneCaptions: (0, pg_core_1.boolean)('floatplane_captions').default(false),
    guest: (0, pg_core_1.boolean)('has_guest').default(false),
    live: (0, pg_core_1.boolean)('is_live').default(false),
    contentWarning: (0, pg_core_1.boolean)('has_content_warning').default(false),
    corrupt: (0, pg_core_1.boolean)('is_corrupt').default(false),
    merchMessages: (0, pg_core_1.boolean)('has_merch_messages').default(false),
    productLaunch: (0, pg_core_1.boolean)('has_product_launch').default(false),
}, (table) => {
    return {
        airedIdx: (0, pg_core_1.index)('aired_idx').on(table.aired).desc(),
        durationIdx: (0, pg_core_1.index)('duration_idx').on(table.duration).desc(),
        titleIdx: (0, pg_core_1.index)('title_idx').on(table.title).desc(),
        contentWarningIdx: (0, pg_core_1.index)('content_warning_idx').on(table.contentWarning).asc(),
        corruptionWarningIdx: (0, pg_core_1.index)('corruption_warning_idx').on(table.corrupt).asc(),
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
