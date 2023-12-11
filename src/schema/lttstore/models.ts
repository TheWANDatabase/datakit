import {bigint, integer, serial, text, timestamp} from "drizzle-orm/pg-core";
import {productImage} from "./productImage";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const models = dataSchema.table('lttstore_models', {
  id: serial('id').primaryKey().unique(),
  name: text('name'),
  description: text('description'),
  created: timestamp('created').defaultNow(),
  modified: timestamp('modified').defaultNow(),
  heightMetric: integer('height_metric'),
  heightImperial: text('height_imperial'),
  imageCount: bigint('image_count', {mode: "number"}).notNull().default(0)
})

export const modelRelations = relations(models, ({many}) => ({
  images: many(productImage)
}))
