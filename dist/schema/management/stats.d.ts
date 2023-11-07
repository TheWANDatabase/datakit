export declare const stats: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "stats";
    schema: "management";
    columns: {
        time: import("drizzle-orm/pg-core").PgColumn<{
            name: "time";
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
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
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=stats.d.ts.map