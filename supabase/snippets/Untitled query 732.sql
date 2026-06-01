select relname, relrowsecurity
from pg_class
where relname = 'tasks';