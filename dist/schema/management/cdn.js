"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cdn = void 0;
const schema_1 = require("../schema");
const pg_core_1 = require("drizzle-orm/pg-core");
exports.cdn = schema_1.managementSchema.table('cdn', {
    time: (0, pg_core_1.timestamp)('time').unique().primaryKey().defaultNow(),
    entitySizeTotal: (0, pg_core_1.integer)('entity_size_total').notNull(),
    entitySizeDelta: (0, pg_core_1.integer)('entity_size_delta').notNull(),
    entitySizeAverage: (0, pg_core_1.numeric)('entity_size_average').notNull(),
    entityCountTotal: (0, pg_core_1.integer)('entity_count_total').notNull(),
    entityCountDelta: (0, pg_core_1.integer)('entity_count_delta').notNull(),
    entityCountAverage: (0, pg_core_1.numeric)('entity_count_average').notNull(),
    queueBacklogTotal: (0, pg_core_1.integer)('queue_backlog_total').notNull(),
    queueBacklogDelta: (0, pg_core_1.integer)('queue_backlog_delta').notNull(),
    queueBacklogAverage: (0, pg_core_1.numeric)('queue_backlog_average').notNull(),
    entityCountsByType: (0, pg_core_1.jsonb)('entity_counts_by_type').notNull().default({}),
}, (table) => {
    return {
        timeIdx: (0, pg_core_1.index)('time_idx').on(table.time).desc(),
    };
});
