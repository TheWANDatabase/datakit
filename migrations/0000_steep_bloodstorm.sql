CREATE SCHEMA "data";
--> statement-breakpoint
CREATE SCHEMA "management";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."cast_credits"
(
    "id"          serial PRIMARY KEY NOT NULL,
    "cast_id"     uuid,
    "position_id" uuid,
    "episode_id"  varchar(12),
    CONSTRAINT "cast_credits_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."cast_members"
(
    "id"             uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "alias"          text,
    "forename"       text,
    "surname"        text,
    "debut_id"       text,
    "avatar_id"      uuid,
    "socials"        jsonb,
    "priority"       integer,
    "credit_count"   bigint           DEFAULT 0                 NOT NULL,
    "position_count" bigint           DEFAULT 0                 NOT NULL,
    CONSTRAINT "cast_members_id_unique" UNIQUE ("id"),
    CONSTRAINT "cast_members_avatar_id_unique" UNIQUE ("avatar_id"),
    CONSTRAINT "cast_members_priority_unique" UNIQUE ("priority")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."cast_jobs"
(
    "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "outlet_id"  uuid,
    "role"       text,
    "is_primary" boolean,
    "from"       timestamp,
    "to"         timestamp,
    "cast_id"    uuid,
    CONSTRAINT "cast_jobs_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."companies"
(
    "id"       uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "name"     text,
    "links"    jsonb            DEFAULT '[]'::jsonb,
    "logo"     uuid,
    "founded"  integer,
    "added"    timestamp        DEFAULT now(),
    "modified" timestamp        DEFAULT now(),
    CONSTRAINT "companies_id_unique" UNIQUE ("id"),
    CONSTRAINT "companies_logo_unique" UNIQUE ("logo")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."companies_mappings"
(
    "id"       serial PRIMARY KEY NOT NULL,
    "pattern"  text               NOT NULL,
    "flags"    text    DEFAULT 'gm',
    "enabled"  boolean DEFAULT true,
    "priority" serial             NOT NULL,
    "company"  uuid,
    CONSTRAINT "companies_mappings_id_unique" UNIQUE ("id"),
    CONSTRAINT "companies_mappings_priority_unique" UNIQUE ("priority")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes"
(
    "id"                  varchar(12) PRIMARY KEY NOT NULL,
    "floatplane"          varchar(12),
    "title"               text      DEFAULT 'Title Unavailable',
    "description"         text      DEFAULT 'Description Unavailable',
    "thumbnail"           uuid,
    "aired"               timestamp DEFAULT now(),
    "duration"            integer,
    "topic_count"         bigint    DEFAULT 0     NOT NULL,
    "host_count"          bigint    DEFAULT 0     NOT NULL,
    "sponsor_count"       bigint    DEFAULT 0     NOT NULL,
    "merch_message_count" bigint    DEFAULT 0     NOT NULL,
    "intro_start"         integer,
    "intro_duration"      integer,
    "pre_show_offset"     integer   DEFAULT 0,
    CONSTRAINT "episodes_id_unique" UNIQUE ("id"),
    CONSTRAINT "episodes_floatplane_unique" UNIQUE ("floatplane"),
    CONSTRAINT "episodes_thumbnail_unique" UNIQUE ("thumbnail")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes_transcripts"
(
    "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "episode_id" varchar(12),
    "filename"   text,
    "started"    timestamp,
    "completed"  timestamp,
    "revised"    timestamp,
    CONSTRAINT "episodes_transcripts_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes_speakers"
(
    "id"            uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "transcript_id" uuid,
    "credit_id"     integer,
    CONSTRAINT "episodes_speakers_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."episodes_markers"
(
    "id"                  varchar(12),
    "has_thumbnail"       boolean DEFAULT false,
    "has_audio_on_demand" boolean DEFAULT false,
    "has_video_on_demand" boolean DEFAULT false,
    "has_webvtt"          boolean DEFAULT false,
    "has_guest"           boolean DEFAULT false,
    "is_live"             boolean DEFAULT false,
    "has_content_warning" boolean DEFAULT false,
    "is_corrupt"          boolean DEFAULT false,
    "has_merch_messages"  boolean DEFAULT false,
    "has_product_launch"  boolean DEFAULT false,
    "topic_count"         integer DEFAULT 0,
    "product_count"       integer DEFAULT 0,
    "cast_count"          integer DEFAULT 0,
    CONSTRAINT "episodes_markers_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_products"
(
    "id"              serial PRIMARY KEY         NOT NULL,
    "product_id"      varchar(128)               NOT NULL,
    "import_date"     timestamp    DEFAULT now(),
    "title"           text                       NOT NULL,
    "is_on_sale"      boolean      DEFAULT false NOT NULL,
    "standard_price"  real         DEFAULT 0     NOT NULL,
    "sale_price"      real         DEFAULT 0     NOT NULL,
    "variant_count"   bigint       DEFAULT 0     NOT NULL,
    "product_type"    varchar(128) DEFAULT ''    NOT NULL,
    "retired"         boolean      DEFAULT false NOT NULL,
    "is_out_of_stock" boolean      DEFAULT false NOT NULL,
    "superseded_by"   varchar(128) DEFAULT ''    NOT NULL,
    "image_count"     bigint       DEFAULT 0     NOT NULL,
    "feature_count"   bigint       DEFAULT 0     NOT NULL,
    CONSTRAINT "lttstore_products_id_unique" UNIQUE ("id"),
    CONSTRAINT "lttstore_products_product_id_unique" UNIQUE ("product_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_product_linker"
(
    "id"         serial PRIMARY KEY    NOT NULL,
    "variant_id" bigint,
    "episode_id" varchar(12),
    "is_launch"  boolean DEFAULT false NOT NULL,
    CONSTRAINT "lttstore_product_linker_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_product_images"
(
    "id"         serial PRIMARY KEY NOT NULL,
    "product_id" integer,
    "image_id"   uuid               NOT NULL,
    "model_id"   integer,
    "size"       text,
    CONSTRAINT "lttstore_product_images_id_unique" UNIQUE ("id"),
    CONSTRAINT "lttstore_product_images_image_id_unique" UNIQUE ("image_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_models"
(
    "id"              serial PRIMARY KEY  NOT NULL,
    "name"            text,
    "description"     text,
    "created"         timestamp DEFAULT now(),
    "modified"        timestamp DEFAULT now(),
    "height_metric"   integer,
    "height_imperial" text,
    "image_count"     bigint    DEFAULT 0 NOT NULL,
    CONSTRAINT "lttstore_models_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."lttstore_variants"
(
    "id"              bigint PRIMARY KEY      NOT NULL,
    "product_id"      integer                 NOT NULL,
    "price"           numeric(10, 2)          NOT NULL,
    "sale_price"      numeric(10, 2)          NOT NULL,
    "is_on_sale"      boolean                 NOT NULL,
    "name"            text                    NOT NULL,
    "weight"          integer                 NOT NULL,
    "colorway"        text,
    "size"            text,
    "image"           uuid,
    "retired"         boolean   DEFAULT false NOT NULL,
    "is_out_of_stock" boolean   DEFAULT false NOT NULL,
    "last_updated"    timestamp DEFAULT now() NOT NULL,
    "image_count"     bigint    DEFAULT 0     NOT NULL,
    "feature_count"   bigint    DEFAULT 0     NOT NULL,
    CONSTRAINT "lttstore_variants_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "management"."stats"
(
    "time"                                     timestamp PRIMARY KEY DEFAULT now()  NOT NULL,
    "cast_count"                               integer               DEFAULT 0      NOT NULL,
    "episode_count"                            integer               DEFAULT 0      NOT NULL,
    "sponsor_count"                            integer               DEFAULT 0      NOT NULL,
    "sponsor_spot_count"                       integer               DEFAULT 0      NOT NULL,
    "sponsor_spot_duration"                    integer               DEFAULT 0      NOT NULL,
    "topic_count"                              integer               DEFAULT 0      NOT NULL,
    "topic_contributor_count"                  integer               DEFAULT 0      NOT NULL,
    "ltt_products_indexed"                     integer               DEFAULT 0      NOT NULL,
    "ltt_products_retired"                     integer               DEFAULT 0      NOT NULL,
    "ltt_products_on_sale"                     integer               DEFAULT 0      NOT NULL,
    "ltt_products_total_price"                 numeric               DEFAULT '0.00' NOT NULL,
    "ltt_products_average_price"               numeric               DEFAULT '0.00' NOT NULL,
    "ltt_products_average_sale_price"          numeric               DEFAULT '0.00' NOT NULL,
    "ltt_products_average_discount"            numeric               DEFAULT '0.00' NOT NULL,
    "ltt_products_average_discount_percentage" numeric               DEFAULT '0.00' NOT NULL,
    "ltt_products_average_variant_count"       numeric               DEFAULT '0.00' NOT NULL,
    "ltt_products_average_image_count"         numeric               DEFAULT '0.00' NOT NULL,
    "ltt_variants_indexed"                     integer               DEFAULT 0      NOT NULL,
    "ltt_variants_retired"                     integer               DEFAULT 0      NOT NULL,
    "ltt_variants_on_sale"                     integer               DEFAULT 0      NOT NULL,
    "ltt_variants_total_price"                 numeric               DEFAULT '0.00' NOT NULL,
    "ltt_variants_average_price"               numeric               DEFAULT '0.00' NOT NULL,
    "ltt_variants_average_sale_price"          numeric               DEFAULT '0.00' NOT NULL,
    "ltt_variants_average_weight"              integer               DEFAULT 0      NOT NULL,
    "ltt_models_indexed"                       integer               DEFAULT 0      NOT NULL,
    "ltt_models_average_height_metric"         integer               DEFAULT 0      NOT NULL,
    "ltt_product_photos_indexed"               integer               DEFAULT 0      NOT NULL,
    "users_count"                              integer               DEFAULT 0      NOT NULL,
    CONSTRAINT "stats_time_unique" UNIQUE ("time")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "management"."seedtube"
(
    "time"           timestamp PRIMARY KEY DEFAULT now() NOT NULL,
    "live"           boolean                             NOT NULL,
    "wan"            boolean                             NOT NULL,
    "title"          text                                NOT NULL,
    "thumbnail"      text                                NOT NULL,
    "imminence"      integer                             NOT NULL,
    "text_imminence" text                                NOT NULL,
    CONSTRAINT "seedtube_time_unique" UNIQUE ("time")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "management"."cdn"
(
    "time"                    timestamp PRIMARY KEY DEFAULT now()       NOT NULL,
    "entity_size_total"       integer                                   NOT NULL,
    "entity_size_delta"       integer                                   NOT NULL,
    "entity_size_average"     numeric                                   NOT NULL,
    "entity_size_min"         integer                                   NOT NULL,
    "entity_size_max"         integer                                   NOT NULL,
    "entity_size_deviation"   numeric                                   NOT NULL,
    "entity_count_total"      integer                                   NOT NULL,
    "entity_count_delta"      integer                                   NOT NULL,
    "entity_count_average"    numeric                                   NOT NULL,
    "entity_count_min"        integer                                   NOT NULL,
    "entity_count_max"        integer                                   NOT NULL,
    "entity_count_deviation"  numeric                                   NOT NULL,
    "queue_backlog_total"     integer                                   NOT NULL,
    "queue_backlog_delta"     integer                                   NOT NULL,
    "queue_backlog_average"   numeric                                   NOT NULL,
    "queue_backlog_min"       integer                                   NOT NULL,
    "queue_backlog_max"       integer                                   NOT NULL,
    "queue_backlog_deviation" numeric                                   NOT NULL,
    "entity_counts_by_type"   jsonb                 DEFAULT '{}'::jsonb NOT NULL,
    CONSTRAINT "cdn_time_unique" UNIQUE ("time")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "management"."logs"
(
    "id"      bigint PRIMARY KEY      NOT NULL,
    "source"  text                    NOT NULL,
    "level"   text                    NOT NULL,
    "message" text                    NOT NULL,
    "meta"    jsonb,
    "time"    timestamp DEFAULT now() NOT NULL,
    CONSTRAINT "logs_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "management"."lateness"
(
    "time"                timestamp,
    "actual"              timestamp,
    "difference_ms"       integer,
    "title_changes"       jsonb DEFAULT '[]'::jsonb,
    "description_changes" jsonb DEFAULT '[]'::jsonb,
    "thumbnail_changes"   jsonb DEFAULT '[]'::jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."merch_messages_messages"
(
    "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "product_id" integer,
    "episode_id" varchar(12),
    "message"    text,
    "added"      timestamp        DEFAULT now(),
    "modified"   timestamp        DEFAULT now(),
    "color"      varchar(7)       DEFAULT '#000000',
    "author"     varchar(255),
    "start"      integer,
    "end"        integer,
    CONSTRAINT "merch_messages_messages_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."merch_messages_reply"
(
    "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "message_id" uuid,
    "message"    text,
    "added"      timestamp        DEFAULT now(),
    "start"      integer,
    "end"        integer,
    "reply_from" text             DEFAULT 'Uncertain',
    CONSTRAINT "merch_messages_reply_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."sponsors_spots"
(
    "id"               uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "message"          text,
    "url"              text,
    "added"            timestamp        DEFAULT now(),
    "modified"         timestamp        DEFAULT now(),
    "company"          uuid,
    "is_dennis"        boolean,
    "start"            integer,
    "end"              integer,
    "safe"             boolean,
    "episode_id"       varchar(12),
    "is_sponsor_debut" boolean          DEFAULT false             NOT NULL,
    CONSTRAINT "sponsors_spots_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics"
(
    "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "episode_id" varchar(12),
    "title"      text,
    "parent"     uuid,
    "start"      integer,
    "end"        integer,
    "created"    timestamp        DEFAULT now(),
    "modified"   timestamp        DEFAULT now(),
    CONSTRAINT "topics_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics_changelogs"
(
    "topic_id" uuid PRIMARY KEY NOT NULL,
    "started"  timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics_changes"
(
    "id"            uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "changelog_id"  uuid,
    "status"        integer          DEFAULT 0,
    "added"         timestamp        DEFAULT now(),
    "modified"      timestamp        DEFAULT now(),
    "author"        uuid,
    "title"         text,
    "parent"        uuid,
    "start"         integer,
    "end"           integer,
    "comment_count" bigint           DEFAULT 0                 NOT NULL,
    CONSTRAINT "topics_changes_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."topics_comments"
(
    "id"        uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "change_id" uuid,
    "message"   text,
    "added"     timestamp        DEFAULT now(),
    "author"    uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."users_accounts"
(
    "uuid"         uuid PRIMARY KEY NOT NULL,
    "display_name" text,
    "avatar"       uuid,
    "created"      timestamp DEFAULT now(),
    "last_seen"    timestamp,
    "permissions"  bigint    DEFAULT 0,
    CONSTRAINT "users_accounts_uuid_unique" UNIQUE ("uuid"),
    CONSTRAINT "users_accounts_display_name_unique" UNIQUE ("display_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."users_settings"
(
    "uuid"       uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "username"   text                                       NOT NULL,
    "email"      text                                       NOT NULL,
    "password"   text,
    "can_log_in" boolean          DEFAULT true,
    CONSTRAINT "users_settings_uuid_unique" UNIQUE ("uuid"),
    CONSTRAINT "users_settings_username_unique" UNIQUE ("username"),
    CONSTRAINT "users_settings_email_unique" UNIQUE ("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."users_awards"
(
    "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "uid"        uuid,
    "award"      text,
    "awarded_at" timestamp        DEFAULT now(),
    CONSTRAINT "users_awards_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."media"
(
    "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "blur"       text,
    "original"   jsonb,
    "additional" jsonb,
    "added"      timestamp        DEFAULT now(),
    "modified"   timestamp        DEFAULT now(),
    "kind"       text                                       NOT NULL,
    "bytes"      bigint           DEFAULT 0                 NOT NULL,
    CONSTRAINT "media_id_unique" UNIQUE ("id")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "aired_idx" ON "data"."episodes" ("aired");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "duration_idx" ON "data"."episodes" ("duration");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "data"."episodes" ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "content_warning_idx" ON "data"."episodes_markers" ("has_content_warning");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "management"."stats" ("time");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "management"."seedtube" ("time");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "management"."cdn" ("time");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "source_idx" ON "management"."logs" ("source");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "level_idx" ON "management"."logs" ("level");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "meta_idx" ON "management"."logs" ("meta");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "data"."users_settings" ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_idx" ON "data"."users_awards" ("uid");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "award_idx" ON "data"."users_awards" ("award");--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."cast_credits"
            ADD CONSTRAINT "cast_credits_cast_id_cast_members_id_fk" FOREIGN KEY ("cast_id") REFERENCES "data"."cast_members" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."cast_credits"
            ADD CONSTRAINT "cast_credits_position_id_cast_jobs_id_fk" FOREIGN KEY ("position_id") REFERENCES "data"."cast_jobs" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."cast_credits"
            ADD CONSTRAINT "cast_credits_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."cast_members"
            ADD CONSTRAINT "cast_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "data"."media" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."cast_jobs"
            ADD CONSTRAINT "cast_jobs_outlet_id_companies_id_fk" FOREIGN KEY ("outlet_id") REFERENCES "data"."companies" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."cast_jobs"
            ADD CONSTRAINT "cast_jobs_cast_id_cast_members_id_fk" FOREIGN KEY ("cast_id") REFERENCES "data"."cast_members" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."companies"
            ADD CONSTRAINT "companies_logo_media_id_fk" FOREIGN KEY ("logo") REFERENCES "data"."media" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."companies_mappings"
            ADD CONSTRAINT "companies_mappings_company_companies_id_fk" FOREIGN KEY ("company") REFERENCES "data"."companies" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."episodes"
            ADD CONSTRAINT "episodes_thumbnail_media_id_fk" FOREIGN KEY ("thumbnail") REFERENCES "data"."media" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."episodes_transcripts"
            ADD CONSTRAINT "episodes_transcripts_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."episodes_speakers"
            ADD CONSTRAINT "episodes_speakers_transcript_id_episodes_transcripts_id_fk" FOREIGN KEY ("transcript_id") REFERENCES "data"."episodes_transcripts" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."episodes_speakers"
            ADD CONSTRAINT "episodes_speakers_credit_id_cast_credits_id_fk" FOREIGN KEY ("credit_id") REFERENCES "data"."cast_credits" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."episodes_markers"
            ADD CONSTRAINT "episodes_markers_id_episodes_id_fk" FOREIGN KEY ("id") REFERENCES "data"."episodes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_product_linker"
            ADD CONSTRAINT "lttstore_product_linker_variant_id_lttstore_variants_id_fk" FOREIGN KEY ("variant_id") REFERENCES "data"."lttstore_variants" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_product_linker"
            ADD CONSTRAINT "lttstore_product_linker_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_product_images"
            ADD CONSTRAINT "lttstore_product_images_product_id_lttstore_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "data"."lttstore_products" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_product_images"
            ADD CONSTRAINT "lttstore_product_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "data"."media" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_product_images"
            ADD CONSTRAINT "lttstore_product_images_model_id_lttstore_models_id_fk" FOREIGN KEY ("model_id") REFERENCES "data"."lttstore_models" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."lttstore_variants"
            ADD CONSTRAINT "lttstore_variants_image_media_id_fk" FOREIGN KEY ("image") REFERENCES "data"."media" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."merch_messages_messages"
            ADD CONSTRAINT "merch_messages_messages_product_id_lttstore_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "data"."lttstore_products" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."merch_messages_messages"
            ADD CONSTRAINT "merch_messages_messages_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."merch_messages_reply"
            ADD CONSTRAINT "merch_messages_reply_message_id_merch_messages_messages_id_fk" FOREIGN KEY ("message_id") REFERENCES "data"."merch_messages_messages" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
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
DO
$$
    BEGIN
        ALTER TABLE "data"."sponsors_spots"
            ADD CONSTRAINT "sponsors_spots_episode_id_episodes_id_fk" FOREIGN KEY ("episode_id") REFERENCES "data"."episodes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."topics_changelogs"
            ADD CONSTRAINT "topics_changelogs_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "data"."topics" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."topics_changes"
            ADD CONSTRAINT "topics_changes_changelog_id_topics_changelogs_topic_id_fk" FOREIGN KEY ("changelog_id") REFERENCES "data"."topics_changelogs" ("topic_id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."topics_changes"
            ADD CONSTRAINT "topics_changes_author_users_accounts_uuid_fk" FOREIGN KEY ("author") REFERENCES "data"."users_accounts" ("uuid") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."topics_changes"
            ADD CONSTRAINT "topics_changes_parent_topics_changes_id_fk" FOREIGN KEY ("parent") REFERENCES "data"."topics_changes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."topics_comments"
            ADD CONSTRAINT "topics_comments_change_id_topics_changes_id_fk" FOREIGN KEY ("change_id") REFERENCES "data"."topics_changes" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."topics_comments"
            ADD CONSTRAINT "topics_comments_author_users_accounts_uuid_fk" FOREIGN KEY ("author") REFERENCES "data"."users_accounts" ("uuid") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."users_accounts"
            ADD CONSTRAINT "users_accounts_uuid_users_settings_uuid_fk" FOREIGN KEY ("uuid") REFERENCES "data"."users_settings" ("uuid") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
--> statement-breakpoint
DO
$$
    BEGIN
        ALTER TABLE "data"."users_accounts"
            ADD CONSTRAINT "users_accounts_avatar_media_id_fk" FOREIGN KEY ("avatar") REFERENCES "data"."media" ("id") ON DELETE no action ON UPDATE no action;
    EXCEPTION
        WHEN duplicate_object THEN null;
    END
$$;
