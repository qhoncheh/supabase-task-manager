select
  policyname,
  cmd
from pg_policies
where tablename = 'tasks';