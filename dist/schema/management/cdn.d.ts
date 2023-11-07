export declare const cdn: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "cdn";
    schema: "management";
    columns: {
        time: import("drizzle-orm/pg-core").PgColumn<{
            name: "time";
            tableName: "cdn";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entitySizeTotal: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_size_total";
            tableName: "cdn";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entitySizeDelta: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_size_delta";
            tableName: "cdn";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entitySizeAverage: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_size_average";
            tableName: "cdn";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entityCountTotal: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_count_total";
            tableName: "cdn";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entityCountDelta: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_count_delta";
            tableName: "cdn";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entityCountAverage: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_count_average";
            tableName: "cdn";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        queueBacklogTotal: import("drizzle-orm/pg-core").PgColumn<{
            name: "queue_backlog_total";
            tableName: "cdn";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        queueBacklogDelta: import("drizzle-orm/pg-core").PgColumn<{
            name: "queue_backlog_delta";
            tableName: "cdn";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        queueBacklogAverage: import("drizzle-orm/pg-core").PgColumn<{
            name: "queue_backlog_average";
            tableName: "cdn";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entityCountsByType: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_counts_by_type";
            tableName: "cdn";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=cdn.d.ts.map