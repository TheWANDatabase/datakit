import {integer, pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {products} from "../lttstore/products";
import {reply} from "./reply";
import {relations} from "drizzle-orm";
import {episodes} from "../episodes/episodes";
import {dataSchema} from "../schema";

export const merchMessages = dataSchema.table('merch_messages_messages', {
  id: serial('id').primaryKey().unique(),
  productId: integer('product_id').references(() => products.id),
  episodeId: varchar('episode_id', {length: 12}).references(() => episodes.id),
  message: text('message'),
  added: timestamp('added').defaultNow(),
  modified: timestamp('modified').defaultNow(),
  color: varchar('color', {length: 7}).default('#000000'),
  author: varchar('author', {length: 255}),
  start: integer('start'),
  end: integer('end'),
});

export const merchMessagesRelations = relations(merchMessages, ({one}) => ({
  episode: one(merchMessages, {
    fields: [merchMessages.episodeId],
    references: [merchMessages.id]
  }),
  product: one(products, {
    fields: [merchMessages.productId],
    references: [products.id]
  }),
  reply: one(reply, {
    fields: [merchMessages.id],
    references: [reply.messageId]
  })
}))