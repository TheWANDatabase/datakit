ALTER TABLE "data"."lttstore_variants" ADD COLUMN "last_updated" timestamp DEFAULT now() NOT NULL;