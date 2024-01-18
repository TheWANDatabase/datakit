"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.media = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("./schema");
exports.media = schema_1.dataSchema.table('media', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().notNull().defaultRandom(),
    blur: (0, pg_core_1.text)('blur'),
    original: (0, pg_core_1.jsonb)('original').$type(),
    additional: (0, pg_core_1.jsonb)('additional').$type(),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
    kind: (0, pg_core_1.text)('kind').notNull(),
    bytes: (0, pg_core_1.bigint)('bytes', { mode: "number" }).notNull().default(0),
});
