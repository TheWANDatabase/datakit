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
          dataType: "string";
          columnType: "PgNumeric";
          data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
          baseColumn: never;
        }, {}, {}>;
      currentTextImminence: import("drizzle-orm/pg-core").PgColumn<{
        name: "current_text_imminence";
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
        secondsSinceLastUpdate: import("drizzle-orm/pg-core").PgColumn<{
            name: "seconds_since_last_update";
            tableName: "seedtube";
          dataType: "string";
          columnType: "PgNumeric";
          data: string;
            driverParam: string;
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
        notNull: false;
        hasDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
      }, {}, {}>;
      sponsors: import("drizzle-orm/pg-core").PgColumn<{
        name: "sponsors";
        tableName: "seedtube";
        dataType: "json";
        columnType: "PgJsonb";
        data: unknown;
        driverParam: unknown;
        notNull: false;
        hasDefault: false;
        enumValues: undefined;
        baseColumn: never;
      }, {}, {}>;
      thumbnail: import("drizzle-orm/pg-core").PgColumn<{
        name: "thumbnail";
        tableName: "seedtube";
        dataType: "string";
        columnType: "PgText";
        data: string;
        driverParam: string;
        notNull: false;
        hasDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
      }, {}, {}>;
    };
    dialect: "pg";
}>;
//# sourceMappingURL=seedtube.d.ts.map