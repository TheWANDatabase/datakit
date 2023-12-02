"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castPositionsRelations = exports.jobs = void 0;
const companies_1 = require("../companies/companies");
const members_1 = require("./members");
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.jobs = schema_1.dataSchema.table('cast_jobs', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique(),
    outletId: (0, pg_core_1.uuid)('outlet_id').references(() => companies_1.companies.id),
    role: (0, pg_core_1.text)('role'),
    isPrimary: (0, pg_core_1.boolean)('is_primary'),
    from: (0, pg_core_1.timestamp)('from'),
    to: (0, pg_core_1.timestamp)('to'),
    castId: (0, pg_core_1.uuid)('cast_id').references(() => members_1.members.id),
});
exports.castPositionsRelations = (0, drizzle_orm_1.relations)(exports.jobs, ({ one }) => ({
    castMember: one(members_1.members, {
        fields: [exports.jobs.castId],
        references: [members_1.members.id],
    }),
    outlet: one(companies_1.companies, {
        fields: [exports.jobs.outletId],
        references: [companies_1.companies.id]
    })
}));
