ALTER TABLE "management"."stats" ALTER COLUMN "ltt_variants_average_weight" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "management"."stats" ALTER COLUMN "ltt_variants_average_weight" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_models_indexed" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."stats" ADD COLUMN "ltt_models_average_height_metric" integer DEFAULT 0 NOT NULL;