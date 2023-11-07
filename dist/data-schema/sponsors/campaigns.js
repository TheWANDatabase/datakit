"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.campaignsRelations = exports.campaigns = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const companies_1 = require("../companies/companies");
const spots_1 = require("./spots");
exports.campaigns = (0, pg_core_1.pgTable)('sponsors_campaigns', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    name: (0, pg_core_1.text)('name'),
    message: (0, pg_core_1.text)('message'),
    url: (0, pg_core_1.text)('url'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
    companyId: (0, pg_core_1.integer)('company').references(() => companies_1.companies.id),
    isDennis: (0, pg_core_1.boolean)('is_dennis'),
    safe: (0, pg_core_1.boolean)('safe') // Set true by default, but can be set to false if the sponsor company was dropped for ethical reasons
});
exports.campaignsRelations = (0, drizzle_orm_1.relations)(exports.campaigns, ({ many, one }) => ({
    company: one(companies_1.companies, {
        fields: [exports.campaigns.companyId],
        references: [companies_1.companies.id]
    }),
    spots: many(spots_1.sponsorSpot)
}));