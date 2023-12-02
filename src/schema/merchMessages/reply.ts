import {integer, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {merchMessages} from "./message";
import {dataSchema} from "../schema";

export const reply = dataSchema.table('merch_messages_reply', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  messageId: uuid('message_id').references(() => merchMessages.id),
  message: text('message'),
  added: timestamp('added').defaultNow(),
  start: integer('start'),
  end: integer('end'),
  replyFrom: text('reply_from').default("Uncertain"),
})