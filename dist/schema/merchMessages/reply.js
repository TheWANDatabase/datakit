"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.reply = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const message_1 = require("./message");
const schema_1 = require("../schema");
exports.reply = schema_1.dataSchema.table('merch_messages_reply', {
    id: (0, pg_core_1.uuid)('id').primaryKey().unique().defaultRandom(),
    messageId: (0, pg_core_1.uuid)('message_id').references(() => message_1.merchMessages.id),
    message: (0, pg_core_1.text)('message'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    start: (0, pg_core_1.integer)('start'),
    end: (0, pg_core_1.integer)('end'),
    replyFrom: (0, pg_core_1.text)('reply_from').default("Uncertain"),
});
