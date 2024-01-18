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
        live: import("drizzle-orm/pg-core").PgColumn<{
            name: "live";
            tableName: "seedtube";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        wan: import("drizzle-orm/pg-core").PgColumn<{
            name: "wan";
            tableName: "seedtube";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "seedtube";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        thumbnail: import("drizzle-orm/pg-core").PgColumn<{
            name: "thumbnail";
            tableName: "seedtube";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        imminence: import("drizzle-orm/pg-core").PgColumn<{
            name: "imminence";
            tableName: "seedtube";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        textImminence: import("drizzle-orm/pg-core").PgColumn<{
            name: "text_imminence";
            tableName: "seedtube";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=seedtube.d.ts.map