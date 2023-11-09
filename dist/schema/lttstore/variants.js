"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variants = void 0;
const schema_1 = require("../schema");
const pg_core_1 = require("drizzle-orm/pg-core");
const media_1 = require("../media");
const drizzle_orm_1 = require("drizzle-orm");
exports.variants = schema_1.dataSchema.table('lttstore_variants', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    productId: (0, pg_core_1.integer)('product_id').notNull(),
    price: (0, pg_core_1.numeric)('price', { precision: 10, scale: 2 }).notNull(),
    salePrice: (0, pg_core_1.numeric)('sale_price', { precision: 10, scale: 2 }).notNull(),
    onSale: (0, pg_core_1.boolean)('is_on_sale').notNull(),
    name: (0, pg_core_1.text)('name').notNull(),
    weight: (0, pg_core_1.integer)('weight').notNull(),
    colorway: (0, pg_core_1.text)('colorway'),
    size: (0, pg_core_1.text)('size'),
    image: (0, pg_core_1.uuid)('image').references(() => media_1.media.id),
    retired: (0, pg_core_1.boolean)('retired').notNull().default(false),
    isOutOfStock: (0, pg_core_1.boolean)('is_out_of_stock').notNull().default(false),
    lastUpdated: (0, pg_core_1.timestamp)('last_updated').notNull().defaultNow()
});
const variantsRelations = (0, drizzle_orm_1.relations)(exports.variants, ({ one }) => ({
    product: one(exports.variants)
}));
