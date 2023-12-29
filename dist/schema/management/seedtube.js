"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.seedtube = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
exports.seedtube = schema_1.managementSchema.table('seedtube', {
    time: (0, pg_core_1.timestamp)('time').unique().primaryKey().defaultNow(),
    live: (0, pg_core_1.boolean)('live').notNull(),
    wan: (0, pg_core_1.boolean)('wan').notNull(),
    title: (0, pg_core_1.text)('title').notNull(),
    thumbnail: (0, pg_core_1.text)('thumbnail').notNull(),
    imminence: (0, pg_core_1.integer)('imminence').notNull(),
    textImminence: (0, pg_core_1.text)('text_imminence').notNull()
}, (table) => {
    return {
        timeIdx: (0, pg_core_1.index)('time_idx').on(table.time).desc(),
    };
});
