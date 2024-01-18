"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speakersRelations = exports.speakers = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const credits_1 = require("../cast/credits");
const drizzle_orm_1 = require("drizzle-orm");
const transcripts_1 = require("./transcripts");
const schema_1 = require("../schema");
exports.speakers = schema_1.dataSchema.table('episodes_speakers', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    transcriptId: (0, pg_core_1.uuid)('transcript_id').references(() => transcripts_1.transcripts.id),
    creditId: (0, pg_core_1.integer)('credit_id').references(() => credits_1.credits.id),
});
exports.speakersRelations = (0, drizzle_orm_1.relations)(exports.speakers, ({ one }) => ({
    transcript: one(transcripts_1.transcripts, {
        fields: [exports.speakers.transcriptId],
        references: [transcripts_1.transcripts.id]
    }),
    credit: one(credits_1.credits, {
        fields: [exports.speakers.creditId],
        references: [credits_1.credits.id]
    })
}));
