export declare const eventType: import("drizzle-orm/pg-core").PgEnum<["control", "topic", "child_topic", "sponsor_spot", "merch_message", "after_dark", "tangent", "unknown"]>;
export declare const timestampedEvents: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "timestamped_events";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "timestamped_events";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        episode: import("drizzle-orm/pg-core").PgColumn<{
            name: "episode";
            tableName: "timestamped_events";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        event_type: import("drizzle-orm/pg-core").PgColumn<{
            name: "event_type";
            tableName: "timestamped_events";
            dataType: "string";
            columnType: "PgEnumColumn";
            data: "topic" | "tangent" | "control" | "child_topic" | "sponsor_spot" | "merch_message" | "after_dark" | "unknown";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: ["control", "topic", "child_topic", "sponsor_spot", "merch_message", "after_dark", "tangent", "unknown"];
            baseColumn: never;
        }, {}, {}>;
        metadata: import("drizzle-orm/pg-core").PgColumn<{
            name: "metadata";
            tableName: "timestamped_events";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "timestamped_events";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        depth: import("drizzle-orm/pg-core").PgColumn<{
            name: "depth";
            tableName: "timestamped_events";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        start: import("drizzle-orm/pg-core").PgColumn<{
            name: "start";
            tableName: "timestamped_events";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        end: import("drizzle-orm/pg-core").PgColumn<{
            name: "end";
            tableName: "timestamped_events";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        created: import("drizzle-orm/pg-core").PgColumn<{
            name: "created";
            tableName: "timestamped_events";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        modified: import("drizzle-orm/pg-core").PgColumn<{
            name: "modified";
            tableName: "timestamped_events";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=events.d.ts.map