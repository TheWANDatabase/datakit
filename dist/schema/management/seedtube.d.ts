export declare const seedtube: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "seedtube";
    schema: "management";
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
//# sourceMappingURL=seedtube.d.ts.map