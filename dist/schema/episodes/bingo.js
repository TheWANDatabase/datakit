"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.bingo = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
const episodes_1 = require("./episodes");
exports.bingo = schema_1.dataSchema.table('episodes_bingo', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    episodeId: (0, pg_core_1.integer)('episode_id').references(() => episodes_1.episodes.id),
    timestamp: (0, pg_core_1.timestamp)('timestamp'),
    tile: (0, pg_core_1.text)('tile'),
});
