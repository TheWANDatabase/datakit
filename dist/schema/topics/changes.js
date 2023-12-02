"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes = exports.ChangeStatus = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const changelog_1 = require("./changelog");
const accounts_1 = require("../users/accounts");
const comments_1 = require("./comments");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
var ChangeStatus;
(function (ChangeStatus) {
    ChangeStatus[ChangeStatus["draft"] = 0] = "draft";
    ChangeStatus[ChangeStatus["proposed"] = 1] = "proposed";
    ChangeStatus[ChangeStatus["accepted"] = 2] = "accepted";
    ChangeStatus[ChangeStatus["rejected"] = 3] = "rejected";
    ChangeStatus[ChangeStatus["rolled_back"] = 4] = "rolled_back";
})(ChangeStatus || (exports.ChangeStatus = ChangeStatus = {}));
;
exports.changes = schema_1.dataSchema.table('topics_changes', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique(),
    changelogId: (0, pg_core_1.uuid)('changelog_id').references(() => changelog_1.changelog.topicId),
    status: (0, pg_core_1.integer)('status').default(ChangeStatus.draft),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
    authorId: (0, pg_core_1.uuid)('author').references(() => accounts_1.accounts.id),
    title: (0, pg_core_1.text)('title'),
    parentId: (0, pg_core_1.uuid)('parent').references(() => exports.changes.id),
    start: (0, pg_core_1.integer)('start'),
    end: (0, pg_core_1.integer)('end'),
});
const changesRelations = (0, drizzle_orm_1.relations)(exports.changes, ({ one, many }) => ({
    changelog: one(changelog_1.changelog, {
        fields: [exports.changes.changelogId],
        references: [changelog_1.changelog.topicId]
    }),
    parent: one(exports.changes, {
        fields: [exports.changes.parentId],
        references: [exports.changes.id]
    }),
    author: one(accounts_1.accounts, {
        fields: [exports.changes.authorId],
        references: [accounts_1.accounts.id]
    }),
    comments: many(comments_1.comments)
}));
