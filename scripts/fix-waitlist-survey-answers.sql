-- Run this in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/ybbmqnodbbrkexkfqlkx/sql
--
-- 1. Fix survey_answers column type (run first):

ALTER TABLE waitlist_entries
ALTER COLUMN survey_answers TYPE jsonb
USING CASE
  WHEN survey_answers IS NULL THEN NULL
  WHEN survey_answers = '' THEN NULL
  ELSE survey_answers::jsonb
END;

-- 2. If drizzle-kit push still fails, run this to inspect column types and share the result:
--
-- SELECT column_name, data_type
-- FROM information_schema.columns
-- WHERE table_name = 'waitlist_entries'
-- ORDER BY ordinal_position;
