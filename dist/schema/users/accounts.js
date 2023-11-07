"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsRelations = exports.accounts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const media_1 = require("../media");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.accounts = schema_1.dataSchema.table('users_accounts', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    username: (0, pg_core_1.text)('username').unique(),
    avatar: (0, pg_core_1.uuid)('avatar').references(() => media_1.media.id),
    created: (0, pg_core_1.timestamp)('created').defaultNow(),
    loggedIn: (0, pg_core_1.timestamp)('logged_in'),
});
exports.accountsRelations = (0, drizzle_orm_1.relations)(exports.accounts, ({ one }) => ({
    avatar: one(media_1.media, {
        fields: [exports.accounts.avatar],
        references: [media_1.media.id]
    })
}));
