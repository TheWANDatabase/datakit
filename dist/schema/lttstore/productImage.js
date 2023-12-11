"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImageRelations = exports.productImage = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const models_1 = require("./models");
const media_1 = require("../media");
const products_1 = require("./products");
const schema_1 = require("../schema");
exports.productImage = schema_1.dataSchema.table('lttstore_product_images', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    productId: (0, pg_core_1.integer)('product_id').references(() => products_1.products.id),
    imageId: (0, pg_core_1.uuid)('image_id').unique().notNull().references(() => media_1.media.id),
    modelId: (0, pg_core_1.integer)('model_id').references(() => models_1.models.id),
    size: (0, pg_core_1.text)('size'),
});
exports.productImageRelations = (0, drizzle_orm_1.relations)(exports.productImage, ({ one }) => ({
    product: one(exports.productImage, {
        fields: [exports.productImage.productId],
        references: [exports.productImage.id]
    }),
    image: one(exports.productImage, {
        fields: [exports.productImage.imageId],
        references: [exports.productImage.id]
    }),
    model: one(exports.productImage, {
        fields: [exports.productImage.modelId],
        references: [exports.productImage.id]
    })
}));
