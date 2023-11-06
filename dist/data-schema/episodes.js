"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.episodes = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.episodes = (0, pg_core_1.pgTable)('episodes', {
    id: (0, pg_core_1.varchar)('id', { length: 12 }).primaryKey().unique(),
    title: (0, pg_core_1.text)('title').default('Title Unavailable'),
    description: (0, pg_core_1.text)('description').default('Description Unavailable'),
});
