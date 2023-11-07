"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creditsRelations = exports.credits = void 0;
const members_1 = require("./members");
const jobs_1 = require("./jobs");
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const episodes_1 = require("../episodes/episodes");
const schema_1 = require("../schema");
exports.credits = schema_1.dataSchema.table('cast_credits', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    castId: (0, pg_core_1.integer)('cast_id').references(() => members_1.members.id),
    positionId: (0, pg_core_1.integer)('position_id').references(() => jobs_1.jobs.id),
    episodeId: (0, pg_core_1.varchar)('episode_id', { length: 12 }).references(() => episodes_1.episodes.id),
});
exports.creditsRelations = (0, drizzle_orm_1.relations)(exports.credits, ({ one }) => ({
    castMember: one(members_1.members, {
        fields: [exports.credits.castId],
        references: [members_1.members.id]
    }),
    position: one(jobs_1.jobs, {
        fields: [exports.credits.positionId],
        references: [jobs_1.jobs.id]
    }),
    episode: one(episodes_1.episodes, {
        fields: [exports.credits.episodeId],
        references: [episodes_1.episodes.id]
    })
}));
