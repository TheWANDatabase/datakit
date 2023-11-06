import {jsonb, pgTable, serial, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";


/**
 * @description The products table is used to store information about products
 * @field id - ID of the product
 * @field productId - The product ID of the product
 * @field importDate - The date that the product was imported
 * @field title - The title of the product
 * @field models - The models showing in the product images
 * @field prices - The prices of the product
 */
export const lttProducts = pgTable('ltt_products', {
  // ID of the product
  id: serial('id').primaryKey().unique(),

  // ProductID as seen on the store itself (eg: 'onesie' or 'merino-t-shirt')
  productId: varchar('product_id', { length: 128 }).notNull().unique(),

  // Date imported (defaults to current time)
  importDate: timestamp('import_date').defaultNow(),

  // Product name as seen on the store itself
  title: text('title').notNull(),

  // A list of models from the photographs (or `unknown` if the model is not known)
  models: jsonb('models').notNull().default([]).$type<Model[]>(),

  prices: jsonb('prices').notNull().$type<Prices>()

})

/**
 * @description Type used to define the format of the products.models field in the database
 * @field displayName - The display name of the model
 * @field height - The height of the model
 * @field height.imperial - The imperial height of the model
 * @field height.metric - The metric height of the model
 * @field images - The images of the model
 * @field sizeWorn - The size worn by the model
 */
export type Model = {
  displayName: string,
  height: {
    imperial: string,
    metric: number,
  }
  images: string[],
  sizeWorn: string
}

/**
 * @description Type used to define the format of the products.prices field in the database
 * @field standard - The standard price of the product
 * @field sale - The sale price of the product
 * @field sale.price - The price of the product on sale
 * @field sale.active - Whether or not the product is on sale
 */
export type Prices = {
  standard: number,
  sale: {
    price: number,
    active: boolean
  }
}