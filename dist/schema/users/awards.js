"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.awardsRelations = exports.awards = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
const drizzle_orm_1 = require("drizzle-orm");
const accounts_1 = require("./accounts");
exports.awards = schema_1.dataSchema.table('users_awards', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    uid: (0, pg_core_1.uuid)('uid'), //.references(() => accounts.id),
    award: (0, pg_core_1.text)('award'),
    awardedAt: (0, pg_core_1.timestamp)('awarded_at').defaultNow(),
}, (table) => {
    return {
        userIdx: (0, pg_core_1.index)('user_idx').on(table.uid).desc(),
        awardIdx: (0, pg_core_1.index)('award_idx').on(table.award).desc(),
    };
});
exports.awardsRelations = (0, drizzle_orm_1.relations)(exports.awards, ({one}) => ({
    account: one(accounts_1.accounts, {
        fields: [exports.awards.uid],
        references: [accounts_1.accounts.id]
    })
}));
