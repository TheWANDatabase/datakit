"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedtube = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
exports.seedtube = schema_1.managementSchema.table('seedtube', {
    time: (0, pg_core_1.timestamp)('time').unique().primaryKey().defaultNow(),
    currentImminence: (0, pg_core_1.timestamp)('current_imminence').notNull(),
    secondsSinceLastUpdate: (0, pg_core_1.timestamp)('seconds_since_last_update').notNull(),
}, (table) => {
    return {
        timeIdx: (0, pg_core_1.index)('time_idx').on(table.time).desc(),
    };
});
