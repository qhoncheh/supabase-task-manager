create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  is_done boolean default false,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

alter table public.tasks enable row level security;

create policy "Users can view own tasks"
on public.tasks
for select
using (
  auth.uid() = user_id
);

create policy "Users can insert own tasks"
on public.tasks
for insert
with check (
  auth.uid() = user_id
);

create policy "Users can update own tasks"
on public.tasks
for update
using (
  auth.uid() = user_id
);

create policy "Users can delete own tasks"
on public.tasks
for delete
using (
  auth.uid() = user_id
);