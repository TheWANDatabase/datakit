export declare const companies: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "companies";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "companies";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    name: import("drizzle-orm/pg-core").PgColumn<{
      name: "name";
      tableName: "companies";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    links: import("drizzle-orm/pg-core").PgColumn<{
      name: "links";
      tableName: "companies";
      dataType: "json";
      columnType: "PgJsonb";
      data: unknown;
      driverParam: unknown;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    logo: import("drizzle-orm/pg-core").PgColumn<{
      name: "logo";
      tableName: "companies";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    founded: import("drizzle-orm/pg-core").PgColumn<{
      name: "founded";
      tableName: "companies";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    added: import("drizzle-orm/pg-core").PgColumn<{
      name: "added";
      tableName: "companies";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    modified: import("drizzle-orm/pg-core").PgColumn<{
      name: "modified";
      tableName: "companies";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
export declare const companiesRelations: import("drizzle-orm").Relations<"companies", {
  jobs: import("drizzle-orm").Many<"cast_jobs">;
  one: import("drizzle-orm").One<"media", false>;
}>;
//# sourceMappingURL=companies.d.ts.map