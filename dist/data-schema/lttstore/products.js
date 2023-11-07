"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRelations = exports.products = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
/**
 * @description The products table is used to store information about products
 * @field id - ID of the product
 * @field productId - The product ID of the product
 * @field importDate - The date that the product was imported
 * @field title - The title of the product
 * @field models - The models showing in the product images
 * @field prices - The prices of the product
 */
exports.products = (0, pg_core_1.pgTable)('lttstore_products', {
    // ID of the product
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    // ProductID as seen on the store itself (eg: 'onesie' or 'merino-t-shirt')
    productId: (0, pg_core_1.varchar)('product_id', { length: 128 }).notNull().unique(),
    // Date imported (defaults to current time)
    importDate: (0, pg_core_1.timestamp)('import_date').defaultNow(),
    // Product name as seen on the store itself
    title: (0, pg_core_1.text)('title').notNull(),
    isOnSale: (0, pg_core_1.boolean)('is_on_sale').notNull().default(false),
    standardPrice: (0, pg_core_1.real)('standard_price').notNull().default(0),
    salePrice: (0, pg_core_1.real)('sale_price').notNull().default(0)
});
exports.productsRelations = (0, drizzle_orm_1.relations)(exports.products, ({ many }) => ({
    images: many(exports.products)
}));
