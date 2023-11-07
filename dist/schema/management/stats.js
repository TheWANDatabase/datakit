"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stats = void 0;
const schema_1 = require("../schema");
const pg_core_1 = require("drizzle-orm/pg-core");
exports.stats = schema_1.managementSchema.table('stats', {
    time: (0, pg_core_1.timestamp)('time').unique().primaryKey().defaultNow(),
    /* Episode Statistics */
    castCount: (0, pg_core_1.integer)('cast_count').notNull(),
    episodeCount: (0, pg_core_1.integer)('episode_count').notNull(),
    sponsorCount: (0, pg_core_1.integer)('sponsor_count').notNull(),
    sponsorSpotCount: (0, pg_core_1.integer)('sponsor_spot_count').notNull(),
    sponsorSpotDuration: (0, pg_core_1.integer)('sponsor_spot_duration').notNull(),
    lttProductsIndexed: (0, pg_core_1.integer)('ltt_products_indexed').notNull(),
    topicCount: (0, pg_core_1.integer)('topic_count').notNull(),
    topicContributorCount: (0, pg_core_1.integer)('topic_contributor_count').notNull(),
    /* User Statistics */
    usersCount: (0, pg_core_1.integer)('users_count').notNull(),
    /* CDN Statistics */
    entitySize: (0, pg_core_1.bigint)('entity_size', { mode: "number" }).notNull().default(0),
    entitySizeDelta: (0, pg_core_1.bigint)('entity_size_delta', { mode: "number" }).notNull().default(0),
    entityCount: (0, pg_core_1.bigint)('entity_count', { mode: "number" }).notNull().default(0),
    entityCountDelta: (0, pg_core_1.bigint)('entity_count_delta', { mode: "number" }).notNull().default(0),
    queueBacklog: (0, pg_core_1.bigint)('queue_backlog', { mode: "number" }).notNull().default(0),
    queueBacklogDelta: (0, pg_core_1.bigint)('queue_backlog_delta', { mode: "number" }).notNull().default(0),
    entityCountsByType: (0, pg_core_1.jsonb)('entity_counts_by_type').notNull().default({}),
}, (table) => {
    return {
        timeIdx: (0, pg_core_1.index)('time_idx').on(table.time).desc(),
    };
});
