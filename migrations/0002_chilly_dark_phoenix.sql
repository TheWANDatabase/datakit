ALTER TABLE "data"."lttstore_product_linker"
    DROP CONSTRAINT "lttstore_product_linker_variant_id_lttstore_variants_id_fk";
--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_linker"
    ADD COLUMN "product_id" integer;--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_linker"
    ADD COLUMN "variant_ids" jsonb;--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_product_linker"
            ADD CONSTRAINT "lttstore_product_linker_product_id_lttstore_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "data"."lttstore_products" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_linker"
    DROP COLUMN IF EXISTS "variant_id";