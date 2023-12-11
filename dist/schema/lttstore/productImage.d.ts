export declare const productImage: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "lttstore_product_images";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "lttstore_product_images";
      dataType: "number";
      columnType: "PgSerial";
      data: number;
      driverParam: number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    productId: import("drizzle-orm/pg-core").PgColumn<{
      name: "product_id";
      tableName: "lttstore_product_images";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    imageId: import("drizzle-orm/pg-core").PgColumn<{
      name: "image_id";
      tableName: "lttstore_product_images";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    modelId: import("drizzle-orm/pg-core").PgColumn<{
      name: "model_id";
      tableName: "lttstore_product_images";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    size: import("drizzle-orm/pg-core").PgColumn<{
      name: "size";
      tableName: "lttstore_product_images";
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
export declare const productImageRelations: import("drizzle-orm").Relations<"lttstore_product_images", {
  product: import("drizzle-orm").One<"lttstore_product_images", false>;
  image: import("drizzle-orm").One<"lttstore_product_images", true>;
  model: import("drizzle-orm").One<"lttstore_product_images", false>;
}>;
//# sourceMappingURL=productImage.d.ts.map