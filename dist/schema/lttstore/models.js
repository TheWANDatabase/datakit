"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.modelRelations = exports.models = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const productImage_1 = require("./productImage");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
exports.models = schema_1.dataSchema.table('lttstore_models', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    name: (0, pg_core_1.text)('name'),
    description: (0, pg_core_1.text)('description'),
    created: (0, pg_core_1.timestamp)('created').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
    heightMetric: (0, pg_core_1.integer)('height_metric'),
    heightImperial: (0, pg_core_1.text)('height_imperial'),
    imageCount: (0, pg_core_1.bigint)('image_count', {mode: "number"}).notNull().default(0)
});
exports.modelRelations = (0, drizzle_orm_1.relations)(exports.models, ({many}) => ({
    images: many(productImage_1.productImage)
}));
