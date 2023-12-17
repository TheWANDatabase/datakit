ALTER TABLE "data"."sponsors_spots"
    DROP CONSTRAINT "sponsors_spots_campaign_id_sponsors_campaigns_id_fk";--> statement-breakpoint
DROP TABLE "data"."sponsors_campaigns";--> statement-breakpoint
ALTER TABLE "data"."lttstore_products"
    ALTER COLUMN "variant_count" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "data"."cast_members"
    ADD COLUMN "credit_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."cast_members"
    ADD COLUMN "position_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."episodes"
    ADD COLUMN "topic_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."episodes"
    ADD COLUMN "host_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_products"
    ADD COLUMN "image_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_products"
    ADD COLUMN "feature_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_linker"
    ADD COLUMN "is_launch" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_models"
    ADD COLUMN "image_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_variants"
    ADD COLUMN "image_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_variants"
    ADD COLUMN "feature_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "name" text;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "message" text;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "url" text;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "added" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "modified" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "company" uuid;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "is_dennis" boolean;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "start" timestamp;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "end" timestamp;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "safe" boolean;--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    ADD COLUMN "is_sponsor_debut" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."topics_changes"
    ADD COLUMN "comment_count" bigint DEFAULT 0 NOT NULL;--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."sponsors_spots"
            ADD CONSTRAINT "sponsors_spots_company_companies_id_fk" FOREIGN KEY ("company") REFERENCES "data"."companies" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
ALTER TABLE "data"."sponsors_spots"
    DROP COLUMN IF EXISTS "campaign_id";