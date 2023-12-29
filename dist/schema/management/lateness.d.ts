export declare const lateness: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "lateness";
  schema: "management";
  columns: {
    scheduled: import("drizzle-orm/pg-core").PgColumn<{
      name: "time";
      tableName: "lateness";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    actual: import("drizzle-orm/pg-core").PgColumn<{
      name: "actual";
      tableName: "lateness";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    differenceMs: import("drizzle-orm/pg-core").PgColumn<{
      name: "difference_ms";
      tableName: "lateness";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    titleChanges: import("drizzle-orm/pg-core").PgColumn<{
      name: "title_changes";
      tableName: "lateness";
      dataType: "json";
      columnType: "PgJsonb";
      data: TitleChange[];
      driverParam: unknown;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    descriptionChanges: import("drizzle-orm/pg-core").PgColumn<{
      name: "description_changes";
      tableName: "lateness";
      dataType: "json";
      columnType: "PgJsonb";
      data: DescriptionChange[];
      driverParam: unknown;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    thumbnailChanges: import("drizzle-orm/pg-core").PgColumn<{
      name: "thumbnail_changes";
      tableName: "lateness";
      dataType: "json";
      columnType: "PgJsonb";
      data: ThumbnailChange[];
      driverParam: unknown;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;

export interface BaseChange {
  time: Date;
}

export interface TitleChange extends BaseChange {
  title: string;
}

export interface DescriptionChange extends BaseChange {
  description: string;
}

export interface ThumbnailChange extends BaseChange {
  thumbnail: string;
}

//# sourceMappingURL=lateness.d.ts.map