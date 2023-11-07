import {episodes} from "../episodes/episodes";
import {products} from "./products";

import {integer, pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

export const productLinker = dataSchema.table('lttstore_product_linker', {
  id: serial('id').primaryKey().unique(),
  productId: integer("product_id").references(() => products.id),
  episodeId: varchar("episode_id", {length: 12}).references(() => episodes.id),
})

export const productLinkerRelations = relations(productLinker, ({one}) => ({
  product: one(products, {
    fields: [productLinker.productId],
    references: [products.id]
  }),
  episode: one(episodes, {
    fields: [productLinker.episodeId],
    references: [episodes.id]
  })
}))