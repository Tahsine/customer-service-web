"use client";

import {useMutation, useQuery} from "convex/react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";


export default function HomePage() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Customer</h1>
        <Button size="sm">Get Started</Button>
        <ModeToggle />
        <Button onClick={() => addUser()}>Add</Button>
        <div className="mt-8 max-w-sm w-full mx-auto">
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </div>
  )
}