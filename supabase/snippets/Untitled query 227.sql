create policy "Users can insert own tasks"
on tasks
for insert
with check (auth.uid() = user_id);