import {episodes} from "../episodes/episodes";

import {boolean, integer, jsonb, serial, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";
import {variants} from "./variants";
import {products} from "./products";

export const productLinker = dataSchema.table('lttstore_product_linker', {
  id: serial('id').primaryKey().unique(),
  productId: integer("product_id").references(() => products.id),
  variantId: jsonb("variant_ids").$type<string[]>(),
  episodeId: varchar("episode_id", {length: 12}).references(() => episodes.id),
  isLaunch: boolean('is_launch').notNull().default(false)
})

export const productLinkerRelations = relations(productLinker, ({one}) => ({
  product: one(variants, {
    fields: [productLinker.variantId],
    references: [variants.id]
  }),
  episode: one(episodes, {
    fields: [productLinker.episodeId],
    references: [episodes.id]
  })
}))