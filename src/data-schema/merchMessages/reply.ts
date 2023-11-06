import {integer, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";
import {merchMessages} from "./message";

export const reply = pgTable('merch_messages_reply', {
  id: serial('id').primaryKey().unique(),
  messageId: integer('message_id').references(() => merchMessages.id),
  message: text('message'),
  added: timestamp('added').defaultNow(),
  start: integer('start'),
  end: integer('end'),
  replyFrom: text('reply_from').default("Uncertain"),
})