"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.productsRelations = exports.products = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
/**
 * @description The products table is used to store information about products
 * @field id - ID of the product
 * @field productId - The product ID of the product
 * @field importDate - The date that the product was imported
 * @field title - The title of the product
 * @field models - The models showing in the product images
 * @field prices - The prices of the product
 */
exports.products = schema_1.dataSchema.table('lttstore_products', {
    // ID of the product
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    // ProductID as seen on the store itself (eg: 'onesie' or 'merino-t-shirt')
    productId: (0, pg_core_1.varchar)('product_id', {length: 128}).notNull().unique(),
    // Date imported (defaults to current time)
    importDate: (0, pg_core_1.timestamp)('import_date').defaultNow(),
    lastChecked: (0, pg_core_1.timestamp)('last_checked').notNull().defaultNow(),
    // Product name as seen on the store itself
    title: (0, pg_core_1.text)('title').notNull(),
    isOnSale: (0, pg_core_1.boolean)('is_on_sale').notNull().default(false),
    standardPrice: (0, pg_core_1.real)('standard_price').notNull().default(0),
    salePrice: (0, pg_core_1.real)('sale_price').notNull().default(0),
    variantCount: (0, pg_core_1.bigint)('variant_count', {mode: "number"}).notNull().default(0),
    type: (0, pg_core_1.varchar)('product_type', {length: 128}).notNull().default(''),
    retired: (0, pg_core_1.boolean)('retired').notNull().default(false),
    isOutOfStock: (0, pg_core_1.boolean)('is_out_of_stock').notNull().default(false),
    supersededBy: (0, pg_core_1.varchar)('superseded_by', {length: 128}).notNull().default(''),
    imageCount: (0, pg_core_1.bigint)('image_count', {mode: "number"}).notNull().default(0),
    featureCount: (0, pg_core_1.bigint)('feature_count', {mode: "number"}).notNull().default(0) // The number of episodes this product is featured in
});
exports.productsRelations = (0, drizzle_orm_1.relations)(exports.products, ({one, many}) => ({
    images: many(exports.products),
    supersededBy: one(exports.products, {
        fields: [exports.products.supersededBy],
        references: [exports.products.productId]
    }),
}));
