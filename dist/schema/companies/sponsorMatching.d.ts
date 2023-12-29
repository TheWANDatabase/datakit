export declare const sponsorMatching: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "companies_mappings";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "companies_mappings";
      dataType: "number";
      columnType: "PgSerial";
      data: number;
      driverParam: number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    pattern: import("drizzle-orm/pg-core").PgColumn<{
      name: "pattern";
      tableName: "companies_mappings";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    flags: import("drizzle-orm/pg-core").PgColumn<{
      name: "flags";
      tableName: "companies_mappings";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: true;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    enabled: import("drizzle-orm/pg-core").PgColumn<{
      name: "enabled";
      tableName: "companies_mappings";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    priority: import("drizzle-orm/pg-core").PgColumn<{
      name: "priority";
      tableName: "companies_mappings";
      dataType: "number";
      columnType: "PgSerial";
      data: number;
      driverParam: number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    company: import("drizzle-orm/pg-core").PgColumn<{
      name: "company";
      tableName: "companies_mappings";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
export declare const sponsorsRelations: import("drizzle-orm").Relations<"companies_mappings", {
  one: import("drizzle-orm").One<"companies", false>;
}>;
//# sourceMappingURL=sponsorMatching.d.ts.map