"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaOutlets = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const media_1 = require("./media");
exports.mediaOutlets = (0, pg_core_1.pgTable)('media_outlets', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    name: (0, pg_core_1.text)('name'),
    links: (0, pg_core_1.jsonb)('links').default([]),
    logo: (0, pg_core_1.uuid)('logo').unique().references(() => media_1.media.id),
    founded: (0, pg_core_1.integer)('founded'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
});
