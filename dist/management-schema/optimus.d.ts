export declare const optimus: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "optimus_metrics";
    schema: undefined;
    columns: {
        time: import("drizzle-orm/pg-core").PgColumn<{
            name: "time";
            tableName: "optimus_metrics";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entitySize: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_size";
            tableName: "optimus_metrics";
            dataType: "number";
            columnType: "PgBigInt53";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entitySizeDelta: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_size_delta";
            tableName: "optimus_metrics";
            dataType: "number";
            columnType: "PgBigInt53";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entityCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_count";
            tableName: "optimus_metrics";
            dataType: "number";
            columnType: "PgBigInt53";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entityCountDelta: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_count_delta";
            tableName: "optimus_metrics";
            dataType: "number";
            columnType: "PgBigInt53";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        queueBacklog: import("drizzle-orm/pg-core").PgColumn<{
            name: "queue_backlog";
            tableName: "optimus_metrics";
            dataType: "number";
            columnType: "PgBigInt53";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        queueBacklogDelta: import("drizzle-orm/pg-core").PgColumn<{
            name: "queue_backlog_delta";
            tableName: "optimus_metrics";
            dataType: "number";
            columnType: "PgBigInt53";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=optimus.d.ts.map