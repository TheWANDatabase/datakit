CREATE TABLE IF NOT EXISTS "management"."lateness"
(
    "time"                timestamp,
    "scheduled"           timestamp,
    "actual"              timestamp,
    "difference_ms"       integer,
    "title_changes"       jsonb DEFAULT '[]'::jsonb,
    "description_changes" jsonb DEFAULT '[]'::jsonb,
    "thumbnail_changes"   jsonb DEFAULT '[]'::jsonb
);
