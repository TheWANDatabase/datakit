ALTER TABLE "data"."lttstore_products" ADD COLUMN "will_restock" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_products" ADD COLUMN "preorder" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_variants" ADD COLUMN "is_restockable" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_variants" ADD COLUMN "is_preorder" boolean DEFAULT false NOT NULL;