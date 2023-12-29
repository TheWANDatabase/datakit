"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.sponsorsRelations = exports.sponsorMatching = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
const companies_1 = require("./companies");
exports.sponsorMatching = schema_1.dataSchema.table('companies_mappings', {
    id: (0, pg_core_1.serial)('id').unique().notNull().primaryKey(),
    pattern: (0, pg_core_1.text)('pattern').notNull(),
    flags: (0, pg_core_1.text)('flags').default('gm'),
    enabled: (0, pg_core_1.boolean)('enabled').default(true),
    priority: (0, pg_core_1.serial)('priority').unique(),
    company: (0, pg_core_1.uuid)('company').references(() => companies_1.companies.id)
});
exports.sponsorsRelations = (0, drizzle_orm_1.relations)(exports.sponsorMatching, ({one, many}) => ({
    one: one(companies_1.companies, {
        fields: [exports.sponsorMatching.company],
        references: [companies_1.companies.id]
    })
}));
