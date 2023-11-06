"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimus = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.optimus = (0, pg_core_1.pgTable)('optimus_metrics', {
    time: (0, pg_core_1.timestamp)('time').primaryKey().unique().defaultNow(),
    entitySize: (0, pg_core_1.bigint)('entity_size', { mode: "number" }).notNull().default(0),
    entitySizeDelta: (0, pg_core_1.bigint)('entity_size_delta', { mode: "number" }).notNull().default(0),
    entityCount: (0, pg_core_1.bigint)('entity_count', { mode: "number" }).notNull().default(0),
    entityCountDelta: (0, pg_core_1.bigint)('entity_count_delta', { mode: "number" }).notNull().default(0),
    queueBacklog: (0, pg_core_1.bigint)('queue_backlog', { mode: "number" }).notNull().default(0),
    queueBacklogDelta: (0, pg_core_1.bigint)('queue_backlog_delta', { mode: "number" }).notNull().default(0),
}, (table) => {
    return {
        timeIdx: (0, pg_core_1.index)('time_idx').on(table.time).desc(),
    };
});
