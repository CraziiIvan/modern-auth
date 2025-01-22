import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" w-full max-w-[280px] flex flex-col items-center gap-y-6">
      <h1 className="font-medium text-xl">Welcome from home page</h1>
      <Button variant="outline">Logout</Button>
    </main>
  );
}
