export declare const sponsorSpot: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "sponsors_spots";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "sponsors_spots";
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
      tableName: "sponsors_spots";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    message: import("drizzle-orm/pg-core").PgColumn<{
      name: "message";
      tableName: "sponsors_spots";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    url: import("drizzle-orm/pg-core").PgColumn<{
      name: "url";
      tableName: "sponsors_spots";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    added: import("drizzle-orm/pg-core").PgColumn<{
      name: "added";
      tableName: "sponsors_spots";
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
      tableName: "sponsors_spots";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    companyId: import("drizzle-orm/pg-core").PgColumn<{
      name: "company";
      tableName: "sponsors_spots";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    isDennis: import("drizzle-orm/pg-core").PgColumn<{
      name: "is_dennis";
      tableName: "sponsors_spots";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    start: import("drizzle-orm/pg-core").PgColumn<{
      name: "start";
      tableName: "sponsors_spots";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    end: import("drizzle-orm/pg-core").PgColumn<{
      name: "end";
      tableName: "sponsors_spots";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    safe: import("drizzle-orm/pg-core").PgColumn<{
      name: "safe";
      tableName: "sponsors_spots";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    episodeId: import("drizzle-orm/pg-core").PgColumn<{
      name: "episode_id";
      tableName: "sponsors_spots";
      dataType: "string";
      columnType: "PgVarchar";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    isSponsorDebut: import("drizzle-orm/pg-core").PgColumn<{
      name: "is_sponsor_debut";
      tableName: "sponsors_spots";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
export declare const sponsorSpotRelations: import("drizzle-orm").Relations<"sponsors_spots", {
  episode: import("drizzle-orm").One<"episodes", false>;
}>;
//# sourceMappingURL=spots.d.ts.map