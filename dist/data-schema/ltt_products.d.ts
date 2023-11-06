/**
 * @description The products table is used to store information about products
 * @field id - ID of the product
 * @field productId - The product ID of the product
 * @field importDate - The date that the product was imported
 * @field title - The title of the product
 * @field models - The models showing in the product images
 * @field prices - The prices of the product
 */
export declare const lttProducts: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "ltt_products";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "ltt_products";
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
            tableName: "ltt_products";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        importDate: import("drizzle-orm/pg-core").PgColumn<{
            name: "import_date";
            tableName: "ltt_products";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "ltt_products";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        models: import("drizzle-orm/pg-core").PgColumn<{
            name: "models";
            tableName: "ltt_products";
            dataType: "json";
            columnType: "PgJsonb";
            data: Model[];
            driverParam: unknown;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        prices: import("drizzle-orm/pg-core").PgColumn<{
            name: "prices";
            tableName: "ltt_products";
            dataType: "json";
            columnType: "PgJsonb";
            data: Prices;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
/**
 * @description Type used to define the format of the products.models field in the database
 * @field displayName - The display name of the model
 * @field height - The height of the model
 * @field height.imperial - The imperial height of the model
 * @field height.metric - The metric height of the model
 * @field images - The images of the model
 * @field sizeWorn - The size worn by the model
 */
export type Model = {
    displayName: string;
    height: {
        imperial: string;
        metric: number;
    };
    images: string[];
    sizeWorn: string;
};
/**
 * @description Type used to define the format of the products.prices field in the database
 * @field standard - The standard price of the product
 * @field sale - The sale price of the product
 * @field sale.price - The price of the product on sale
 * @field sale.active - Whether or not the product is on sale
 */
export type Prices = {
    standard: number;
    sale: {
        price: number;
        active: boolean;
    };
};
//# sourceMappingURL=ltt_products.d.ts.map