"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Task } from "@/types/task";
import StatCard from "@/components/ui/StatCards";
import TaskList from "@/components/task/TaskLists";
import DashboardHeader from "./header/Header";
import DashboardStats from "./DashboardStats/DashboardStats";
import AddTaskForm from "./AddTaskForm/AddTaskForm";

export default function Dashboard() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const loadTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      return;
    }

    setTasks(data || []);
  };

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/");
      return;
    }

    await loadTasks();
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("User not found");
      return;
    }

    const { error } = await supabase.from("tasks").insert({
      title,
      user_id: user.id,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setTitle("");
    await loadTasks();
  };

  const deleteTask = async (id: string) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    await loadTasks();
  };

  const toggleTask = async (id: string, currentValue: boolean) => {
    const { error } = await supabase
      .from("tasks")
      .update({
        is_done: !currentValue,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    await loadTasks();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen p-8"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto">
        <div
          className="
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            rounded-3xl
            p-8
            shadow-2xl
          "
        >
          <DashboardHeader onLogout={logout} />
          <DashboardStats tasks={tasks} />
          <AddTaskForm title={title} setTitle={setTitle} onAdd={addTask} />

          {tasks.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">No tasks yet ✨</p>
            </div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          )}
        </div>
      </div>
    </main>
  );
}
