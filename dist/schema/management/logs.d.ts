export declare const logs: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "logs";
  schema: "management";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "logs";
      dataType: "bigint";
      columnType: "PgBigInt64";
      data: bigint;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    source: import("drizzle-orm/pg-core").PgColumn<{
      name: "source";
      tableName: "logs";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    level: import("drizzle-orm/pg-core").PgColumn<{
      name: "level";
      tableName: "logs";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    message: import("drizzle-orm/pg-core").PgColumn<{
      name: "message";
      tableName: "logs";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    meta: import("drizzle-orm/pg-core").PgColumn<{
      name: "meta";
      tableName: "logs";
      dataType: "json";
      columnType: "PgJsonb";
      data: unknown;
      driverParam: unknown;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    time: import("drizzle-orm/pg-core").PgColumn<{
      name: "time";
      tableName: "logs";
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
//# sourceMappingURL=logs.d.ts.map