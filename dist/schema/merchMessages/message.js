"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.merchMessagesRelations = exports.merchMessages = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const products_1 = require("../lttstore/products");
const reply_1 = require("./reply");
const drizzle_orm_1 = require("drizzle-orm");
const episodes_1 = require("../episodes/episodes");
const schema_1 = require("../schema");
exports.merchMessages = schema_1.dataSchema.table('merch_messages_messages', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    productId: (0, pg_core_1.integer)('product_id').references(() => products_1.products.id),
    episodeId: (0, pg_core_1.varchar)('episode_id', {length: 12}).references(() => episodes_1.episodes.id),
    message: (0, pg_core_1.text)('message'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    modified: (0, pg_core_1.timestamp)('modified').defaultNow(),
    color: (0, pg_core_1.varchar)('color', {length: 7}).default('#000000'),
    author: (0, pg_core_1.varchar)('author', {length: 255}),
    start: (0, pg_core_1.integer)('start'),
    end: (0, pg_core_1.integer)('end'),
});
exports.merchMessagesRelations = (0, drizzle_orm_1.relations)(exports.merchMessages, ({one}) => ({
    episode: one(exports.merchMessages, {
        fields: [exports.merchMessages.episodeId],
        references: [exports.merchMessages.id]
    }),
    product: one(products_1.products, {
        fields: [exports.merchMessages.productId],
        references: [products_1.products.id]
    }),
    reply: one(reply_1.reply, {
        fields: [exports.merchMessages.id],
        references: [reply_1.reply.messageId]
    })
}));
