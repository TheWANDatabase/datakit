import {boolean, jsonb, numeric, pgTable, real, serial, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";


/**
 * @description The products table is used to store information about products
 * @field id - ID of the product
 * @field productId - The product ID of the product
 * @field importDate - The date that the product was imported
 * @field title - The title of the product
 * @field models - The models showing in the product images
 * @field prices - The prices of the product
 */
export const products = pgTable('lttstore_products', {
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
  salePrice: real('sale_price').notNull().default(0)

})

export const productsRelations = relations(products, ({many}) => ({
  images: many(products)
}))