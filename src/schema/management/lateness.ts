import {integer, jsonb, timestamp} from "drizzle-orm/pg-core";
import {managementSchema} from "../schema";

export const lateness = managementSchema.table('lateness', {
  scheduled: timestamp('time'),
  actual: timestamp('actual'),
  differenceMs: integer('difference_ms'),
  titleChanges: jsonb('title_changes').$type<TitleChange[]>().default([]),
  descriptionChanges: jsonb('description_changes').$type<DescriptionChange[]>().default([]),
  thumbnailChanges: jsonb('thumbnail_changes').$type<ThumbnailChange[]>().default([]),
})

export interface BaseChange {
  time: Date
}

export interface TitleChange extends BaseChange {
  title: string,
}

export interface DescriptionChange extends BaseChange {
  description: string,
}

export interface ThumbnailChange extends BaseChange {
  thumbnail: string,
}