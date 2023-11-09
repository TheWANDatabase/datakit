ALTER TABLE "data"."lttstore_variants" ADD COLUMN "is_on_sale" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_variants" DROP COLUMN IF EXISTS "on_sale";