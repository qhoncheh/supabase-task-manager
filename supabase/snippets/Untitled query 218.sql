create policy "Users can delete own tasks"
on tasks
for delete
using (auth.uid() = user_id);