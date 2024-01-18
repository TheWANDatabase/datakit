"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castRelations = exports.members = void 0;
const media_1 = require("../media");
const jobs_1 = require("./jobs");
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.members = schema_1.dataSchema.table('cast_members', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    alias: (0, pg_core_1.text)('alias'),
    forename: (0, pg_core_1.text)('forename'),
    surname: (0, pg_core_1.text)('surname'),
    debut: (0, pg_core_1.text)('debut_id'),
    avatar: (0, pg_core_1.uuid)('avatar_id').unique().references(() => media_1.media.id),
    socials: (0, pg_core_1.jsonb)('socials').$type(),
    priority: (0, pg_core_1.integer)('priority').unique(),
    creditCount: (0, pg_core_1.bigint)('credit_count', { mode: "number" }).notNull().default(0), // The number of episodes this person is featured in
    positionCount: (0, pg_core_1.bigint)('position_count', { mode: "number" }).notNull().default(0), // The number of positions that we know the person has had
});
exports.castRelations = (0, drizzle_orm_1.relations)(exports.members, ({ one, many }) => ({
    positions: many(jobs_1.jobs),
    avatar: one(media_1.media, {
        fields: [exports.members.avatar],
        references: [media_1.media.id]
    })
}));
