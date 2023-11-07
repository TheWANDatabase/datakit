"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castRelations = exports.members = void 0;
const media_1 = require("../media");
const jobs_1 = require("./jobs");
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.members = (0, pg_core_1.pgTable)('cast_members', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    alias: (0, pg_core_1.text)('alias'),
    forename: (0, pg_core_1.text)('forename'),
    surname: (0, pg_core_1.text)('surname'),
    debut: (0, pg_core_1.text)('debut_id'),
    avatar: (0, pg_core_1.uuid)('avatar_id').unique().references(() => media_1.media.id),
    socials: (0, pg_core_1.jsonb)('socials').$type(),
});
exports.castRelations = (0, drizzle_orm_1.relations)(exports.members, ({ one, many }) => ({
    positions: many(jobs_1.jobs),
    avatar: one(media_1.media, {
        fields: [exports.members.avatar],
        references: [media_1.media.id]
    })
}));
