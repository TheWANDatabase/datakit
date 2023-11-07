export declare const state: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "state";
    schema: undefined;
    columns: {
        time: import("drizzle-orm/pg-core").PgColumn<{
            name: "time";
            tableName: "state";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        castCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "cast_count";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        episodeCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "episode_count";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        sponsorCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "sponsor_count";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        sponsorSpotCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "sponsor_spot_count";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        sponsorSpotDuration: import("drizzle-orm/pg-core").PgColumn<{
            name: "sponsor_spot_duration";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsIndexed: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_indexed";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        topicCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "topic_count";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        topicContributorCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "topic_contributor_count";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        usersCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "users_count";
            tableName: "state";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entitySize: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_size";
            tableName: "state";
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
            tableName: "state";
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
            tableName: "state";
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
            tableName: "state";
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
            tableName: "state";
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
            tableName: "state";
            dataType: "number";
            columnType: "PgBigInt53";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        entityCountsByType: import("drizzle-orm/pg-core").PgColumn<{
            name: "entity_counts_by_type";
            tableName: "state";
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
export declare const seedtube: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "seedtube";
    schema: undefined;
    columns: {
        time: import("drizzle-orm/pg-core").PgColumn<{
            name: "time";
            tableName: "seedtube";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        currentImminence: import("drizzle-orm/pg-core").PgColumn<{
            name: "current_imminence";
            tableName: "seedtube";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        secondsSinceLastUpdate: import("drizzle-orm/pg-core").PgColumn<{
            name: "seconds_since_last_update";
            tableName: "seedtube";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=index.d.ts.map