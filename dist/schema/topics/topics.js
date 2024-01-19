"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topics = exports.topicType = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const episodes_1 = require("../episodes/episodes");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.topicType = (0, pg_core_1.pgEnum)("kind", [
    "topic",
    "merch message",
    "sponsor",
    "tangent",
    "sub topic"
]);
exports.topics = schema_1.dataSchema.table("topics", {
    id: (0, pg_core_1.uuid)("id").primaryKey().unique().defaultRandom(),
    episodeId: (0, pg_core_1.varchar)("episode_id", { length: 12 }),
    title: (0, pg_core_1.text)("title"),
    parent: (0, pg_core_1.uuid)("parent"),
    start: (0, pg_core_1.integer)("start"),
    end: (0, pg_core_1.integer)("end"),
    created: (0, pg_core_1.timestamp)("created").defaultNow(),
    ref: (0, pg_core_1.text)("ref"),
    kind: (0, exports.topicType)("kind").default("topic"),
    modified: (0, pg_core_1.timestamp)("modified").defaultNow(),
});
const topicsRelations = (0, drizzle_orm_1.relations)(exports.topics, ({ one }) => ({
    episode: one(episodes_1.episodes, {
        fields: [exports.topics.episodeId],
        references: [episodes_1.episodes.id],
    }),
}));
