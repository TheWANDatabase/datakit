CREATE TABLE IF NOT EXISTS "cast_members" (
	"id" serial PRIMARY KEY NOT NULL,
	"alias" text,
	"forename" text,
	"surname" text,
	"debut_id" text,
	"avatar_id" uuid,
	"socials" jsonb,
	CONSTRAINT "cast_members_id_unique" UNIQUE("id"),
	CONSTRAINT "cast_members_avatar_id_unique" UNIQUE("avatar_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cast_positions" (
	"id" serial PRIMARY KEY NOT NULL,
	"outlet" integer,
	"role" text,
	"is_primary" boolean,
	"from" timestamp,
	"to" timestamp,
	"cast_id" integer,
	CONSTRAINT "cast_positions_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "episodes" (
	"id" varchar(12) PRIMARY KEY NOT NULL,
	"title" text DEFAULT 'Title Unavailable',
	"description" text DEFAULT 'Description Unavailable',
	CONSTRAINT "episodes_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "media" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"blur" text,
	"original" jsonb,
	"additional" jsonb,
	"added" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	"kind" text NOT NULL,
	"bytes" bigint DEFAULT 0 NOT NULL,
	CONSTRAINT "media_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "media_outlets" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"links" jsonb DEFAULT '[]'::jsonb,
	"logo" uuid,
	"founded" integer,
	"added" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	CONSTRAINT "media_outlets_id_unique" UNIQUE("id"),
	CONSTRAINT "media_outlets_logo_unique" UNIQUE("logo")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ltt_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" varchar(128) NOT NULL,
	"import_date" timestamp DEFAULT now(),
	"title" text NOT NULL,
	"models" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"prices" jsonb NOT NULL,
	CONSTRAINT "ltt_products_id_unique" UNIQUE("id"),
	CONSTRAINT "ltt_products_product_id_unique" UNIQUE("product_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cast_members" ADD CONSTRAINT "cast_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cast_positions" ADD CONSTRAINT "cast_positions_outlet_media_outlets_id_fk" FOREIGN KEY ("outlet") REFERENCES "media_outlets"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "media_outlets" ADD CONSTRAINT "media_outlets_logo_media_id_fk" FOREIGN KEY ("logo") REFERENCES "media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
