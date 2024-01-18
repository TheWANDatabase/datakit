"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSettings = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
exports.userSettings = schema_1.dataSchema.table('users_settings', {
    uid: (0, pg_core_1.uuid)('uuid').primaryKey().unique().defaultRandom(),
    username: (0, pg_core_1.text)('username').unique().notNull(),
    email: (0, pg_core_1.text)('email').unique().notNull(),
    password: (0, pg_core_1.text)('password'),
    canLogIn: (0, pg_core_1.boolean)('can_log_in').default(true)
}, (table) => {
    return {
        emailIdx: (0, pg_core_1.index)('email_idx').on(table.email)
    };
});
