CREATE TABLE IF NOT EXISTS "optimus_metrics" (
	"time" timestamp PRIMARY KEY NOT NULL,
	"entity_size" bigint DEFAULT 0 NOT NULL,
	"entity_size_delta" bigint DEFAULT 0 NOT NULL,
	"entity_count" bigint DEFAULT 0 NOT NULL,
	"entity_count_delta" bigint DEFAULT 0 NOT NULL,
	"queue_backlog" bigint DEFAULT 0 NOT NULL,
	"queue_backlog_delta" bigint DEFAULT 0 NOT NULL,
	CONSTRAINT "optimus_metrics_time_unique" UNIQUE("time")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_idx" ON "optimus_metrics" ("time");