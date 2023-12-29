export declare const userSettings: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "users_settings";
  schema: "data";
  columns: {
    uid: import("drizzle-orm/pg-core").PgColumn<{
      name: "uuid";
      tableName: "users_settings";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    username: import("drizzle-orm/pg-core").PgColumn<{
      name: "username";
      tableName: "users_settings";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: true;
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
      notNull: true;
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
    canLogIn: import("drizzle-orm/pg-core").PgColumn<{
      name: "can_log_in";
      tableName: "users_settings";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
//# sourceMappingURL=settings.d.ts.map