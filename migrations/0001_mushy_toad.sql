CREATE TABLE IF NOT EXISTS "management"."stats" (
	"time" timestamp PRIMARY KEY DEFAULT now() NOT NULL,
	"cast_count" integer NOT NULL,
	"episode_count" integer NOT NULL,
	"sponsor_count" integer NOT NULL,
	"sponsor_spot_count" integer NOT NULL,
	"sponsor_spot_duration" integer NOT NULL,
	"ltt_products_indexed" integer NOT NULL,
	"topic_count" integer NOT NULL,
	"topic_contributor_count" integer NOT NULL,
	"users_count" integer NOT NULL,
	"entity_size" bigint DEFAULT 0 NOT NULL,
	"entity_size_delta" bigint DEFAULT 0 NOT NULL,
	"entity_count" bigint DEFAULT 0 NOT NULL,
	"entity_count_delta" bigint DEFAULT 0 NOT NULL,
	"queue_backlog" bigint DEFAULT 0 NOT NULL,
	"queue_backlog_delta" bigint DEFAULT 0 NOT NULL,
	"entity_counts_by_type" jsonb DEFAULT '{}'::jsonb NOT NULL,
	CONSTRAINT "stats_time_unique" UNIQUE("time")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "management"."seedtube" (
	"time" timestamp PRIMARY KEY DEFAULT now() NOT NULL,
	"current_imminence" timestamp NOT NULL,
	"seconds_since_last_update" timestamp NOT NULL,
	CONSTRAINT "seedtube_time_unique" UNIQUE("time")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "management"."stats" ("time");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "management"."seedtube" ("time");