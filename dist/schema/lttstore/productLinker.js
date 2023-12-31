"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.productLinkerRelations = exports.productLinker = void 0;
const episodes_1 = require("../episodes/episodes");
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
const variants_1 = require("./variants");
const products_1 = require("./products");
exports.productLinker = schema_1.dataSchema.table('lttstore_product_linker', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    productId: (0, pg_core_1.integer)("product_id").references(() => products_1.products.id),
    variantId: (0, pg_core_1.jsonb)("variant_ids").$type(),
    episodeId: (0, pg_core_1.varchar)("episode_id", {length: 12}).references(() => episodes_1.episodes.id),
    isLaunch: (0, pg_core_1.boolean)('is_launch').notNull().default(false)
});
exports.productLinkerRelations = (0, drizzle_orm_1.relations)(exports.productLinker, ({one}) => ({
    product: one(variants_1.variants, {
        fields: [exports.productLinker.variantId],
        references: [variants_1.variants.id]
    }),
    episode: one(episodes_1.episodes, {
        fields: [exports.productLinker.episodeId],
        references: [episodes_1.episodes.id]
    })
}));
