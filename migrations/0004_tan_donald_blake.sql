ALTER TABLE "data"."lttstore_product_linker"
    RENAME COLUMN "product_id" TO "variant_id";--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_linker"
    DROP CONSTRAINT "lttstore_product_linker_product_id_lttstore_products_id_fk";
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_product_linker"
            ADD CONSTRAINT "lttstore_product_linker_variant_id_lttstore_variants_id_fk" FOREIGN KEY ("variant_id") REFERENCES "data"."lttstore_variants" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
