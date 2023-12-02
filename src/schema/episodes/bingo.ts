import {integer, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {dataSchema} from "../schema";
import {episodes} from "./episodes";

export const bingo = dataSchema.table('episodes_bingo', {
  id: uuid('id').primaryKey().unique().defaultRandom(),
  episodeId: integer('episode_id').references(() => episodes.id),
  timestamp: timestamp('timestamp'),
  tile: text('tile'),
})