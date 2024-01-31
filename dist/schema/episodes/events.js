"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampedEvents = exports.eventType = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
const episodes_1 = require("./episodes");
exports.eventType = (0, pg_core_1.pgEnum)("event_type", [
    "control",
    "topic",
    "child_topic",
    "sponsor_spot",
    "merch_message",
    "after_dark",
    "tangent",
    "unknown"
]);
exports.timestampedEvents = schema_1.dataSchema.table('timestamped_events', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    episode: (0, pg_core_1.varchar)('episode').notNull().references(() => episodes_1.episodes.id),
    event_type: (0, exports.eventType)('event_type').notNull(),
    metadata: (0, pg_core_1.jsonb)("metadata"),
    title: (0, pg_core_1.text)('title').notNull(),
    depth: (0, pg_core_1.integer)("depth").notNull().default(0),
    start: (0, pg_core_1.integer)("start").notNull().default(0),
    end: (0, pg_core_1.integer)("end").notNull().default(0),
    created: (0, pg_core_1.timestamp)("created").notNull().defaultNow(),
    modified: (0, pg_core_1.timestamp)("modified").notNull().defaultNow()
});
