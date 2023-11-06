import {pgTable, text, varchar} from "drizzle-orm/pg-core";

export const episodes = pgTable('episodes', {
  id: varchar('id', {length: 12}).primaryKey().unique(),
  title: text('title').default('Title Unavailable'),
  description: text('description').default('Description Unavailable'),

})