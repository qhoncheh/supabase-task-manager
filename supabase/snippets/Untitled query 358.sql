create policy "Users can update own tasks"
on tasks
for update
using (auth.uid() = user_id);