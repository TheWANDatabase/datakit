"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedtube = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
exports.seedtube = schema_1.managementSchema.table('seedtube', {
    time: (0, pg_core_1.timestamp)('time').unique().primaryKey().defaultNow(),
    currentImminence: (0, pg_core_1.numeric)('current_imminence').notNull(),
    currentTextImminence: (0, pg_core_1.text)('current_text_imminence').notNull(),
    secondsSinceLastUpdate: (0, pg_core_1.numeric)('seconds_since_last_update').notNull(),
    title: (0, pg_core_1.text)('title'),
    sponsors: (0, pg_core_1.jsonb)('sponsors'),
    thumbnail: (0, pg_core_1.text)('thumbnail'),
}, (table) => {
    return {
        timeIdx: (0, pg_core_1.index)('time_idx').on(table.time).desc(),
    };
});
