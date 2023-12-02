"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changelogRelations = exports.changelog = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const topics_1 = require("./topics");
const changes_1 = require("./changes");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.changelog = schema_1.dataSchema.table('topics_changelogs', {
    topicId: (0, pg_core_1.uuid)('topic_id').primaryKey().references(() => topics_1.topics.id),
    started: (0, pg_core_1.timestamp)('started').defaultNow()
});
exports.changelogRelations = (0, drizzle_orm_1.relations)(exports.changelog, ({ one, many }) => ({
    topic: one(topics_1.topics, {
        fields: [exports.changelog.topicId],
        references: [topics_1.topics.id]
    }),
    proposals: many(changes_1.changes)
}));
