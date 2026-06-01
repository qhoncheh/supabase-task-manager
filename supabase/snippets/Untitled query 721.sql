create policy "Users can view own tasks"
on tasks
for select
using (auth.uid() = user_id);