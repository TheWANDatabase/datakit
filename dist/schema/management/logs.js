"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logs = void 0;
const schema_1 = require("../schema");
const pg_core_1 = require("drizzle-orm/pg-core");
exports.logs = schema_1.managementSchema.table('logs', {
    id: (0, pg_core_1.bigint)('id', { mode: "bigint" }).unique().primaryKey().notNull(),
    source: (0, pg_core_1.text)('source').notNull(),
    level: (0, pg_core_1.text)('level').notNull(),
    message: (0, pg_core_1.text)('message').notNull(),
    meta: (0, pg_core_1.jsonb)('meta'),
    time: (0, pg_core_1.timestamp)('time').notNull().defaultNow(),
}, (table) => {
    return {
        sourceIdx: (0, pg_core_1.index)('source_idx').on(table.source).desc(),
        levelIdx: (0, pg_core_1.index)('level_idx').on(table.level).desc(),
        metaIdx: (0, pg_core_1.index)('meta_idx').on(table.meta).desc(),
    };
});
