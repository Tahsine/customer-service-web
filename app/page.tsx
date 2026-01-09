import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";


export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Customer</h1>
        <Button size="sm">Get Started</Button>
        <ModeToggle />
      </div>
    </div>
  )
}