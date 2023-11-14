import {boolean, integer, real, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";


/**
 * @description The products table is used to store information about products
 * @field id - ID of the product
 * @field productId - The product ID of the product
 * @field importDate - The date that the product was imported
 * @field title - The title of the product
 * @field models - The models showing in the product images
 * @field prices - The prices of the product
 */
export const products = dataSchema.table('lttstore_products', {
  // ID of the product
  id: serial('id').primaryKey().unique(),

  // ProductID as seen on the store itself (eg: 'onesie' or 'merino-t-shirt')
  productId: varchar('product_id', {length: 128}).notNull().unique(),

  // Date imported (defaults to current time)
  importDate: timestamp('import_date').defaultNow(),

  // Product name as seen on the store itself
  title: text('title').notNull(),
  isOnSale: boolean('is_on_sale').notNull().default(false),
  standardPrice: real('standard_price').notNull().default(0),
  salePrice: real('sale_price').notNull().default(0),
  variantCount: integer('variant_count').notNull().default(0),
  type: varchar('product_type', {length: 128}).notNull().default(''),
  retired: boolean('retired').notNull().default(false),
  isOutOfStock: boolean('is_out_of_stock').notNull().default(false),
  supersededBy: varchar('superseded_by', {length: 128}).notNull().default(''),
})

export const productsRelations = relations(products, ({one, many}) => ({
  images: many(products),
  supersededBy: one(products, {
    fields: [products.supersededBy],
    references: [products.productId]
  }),
}))