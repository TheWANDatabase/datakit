import {managementSchema} from "../schema";
import {bigint, index, integer, jsonb, numeric, timestamp} from "drizzle-orm/pg-core";


export const stats = managementSchema.table('stats', {
  time: timestamp('time').unique().primaryKey().defaultNow(),

  /* Episode Statistics */
  castCount: integer('cast_count').notNull().default(0),
  episodeCount: integer('episode_count').notNull().default(0),
  sponsorCount: integer('sponsor_count').notNull().default(0),
  sponsorSpotCount: integer('sponsor_spot_count').notNull().default(0),
  sponsorSpotDuration: integer('sponsor_spot_duration').notNull().default(0),
  topicCount: integer('topic_count').notNull().default(0),
  topicContributorCount: integer('topic_contributor_count').notNull().default(0),

  /* LTT Store Statistics */
  lttProductsIndexed: integer('ltt_products_indexed').notNull().default(0),
  lttProductsRetired: integer('ltt_products_retired').notNull().default(0),
  lttProductsOnSale: integer('ltt_products_on_sale').notNull().default(0),
  lttProductsTotalPrice: numeric('ltt_products_total_price').notNull().default('0.00'),
  lttProductsAveragePrice: numeric('ltt_products_average_price').notNull().default('0.00'),
  lttProductsAverageSalePrice: numeric('ltt_products_average_sale_price').notNull().default('0.00'),
  lttProductsAverageDiscount: numeric('ltt_products_average_discount').notNull().default('0.00'),
  lttProductsAverageDiscountPercentage: numeric('ltt_products_average_discount_percentage').notNull().default('0.00'),
  lttProductsAverageVariantCount: numeric('ltt_products_average_variant_count').notNull().default('0.00'),
  lttProductsAverageImageCount: numeric('ltt_products_average_image_count').notNull().default('0.00'),

  lttVariantsIndexed: integer('ltt_variants_indexed').notNull().default(0),
  lttVariantsRetired: integer('ltt_variants_retired').notNull().default(0),
  lttVariantsOnSale: integer('ltt_variants_on_sale').notNull().default(0),
  lttVariantTotalPrice: numeric('ltt_variants_total_price').notNull().default('0.00'),
  lttVariantsAveragePrice: numeric('ltt_variants_average_price').notNull().default('0.00'),
  lttVariantsAverageSalePrice: numeric('ltt_variants_average_sale_price').notNull().default('0.00'),
  lttVariantsAverageWeight: integer ('ltt_variants_average_weight').notNull().default(0),

  lttModelsIndexed: integer('ltt_models_indexed').notNull().default(0),
  lttModelsAverageHeightMetric: integer('ltt_models_average_height_metric').notNull().default(0),

  lttProductPhotosIndexed: integer('ltt_product_photos_indexed').notNull().default(0),


  /* User Statistics */
  usersCount: integer('users_count').notNull().default(0),
}, (table) => {
  return {
    timeIdx: index('time_idx').on(table.time).desc(),
  }
})