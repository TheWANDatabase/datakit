"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reply = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const message_1 = require("./message");
exports.reply = (0, pg_core_1.pgTable)('merch_messages_reply', {
    id: (0, pg_core_1.serial)('id').primaryKey().unique(),
    messageId: (0, pg_core_1.integer)('message_id').references(() => message_1.merchMessages.id),
    message: (0, pg_core_1.text)('message'),
    added: (0, pg_core_1.timestamp)('added').defaultNow(),
    start: (0, pg_core_1.integer)('start'),
    end: (0, pg_core_1.integer)('end'),
    replyFrom: (0, pg_core_1.text)('reply_from').default("Uncertain"),
});
