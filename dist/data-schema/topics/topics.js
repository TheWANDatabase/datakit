"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topics = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const episodes_1 = require("../episodes/episodes");
const drizzle_orm_1 = require("drizzle-orm");
exports.topics = (0, pg_core_1.pgTable)('topics', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    episodeId: (0, pg_core_1.varchar)('episode_id', { length: 12 }),
    title: (0, pg_core_1.text)('title'),
    parent: (0, pg_core_1.integer)('parent'),
    start: (0, pg_core_1.integer)('start'),
    end: (0, pg_core_1.integer)('end'),
    created: (0, pg_core_1.timestamp)('created').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
});
const topicsRelations = (0, drizzle_orm_1.relations)(exports.topics, ({ one }) => ({
    episode: one(episodes_1.episodes, {
        fields: [exports.topics.episodeId],
        references: [episodes_1.episodes.id]
    })
}));
