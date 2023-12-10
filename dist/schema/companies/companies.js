"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companiesRelations = exports.companies = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const media_1 = require("../media");
const drizzle_orm_1 = require("drizzle-orm");
const jobs_1 = require("../cast/jobs");
const schema_1 = require("../schema");
exports.companies = schema_1.dataSchema.table('companies', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    name: (0, pg_core_1.text)('name'),
    links: (0, pg_core_1.jsonb)('links').default([]),
    logo: (0, pg_core_1.uuid)('logo').unique().references(() => media_1.media.id),
    founded: (0, pg_core_1.integer)('founded'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
});
exports.companiesRelations = (0, drizzle_orm_1.relations)(exports.companies, ({ one, many }) => ({
    jobs: many(jobs_1.jobs),
    one: one(media_1.media, {
        fields: [exports.companies.logo],
        references: [media_1.media.id]
    })
}));
