"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castPositionsRelations = exports.castPositions = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const mediaOutlets_1 = require("./mediaOutlets");
const cast_1 = require("./cast");
const drizzle_orm_1 = require("drizzle-orm");
exports.castPositions = (0, pg_core_1.pgTable)('cast_positions', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    outlet: (0, pg_core_1.integer)('outlet').references(() => mediaOutlets_1.mediaOutlets.id),
    role: (0, pg_core_1.text)('role'),
    isPrimary: (0, pg_core_1.boolean)('is_primary'),
    from: (0, pg_core_1.timestamp)('from'),
    to: (0, pg_core_1.timestamp)('to'),
    castId: (0, pg_core_1.integer)('cast_id'),
});
exports.castPositionsRelations = (0, drizzle_orm_1.relations)(exports.castPositions, ({ one }) => ({
    castMember: one(cast_1.cast, {
        fields: [exports.castPositions.castId],
        references: [cast_1.cast.id]
    })
}));
