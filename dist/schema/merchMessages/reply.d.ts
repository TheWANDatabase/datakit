export declare const reply: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "merch_messages_reply";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "merch_messages_reply";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        messageId: import("drizzle-orm/pg-core").PgColumn<{
            name: "message_id";
            tableName: "merch_messages_reply";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        message: import("drizzle-orm/pg-core").PgColumn<{
            name: "message";
            tableName: "merch_messages_reply";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        added: import("drizzle-orm/pg-core").PgColumn<{
            name: "added";
            tableName: "merch_messages_reply";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        start: import("drizzle-orm/pg-core").PgColumn<{
            name: "start";
            tableName: "merch_messages_reply";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        end: import("drizzle-orm/pg-core").PgColumn<{
            name: "end";
            tableName: "merch_messages_reply";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        replyFrom: import("drizzle-orm/pg-core").PgColumn<{
            name: "reply_from";
            tableName: "merch_messages_reply";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=reply.d.ts.map