ALTER TABLE "data"."lttstore_variants" ADD COLUMN "sale_price" numeric(10, 2) NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_average_weight" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "ltt_products_average_weight";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "ltt_variants_average_discount";--> statement-breakpoint
ALTER TABLE "management"."stats" DROP COLUMN IF EXISTS "ltt_variants_average_discount_percentage";