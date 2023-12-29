"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.lateness = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../schema");
exports.lateness = schema_1.managementSchema.table('lateness', {
    scheduled: (0, pg_core_1.timestamp)('time'),
    actual: (0, pg_core_1.timestamp)('actual'),
    differenceMs: (0, pg_core_1.integer)('difference_ms'),
    titleChanges: (0, pg_core_1.jsonb)('title_changes').$type().default([]),
    descriptionChanges: (0, pg_core_1.jsonb)('description_changes').$type().default([]),
    thumbnailChanges: (0, pg_core_1.jsonb)('thumbnail_changes').$type().default([]),
});
