import {dataSchema} from "../schema";
import {boolean, integer, numeric, serial, text, uuid} from "drizzle-orm/pg-core";
import {media} from "../media";
import {relations} from "drizzle-orm";

export const variants = dataSchema.table('lttstore_variants', {
  id: serial('id').primaryKey().unique(),
  productId: integer('product_id').notNull(),
  price: numeric('price', {precision: 10, scale: 2}).notNull(),
  salePrice: numeric('sale_price', {precision: 10, scale: 2}).notNull(),
  onSale: boolean('is_on_sale').notNull(),
  name: text('name').notNull(),
  weight: integer('weight').notNull(),
  colorway: text('colorway'),
  size: text('size'),
  image: uuid('image').references(() => media.id),
  retired: boolean('retired').notNull().default(false),
  isOutOfStock: boolean('is_out_of_stock').notNull().default(false),
})

const variantsRelations = relations(variants, ({one}) => ({
  product: one(variants)
}));