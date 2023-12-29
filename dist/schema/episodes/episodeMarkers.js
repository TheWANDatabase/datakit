"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.episodeMarkersRelations = exports.episodeMarkers = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const episodes_1 = require("./episodes");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.episodeMarkers = schema_1.dataSchema.table('episodes_markers', {
    id: (0, pg_core_1.varchar)('id', {length: 12}).unique().references(() => episodes_1.episodes.id),
    thumb: (0, pg_core_1.boolean)('has_thumbnail').default(false),
    audioOnDemand: (0, pg_core_1.boolean)('has_audio_on_demand').default(false),
    videoOnDemand: (0, pg_core_1.boolean)('has_video_on_demand').default(false),
    webvtt: (0, pg_core_1.boolean)('has_webvtt').default(false),
    guest: (0, pg_core_1.boolean)('has_guest').default(false),
    live: (0, pg_core_1.boolean)('is_live').default(false),
    contentWarning: (0, pg_core_1.boolean)('has_content_warning').default(false),
    corrupt: (0, pg_core_1.boolean)('is_corrupt').default(false),
    merchMessages: (0, pg_core_1.boolean)('has_merch_messages').default(false),
    productLaunch: (0, pg_core_1.boolean)('has_product_launch').default(false),
    topicCount: (0, pg_core_1.integer)('topic_count').default(0),
    productCount: (0, pg_core_1.integer)('product_count').default(0),
    castCount: (0, pg_core_1.integer)('cast_count').default(0),
}, (table) => {
    return {
        contentWarningIdx: (0, pg_core_1.index)('content_warning_idx').on(table.contentWarning).asc(),
    };
});
exports.episodeMarkersRelations = (0, drizzle_orm_1.relations)(exports.episodeMarkers, ({one}) => ({
    episode: one(episodes_1.episodes, {
        fields: [exports.episodeMarkers.id],
        references: [episodes_1.episodes.id]
    })
}));
