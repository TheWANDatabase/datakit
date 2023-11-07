import {integer, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";
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
})

export const modelRelations = relations(models, ({many}) => ({
  images: many(productImage)
}))
