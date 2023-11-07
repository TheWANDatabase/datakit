"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes = exports.changeStatus = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const changelog_1 = require("./changelog");
const accounts_1 = require("../users/accounts");
const comments_1 = require("./comments");
const drizzle_orm_1 = require("drizzle-orm");
exports.changeStatus = (0, pg_core_1.pgEnum)('change_status', [
    'draft',
    'proposed',
    'accepted',
    'rejected',
    'rolled_back'
]);
exports.changes = (0, pg_core_1.pgTable)('topics_changes', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    changelogId: (0, pg_core_1.integer)('changelog_id').references(() => changelog_1.changelog.topicId),
    status: (0, exports.changeStatus)('status').default('draft'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
    authorId: (0, pg_core_1.integer)('author').references(() => accounts_1.accounts.id),
    title: (0, pg_core_1.text)('title'),
    parentId: (0, pg_core_1.integer)('parent').references(() => exports.changes.id),
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
