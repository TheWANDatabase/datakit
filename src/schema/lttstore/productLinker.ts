import {episodes} from "../episodes/episodes";

import {bigint, boolean, serial, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";
import {variants} from "./variants";

export const productLinker = dataSchema.table('lttstore_product_linker', {
  id: serial('id').primaryKey().unique(),
  variantId: bigint("variant_id", {mode: "number"}).references(() => variants.id),
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