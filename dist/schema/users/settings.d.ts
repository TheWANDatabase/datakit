export declare const userSettings: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "users_settings";
  schema: "data";
  columns: {
    uid: import("drizzle-orm/pg-core").PgColumn<{
      name: "uid";
      tableName: "users_settings";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    displayName: import("drizzle-orm/pg-core").PgColumn<{
      name: "full_name";
      tableName: "users_settings";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    email: import("drizzle-orm/pg-core").PgColumn<{
      name: "email";
      tableName: "users_settings";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    password: import("drizzle-orm/pg-core").PgColumn<{
      name: "password";
      tableName: "users_settings";
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
//# sourceMappingURL=settings.d.ts.map