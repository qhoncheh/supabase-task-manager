"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Header from "@/components/login-header/Header";
import Line from "@/components/line-header/line";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("User created successfully");
    window.location.href = "/dashboard";
  };
  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login success");
    window.location.href = "/dashboard";
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className=" relative w-full max-w-lg  rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xlshadow-2xl px-10 py-12 text-white">
        <Header />
        <div className="space-y-6">
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <Button
            onClick={login}
            className="
              w-full
              bg-white
              text-gray-900
              text-lg
              font-semibold
              hover:scale-[1.02]
            "
          >  Log In </Button>
          <Line />
          <Button onClick={signUp}
            className="
              w-full
              border
              border-white/20
              bg-white/5
              text-black
              font-bold
              hover:bg-white/10
            "
          > Create Account </Button>
        </div>
      </div>
    </main>
  );
}
