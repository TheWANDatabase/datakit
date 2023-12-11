export declare const models: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "lttstore_models";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "lttstore_models";
      dataType: "number";
      columnType: "PgSerial";
      data: number;
      driverParam: number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    name: import("drizzle-orm/pg-core").PgColumn<{
      name: "name";
      tableName: "lttstore_models";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    description: import("drizzle-orm/pg-core").PgColumn<{
      name: "description";
      tableName: "lttstore_models";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    created: import("drizzle-orm/pg-core").PgColumn<{
      name: "created";
      tableName: "lttstore_models";
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
      tableName: "lttstore_models";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    heightMetric: import("drizzle-orm/pg-core").PgColumn<{
      name: "height_metric";
      tableName: "lttstore_models";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    heightImperial: import("drizzle-orm/pg-core").PgColumn<{
      name: "height_imperial";
      tableName: "lttstore_models";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    imageCount: import("drizzle-orm/pg-core").PgColumn<{
      name: "image_count";
      tableName: "lttstore_models";
      dataType: "number";
      columnType: "PgBigInt53";
      data: number;
      driverParam: string | number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
export declare const modelRelations: import("drizzle-orm").Relations<"lttstore_models", {
  images: import("drizzle-orm").Many<"lttstore_product_images">;
}>;
//# sourceMappingURL=models.d.ts.map