"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSettings = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const accounts_1 = require("./accounts");
exports.userSettings = (0, pg_core_1.pgTable)('users_settings', {
    uid: (0, pg_core_1.integer)('uid').primaryKey().unique().references(() => accounts_1.accounts.id),
    full_name: (0, pg_core_1.text)('full_name'),
    email: (0, pg_core_1.text)('email'),
});
