ALTER TABLE "data"."lttstore_products"
    ADD COLUMN "last_checked" timestamp DEFAULT now() NOT NULL;