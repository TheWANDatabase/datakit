ALTER TABLE "management"."cdn" ADD COLUMN "entity_size_min" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "entity_size_max" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "entity_size_deviation" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "entity_count_min" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "entity_count_max" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "entity_count_deviation" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "queue_backlog_min" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "queue_backlog_max" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."cdn" ADD COLUMN "queue_backlog_deviation" numeric NOT NULL;