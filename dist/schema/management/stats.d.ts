export declare const stats: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "stats";
    schema: "management";
    columns: {
        time: import("drizzle-orm/pg-core").PgColumn<{
            name: "time";
            tableName: "stats";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        castCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "cast_count";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        episodeCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "episode_count";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        sponsorCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "sponsor_count";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        sponsorSpotCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "sponsor_spot_count";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        sponsorSpotDuration: import("drizzle-orm/pg-core").PgColumn<{
            name: "sponsor_spot_duration";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        topicCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "topic_count";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        topicContributorCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "topic_contributor_count";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsIndexed: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_indexed";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsRetired: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_retired";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsOnSale: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_on_sale";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsTotalPrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_total_price";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsAveragePrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_average_price";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsAverageSalePrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_average_sale_price";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsAverageDiscount: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_average_discount";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsAverageDiscountPercentage: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_average_discount_percentage";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsAverageVariantCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_average_variant_count";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductsAverageImageCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_products_average_image_count";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttVariantsIndexed: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_variants_indexed";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttVariantsRetired: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_variants_retired";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttVariantsOnSale: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_variants_on_sale";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttVariantTotalPrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_variants_total_price";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttVariantsAveragePrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_variants_average_price";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttVariantsAverageSalePrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_variants_average_sale_price";
            tableName: "stats";
            dataType: "string";
            columnType: "PgNumeric";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttVariantsAverageWeight: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_variants_average_weight";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttModelsIndexed: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_models_indexed";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttModelsAverageHeightMetric: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_models_average_height_metric";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        lttProductPhotosIndexed: import("drizzle-orm/pg-core").PgColumn<{
            name: "ltt_product_photos_indexed";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        usersCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "users_count";
            tableName: "stats";
            dataType: "number";
            columnType: "PgInteger";
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
//# sourceMappingURL=stats.d.ts.map