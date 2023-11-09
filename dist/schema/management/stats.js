"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stats = void 0;
const schema_1 = require("../schema");
const pg_core_1 = require("drizzle-orm/pg-core");
exports.stats = schema_1.managementSchema.table('stats', {
    time: (0, pg_core_1.timestamp)('time').unique().primaryKey().defaultNow(),
    /* Episode Statistics */
    castCount: (0, pg_core_1.integer)('cast_count').notNull().default(0),
    episodeCount: (0, pg_core_1.integer)('episode_count').notNull().default(0),
    sponsorCount: (0, pg_core_1.integer)('sponsor_count').notNull().default(0),
    sponsorSpotCount: (0, pg_core_1.integer)('sponsor_spot_count').notNull().default(0),
    sponsorSpotDuration: (0, pg_core_1.integer)('sponsor_spot_duration').notNull().default(0),
    topicCount: (0, pg_core_1.integer)('topic_count').notNull().default(0),
    topicContributorCount: (0, pg_core_1.integer)('topic_contributor_count').notNull().default(0),
    /* LTT Store Statistics */
    lttProductsIndexed: (0, pg_core_1.integer)('ltt_products_indexed').notNull().default(0),
    lttProductsRetired: (0, pg_core_1.integer)('ltt_products_retired').notNull().default(0),
    lttProductsOnSale: (0, pg_core_1.integer)('ltt_products_on_sale').notNull().default(0),
    lttProductsTotalPrice: (0, pg_core_1.numeric)('ltt_products_total_price').notNull().default('0.00'),
    lttProductsAveragePrice: (0, pg_core_1.numeric)('ltt_products_average_price').notNull().default('0.00'),
    lttProductsAverageSalePrice: (0, pg_core_1.numeric)('ltt_products_average_sale_price').notNull().default('0.00'),
    lttProductsAverageDiscount: (0, pg_core_1.numeric)('ltt_products_average_discount').notNull().default('0.00'),
    lttProductsAverageDiscountPercentage: (0, pg_core_1.numeric)('ltt_products_average_discount_percentage').notNull().default('0.00'),
    lttProductsAverageVariantCount: (0, pg_core_1.numeric)('ltt_products_average_variant_count').notNull().default('0.00'),
    lttProductsAverageImageCount: (0, pg_core_1.numeric)('ltt_products_average_image_count').notNull().default('0.00'),
    lttVariantsIndexed: (0, pg_core_1.integer)('ltt_variants_indexed').notNull().default(0),
    lttVariantsRetired: (0, pg_core_1.integer)('ltt_variants_retired').notNull().default(0),
    lttVariantsOnSale: (0, pg_core_1.integer)('ltt_variants_on_sale').notNull().default(0),
    lttVariantTotalPrice: (0, pg_core_1.numeric)('ltt_variants_total_price').notNull().default('0.00'),
    lttVariantsAveragePrice: (0, pg_core_1.numeric)('ltt_variants_average_price').notNull().default('0.00'),
    lttVariantsAverageSalePrice: (0, pg_core_1.numeric)('ltt_variants_average_sale_price').notNull().default('0.00'),
    lttVariantsAverageWeight: (0, pg_core_1.integer)('ltt_variants_average_weight').notNull().default(0),
    lttModelsIndexed: (0, pg_core_1.integer)('ltt_models_indexed').notNull().default(0),
    lttModelsAverageHeightMetric: (0, pg_core_1.integer)('ltt_models_average_height_metric').notNull().default(0),
    lttProductPhotosIndexed: (0, pg_core_1.integer)('ltt_product_photos_indexed').notNull().default(0),
    /* User Statistics */
    usersCount: (0, pg_core_1.integer)('users_count').notNull().default(0),
}, (table) => {
    return {
        timeIdx: (0, pg_core_1.index)('time_idx').on(table.time).desc(),
    };
});
