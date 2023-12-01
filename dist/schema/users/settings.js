"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSettings = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const accounts_1 = require("./accounts");
const schema_1 = require("../schema");
exports.userSettings = schema_1.dataSchema.table('users_settings', {
    uid: (0, pg_core_1.integer)('uid').primaryKey().unique().references(() => accounts_1.accounts.id),
    username: (0, pg_core_1.text)('username'),
    email: (0, pg_core_1.text)('email'),
    password: (0, pg_core_1.text)('password')
});
