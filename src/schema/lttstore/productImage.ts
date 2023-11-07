import {pgTable, serial, text, uuid} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {models} from "./models";
import {media} from "../media";
import {products} from "./products";
import {dataSchema} from "../schema";

export const productImage = dataSchema.table('lttstore_product_images', {
  id: serial('id').primaryKey().unique(),
  productId: serial('product_id').references(() => products.id),
  imageId: uuid('image_id').unique().notNull().references(() => media.id),
  modelId: serial('model_id').references(() => models.id),
  size: text('size'),
})

export const productImageRelations = relations(productImage, ({one}) => ({
  product: one(productImage, {
    fields: [productImage.productId],
    references: [productImage.id]
  }),
  image: one(productImage, {
    fields: [productImage.imageId],
    references: [productImage.id]
  }),
  model: one(productImage, {
    fields: [productImage.modelId],
    references: [productImage.id]
  })
}))