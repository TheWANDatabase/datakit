export declare const topicType: import("drizzle-orm/pg-core").PgEnum<["topic", "merch message", "sponsor", "tangent"]>;
export declare const topics: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "topics";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "topics";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        episodeId: import("drizzle-orm/pg-core").PgColumn<{
            name: "episode_id";
            tableName: "topics";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "topics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        parent: import("drizzle-orm/pg-core").PgColumn<{
            name: "parent";
            tableName: "topics";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        start: import("drizzle-orm/pg-core").PgColumn<{
            name: "start";
            tableName: "topics";
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
            tableName: "topics";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        created: import("drizzle-orm/pg-core").PgColumn<{
            name: "created";
            tableName: "topics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        ref: import("drizzle-orm/pg-core").PgColumn<{
            name: "ref";
            tableName: "topics";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        kind: import("drizzle-orm/pg-core").PgColumn<{
            name: "kind";
            tableName: "topics";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "topic" | "merch message" | "sponsor" | "tangent";
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: ["topic", "merch message", "sponsor", "tangent"];
            baseColumn: never;
        }, {}, {}>;
        modified: import("drizzle-orm/pg-core").PgColumn<{
            name: "modified";
            tableName: "topics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=topics.d.ts.map