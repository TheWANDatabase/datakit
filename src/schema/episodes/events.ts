import {boolean, integer, jsonb, pgEnum, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {dataSchema} from "../schema";
import {episodes} from "./episodes";


export const eventType = pgEnum(
    "event_type",
    [
        "control",
        "topic",
        "child_topic",
        "sponsor_spot",
        "merch_message",
        "after_dark",
        "tangent",
        "unknown"
    ]
);
export const timestampedEvents = dataSchema.table('timestamped_events', {
    id: uuid('id').primaryKey().unique().defaultRandom(),
    episode: varchar('episode').notNull().references(() => episodes.id),
    event_type: eventType('event_type').notNull(),
    metadata: jsonb("metadata"),
    title: text('title').notNull(),
    depth: integer("depth").notNull().default(0),
    start: integer("start").notNull().default(0),
    end: integer("end").notNull().default(0),
    created: timestamp("created").notNull().defaultNow(),
    modified: timestamp("modified").notNull().defaultNow()
})