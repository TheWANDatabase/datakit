"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transcriptRelations = exports.transcripts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const episodes_1 = require("./episodes");
const speakers_1 = require("./speakers");
exports.transcripts = (0, pg_core_1.pgTable)('episodes_transcripts', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    episodeId: (0, pg_core_1.varchar)('episode_id', { length: 12 }).references(() => episodes_1.episodes.id),
    filename: (0, pg_core_1.text)('filename'),
    started: (0, pg_core_1.timestamp)('started'),
    completed: (0, pg_core_1.timestamp)('completed'),
    revised: (0, pg_core_1.timestamp)('revised'),
});
exports.transcriptRelations = (0, drizzle_orm_1.relations)(exports.transcripts, ({ one, many }) => ({
    episode: one(episodes_1.episodes, {
        fields: [exports.transcripts.episodeId],
        references: [episodes_1.episodes.id]
    }),
    speakers: many(speakers_1.speakers)
}));
