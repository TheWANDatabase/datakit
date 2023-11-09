CREATE TABLE IF NOT EXISTS "data"."lttstore_variants" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"on_sale" numeric(10, 2) NOT NULL,
	"name" text NOT NULL,
	"weight" integer NOT NULL,
	"colorway" text,
	"size" text,
	"image" uuid,
	"retired" boolean DEFAULT false NOT NULL,
	CONSTRAINT "lttstore_variants_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_indexed" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_retired" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_on_sale" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_average_price" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_average_sale_price" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_average_discount" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_variants_average_discount_percentage" numeric DEFAULT '0.00' NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."lttstore_variants" ADD CONSTRAINT "lttstore_variants_image_media_id_fk" FOREIGN KEY ("image") REFERENCES "data"."media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
