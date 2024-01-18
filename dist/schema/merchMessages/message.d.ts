export declare const merchMessages: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "merch_messages_messages";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "merch_messages_messages";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        productId: import("drizzle-orm/pg-core").PgColumn<{
            name: "product_id";
            tableName: "merch_messages_messages";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        episodeId: import("drizzle-orm/pg-core").PgColumn<{
            name: "episode_id";
            tableName: "merch_messages_messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        message: import("drizzle-orm/pg-core").PgColumn<{
            name: "message";
            tableName: "merch_messages_messages";
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
            tableName: "merch_messages_messages";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        modified: import("drizzle-orm/pg-core").PgColumn<{
            name: "modified";
            tableName: "merch_messages_messages";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        color: import("drizzle-orm/pg-core").PgColumn<{
            name: "color";
            tableName: "merch_messages_messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        author: import("drizzle-orm/pg-core").PgColumn<{
            name: "author";
            tableName: "merch_messages_messages";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        start: import("drizzle-orm/pg-core").PgColumn<{
            name: "start";
            tableName: "merch_messages_messages";
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
            tableName: "merch_messages_messages";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const merchMessagesRelations: import("drizzle-orm").Relations<"merch_messages_messages", {
    episode: import("drizzle-orm").One<"merch_messages_messages", false>;
    product: import("drizzle-orm").One<"lttstore_products", false>;
    reply: import("drizzle-orm").One<"merch_messages_reply", true>;
}>;
//# sourceMappingURL=message.d.ts.map