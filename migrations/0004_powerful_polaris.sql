ALTER TABLE "management"."stats" ALTER COLUMN "cast_count" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "episode_count" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "sponsor_count" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "sponsor_spot_count" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "sponsor_spot_duration" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "ltt_products_indexed" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "topic_count" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "topic_contributor_count" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "users_count" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "data"."lttstore_products" ADD COLUMN "variant_count" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_products" ADD COLUMN "product_type" varchar(128) DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_products" ADD COLUMN "retired" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_retired" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_on_sale" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_average_price" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_average_sale_price" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_average_discount" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_average_discount_percentage" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_average_weight" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_average_variant_count" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_products_average_image_count" numeric DEFAULT '0.00' NOT NULL;