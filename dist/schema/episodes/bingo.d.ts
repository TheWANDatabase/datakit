export declare const bingo: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "episodes_bingo";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "episodes_bingo";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    episodeId: import("drizzle-orm/pg-core").PgColumn<{
      name: "episode_id";
      tableName: "episodes_bingo";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    timestamp: import("drizzle-orm/pg-core").PgColumn<{
      name: "timestamp";
      tableName: "episodes_bingo";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    tile: import("drizzle-orm/pg-core").PgColumn<{
      name: "tile";
      tableName: "episodes_bingo";
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
//# sourceMappingURL=bingo.d.ts.map