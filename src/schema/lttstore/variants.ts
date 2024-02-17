import { dataSchema } from "../schema";
import { bigint, boolean, integer, numeric, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { media } from "../media";
import { relations } from "drizzle-orm";

export const variants = dataSchema.table('lttstore_variants', {
  id: bigint('id', { mode: 'number' }).primaryKey().unique(),
  productId: integer('product_id').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  salePrice: numeric('sale_price', { precision: 10, scale: 2 }).notNull(),
  onSale: boolean('is_on_sale').notNull(),
  name: text('name').notNull(),
  weight: integer('weight').notNull(),
  colorway: text('colorway'),
  size: text('size'),
  image: uuid('image').references(() => media.id),
  retired: boolean('retired').notNull().default(false),
  isOutOfStock: boolean('is_out_of_stock').notNull().default(false),
  isRestockable: boolean('is_restockable').notNull().default(true),
  isPreorder: boolean('is_preorder').notNull().default(false),
  lastUpdated: timestamp('last_updated').notNull().defaultNow(),
  imageCount: bigint('image_count', { mode: "number" }).notNull().default(0),
  featureCount: bigint('feature_count', { mode: "number" }).notNull().default(0) // The number of episodes this variant is featured in
})

const variantsRelations = relations(variants, ({ one }) => ({
  product: one(variants, {
    fields: [variants.productId],
    references: [variants.id]
  })
}));