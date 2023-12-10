export declare const members: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "cast_members";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "cast_members";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    alias: import("drizzle-orm/pg-core").PgColumn<{
      name: "alias";
      tableName: "cast_members";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    forename: import("drizzle-orm/pg-core").PgColumn<{
      name: "forename";
      tableName: "cast_members";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    surname: import("drizzle-orm/pg-core").PgColumn<{
      name: "surname";
      tableName: "cast_members";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    debut: import("drizzle-orm/pg-core").PgColumn<{
      name: "debut_id";
      tableName: "cast_members";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    avatar: import("drizzle-orm/pg-core").PgColumn<{
      name: "avatar_id";
      tableName: "cast_members";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    socials: import("drizzle-orm/pg-core").PgColumn<{
      name: "socials";
      tableName: "cast_members";
      dataType: "json";
      columnType: "PgJsonb";
      data: CastSocials;
      driverParam: unknown;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    priority: import("drizzle-orm/pg-core").PgColumn<{
      name: "priority";
      tableName: "cast_members";
      dataType: "number";
      columnType: "PgSerial";
      data: number;
      driverParam: number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
export declare const castRelations: import("drizzle-orm").Relations<"cast_members", {
  positions: import("drizzle-orm").Many<"cast_jobs">;
  avatar: import("drizzle-orm").One<"media", false>;
}>;
export type CastSocials = {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  imdb?: string;
  wikipedia?: string;
  ltt_forum?: string;
};
//# sourceMappingURL=members.d.ts.map