CREATE SCHEMA "data";
--> statement-breakpoint
CREATE SCHEMA "management";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "change_status" AS ENUM('draft', 'proposed', 'accepted', 'rejected', 'rolled_back');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."cast_credits" (
	"id" serial PRIMARY KEY NOT NULL,
	"cast_id" integer,
	"position_id" integer,
	"episode_id" varchar(12),
	CONSTRAINT "cast_credits_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."cast_members" (
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
CREATE TABLE IF NOT EXISTS "data"."cast_jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"outlet_id" integer,
	"role" text,
	"is_primary" boolean,
	"from" timestamp,
	"to" timestamp,
	"cast_id" integer,
	CONSTRAINT "cast_jobs_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"links" jsonb DEFAULT '[]'::jsonb,
	"logo" uuid,
	"founded" integer,
	"added" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	CONSTRAINT "companies_id_unique" UNIQUE("id"),
	CONSTRAINT "companies_logo_unique" UNIQUE("logo")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes" (
	"id" varchar(12) PRIMARY KEY NOT NULL,
	"floatplane" varchar(12),
	"title" text DEFAULT 'Title Unavailable',
	"description" text DEFAULT 'Description Unavailable',
	"thumbnail" uuid,
	"aired" timestamp DEFAULT now(),
	"duration" integer,
	CONSTRAINT "episodes_id_unique" UNIQUE("id"),
	CONSTRAINT "episodes_floatplane_unique" UNIQUE("floatplane"),
	CONSTRAINT "episodes_thumbnail_unique" UNIQUE("thumbnail")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes_transcripts" (
	"id" serial PRIMARY KEY NOT NULL,
	"episode_id" varchar(12),
	"filename" text,
	"started" timestamp,
	"completed" timestamp,
	"revised" timestamp,
	CONSTRAINT "episodes_transcripts_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes_speakers" (
	"id" serial PRIMARY KEY NOT NULL,
	"transcript_id" integer,
	"credit_id" integer,
	CONSTRAINT "episodes_speakers_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes_markers" (
	"id" varchar(12),
	"has_thumbnail" boolean DEFAULT false,
	"has_audio_on_demand" boolean DEFAULT false,
	"has_video_on_demand" boolean DEFAULT false,
	"has_webvtt" boolean DEFAULT false,
	"has_guest" boolean DEFAULT false,
	"is_live" boolean DEFAULT false,
	"has_content_warning" boolean DEFAULT false,
	"is_corrupt" boolean DEFAULT false,
	"has_merch_messages" boolean DEFAULT false,
	"has_product_launch" boolean DEFAULT false,
	"topic_count" integer DEFAULT 0,
	"product_count" integer DEFAULT 0,
	"cast_count" integer DEFAULT 0,
	CONSTRAINT "episodes_markers_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" varchar(128) NOT NULL,
	"import_date" timestamp DEFAULT now(),
	"title" text NOT NULL,
	"is_on_sale" boolean DEFAULT false NOT NULL,
	"standard_price" real DEFAULT 0 NOT NULL,
	"sale_price" real DEFAULT 0 NOT NULL,
	CONSTRAINT "lttstore_products_id_unique" UNIQUE("id"),
	CONSTRAINT "lttstore_products_product_id_unique" UNIQUE("product_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_product_linker" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer,
	"episode_id" varchar(12),
	CONSTRAINT "lttstore_product_linker_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_product_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" serial NOT NULL,
	"image_id" uuid NOT NULL,
	"model_id" serial NOT NULL,
	"size" text,
	CONSTRAINT "lttstore_product_images_id_unique" UNIQUE("id"),
	CONSTRAINT "lttstore_product_images_image_id_unique" UNIQUE("image_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_models" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"created" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	"height_metric" integer,
	"height_imperial" text,
	CONSTRAINT "lttstore_models_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."merch_messages_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer,
	"episode_id" varchar(12),
	"message" text,
	"added" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	"color" varchar(7) DEFAULT '#000000',
	"author" varchar(255),
	"start" integer,
	"end" integer,
	CONSTRAINT "merch_messages_messages_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."merch_messages_reply" (
	"id" serial PRIMARY KEY NOT NULL,
	"message_id" integer,
	"message" text,
	"added" timestamp DEFAULT now(),
	"start" integer,
	"end" integer,
	"reply_from" text DEFAULT 'Uncertain',
	CONSTRAINT "merch_messages_reply_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."sponsors_campaigns" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"message" text,
	"url" text,
	"added" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	"company" integer,
	"is_dennis" boolean,
	"safe" boolean,
	CONSTRAINT "sponsors_campaigns_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."sponsors_spots" (
	"id" serial PRIMARY KEY NOT NULL,
	"episode_id" varchar(12),
	"campaign_id" integer,
	CONSTRAINT "sponsors_spots_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics" (
	"id" serial PRIMARY KEY NOT NULL,
	"episode_id" varchar(12),
	"title" text,
	"parent" integer,
	"start" integer,
	"end" integer,
	"created" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	CONSTRAINT "topics_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics_changelogs" (
	"topic_id" integer PRIMARY KEY NOT NULL,
	"started" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics_changes" (
	"id" serial PRIMARY KEY NOT NULL,
	"changelog_id" integer,
	"status" "change_status" DEFAULT 'draft',
	"added" timestamp DEFAULT now(),
	"modified" timestamp DEFAULT now(),
	"author" integer,
	"title" text,
	"parent" integer,
	"start" integer,
	"end" integer,
	CONSTRAINT "topics_changes_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics_comments" (
	"id" integer PRIMARY KEY NOT NULL,
	"change_id" integer,
	"message" text,
	"added" timestamp DEFAULT now(),
	"author" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."users_accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text,
	"avatar" uuid,
	"created" timestamp DEFAULT now(),
	"logged_in" timestamp,
	CONSTRAINT "users_accounts_id_unique" UNIQUE("id"),
	CONSTRAINT "users_accounts_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."users_settings" (
	"uid" integer PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" text,
	CONSTRAINT "users_settings_uid_unique" UNIQUE("uid")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."media" (
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
DO $$ BEGIN
 ALTER TABLE "data"."cast_credits" ADD CONSTRAINT "cast_credits_cast_id_cast_members_id_fk" FOREIGN KEY ("cast_id") REFERENCES "data"."cast_members"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."cast_credits" ADD CONSTRAINT "cast_credits_position_id_cast_jobs_id_fk" FOREIGN KEY ("position_id") REFERENCES "data"."cast_jobs"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."cast_credits" ADD CONSTRAINT "cast_credits_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."cast_members" ADD CONSTRAINT "cast_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "data"."media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."cast_jobs" ADD CONSTRAINT "cast_jobs_outlet_id_companies_id_fk" FOREIGN KEY ("outlet_id") REFERENCES "data"."companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."cast_jobs" ADD CONSTRAINT "cast_jobs_cast_id_cast_members_id_fk" FOREIGN KEY ("cast_id") REFERENCES "data"."cast_members"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."companies" ADD CONSTRAINT "companies_logo_media_id_fk" FOREIGN KEY ("logo") REFERENCES "data"."media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."episodes" ADD CONSTRAINT "episodes_thumbnail_media_id_fk" FOREIGN KEY ("thumbnail") REFERENCES "data"."media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."episodes_transcripts" ADD CONSTRAINT "episodes_transcripts_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."episodes_speakers" ADD CONSTRAINT "episodes_speakers_transcript_id_episodes_transcripts_id_fk" FOREIGN KEY ("transcript_id") REFERENCES "data"."episodes_transcripts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."episodes_speakers" ADD CONSTRAINT "episodes_speakers_credit_id_cast_credits_id_fk" FOREIGN KEY ("credit_id") REFERENCES "data"."cast_credits"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."episodes_markers" ADD CONSTRAINT "episodes_markers_id_episodes_id_fk" FOREIGN KEY ("id") REFERENCES "data"."episodes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."lttstore_product_linker" ADD CONSTRAINT "lttstore_product_linker_product_id_lttstore_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "data"."lttstore_products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."lttstore_product_linker" ADD CONSTRAINT "lttstore_product_linker_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."lttstore_product_images" ADD CONSTRAINT "lttstore_product_images_product_id_lttstore_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "data"."lttstore_products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."lttstore_product_images" ADD CONSTRAINT "lttstore_product_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "data"."media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."lttstore_product_images" ADD CONSTRAINT "lttstore_product_images_model_id_lttstore_models_id_fk" FOREIGN KEY ("model_id") REFERENCES "data"."lttstore_models"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."merch_messages_messages" ADD CONSTRAINT "merch_messages_messages_product_id_lttstore_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "data"."lttstore_products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."merch_messages_messages" ADD CONSTRAINT "merch_messages_messages_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."merch_messages_reply" ADD CONSTRAINT "merch_messages_reply_message_id_merch_messages_messages_id_fk" FOREIGN KEY ("message_id") REFERENCES "data"."merch_messages_messages"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."sponsors_campaigns" ADD CONSTRAINT "sponsors_campaigns_company_companies_id_fk" FOREIGN KEY ("company") REFERENCES "data"."companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."sponsors_spots" ADD CONSTRAINT "sponsors_spots_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."sponsors_spots" ADD CONSTRAINT "sponsors_spots_campaign_id_sponsors_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "data"."sponsors_campaigns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."topics_changelogs" ADD CONSTRAINT "topics_changelogs_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "data"."topics"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."topics_changes" ADD CONSTRAINT "topics_changes_changelog_id_topics_changelogs_topic_id_fk" FOREIGN KEY ("changelog_id") REFERENCES "data"."topics_changelogs"("topic_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."topics_changes" ADD CONSTRAINT "topics_changes_author_users_accounts_id_fk" FOREIGN KEY ("author") REFERENCES "data"."users_accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."topics_changes" ADD CONSTRAINT "topics_changes_parent_topics_changes_id_fk" FOREIGN KEY ("parent") REFERENCES "data"."topics_changes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."topics_comments" ADD CONSTRAINT "topics_comments_change_id_topics_changes_id_fk" FOREIGN KEY ("change_id") REFERENCES "data"."topics_changes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."topics_comments" ADD CONSTRAINT "topics_comments_author_users_accounts_id_fk" FOREIGN KEY ("author") REFERENCES "data"."users_accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."users_accounts" ADD CONSTRAINT "users_accounts_avatar_media_id_fk" FOREIGN KEY ("avatar") REFERENCES "data"."media"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."users_settings" ADD CONSTRAINT "users_settings_uid_users_accounts_id_fk" FOREIGN KEY ("uid") REFERENCES "data"."users_accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
