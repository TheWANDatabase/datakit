"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.commentsRelations = exports.comments = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const changes_1 = require("./changes");
const accounts_1 = require("../users/accounts");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.comments = schema_1.dataSchema.table('topics_comments', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    changeId: (0, pg_core_1.uuid)('change_id').references(() => changes_1.changes.id),
    message: (0, pg_core_1.text)('message'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    authorId: (0, pg_core_1.uuid)('author').references(() => accounts_1.accounts.id),
});
exports.commentsRelations = (0, drizzle_orm_1.relations)(exports.comments, ({one}) => ({
    change: one(changes_1.changes, {
        fields: [exports.comments.changeId],
        references: [changes_1.changes.id]
    }),
    author: one(accounts_1.accounts, {
        fields: [exports.comments.authorId],
        references: [accounts_1.accounts.id]
    })
}));
