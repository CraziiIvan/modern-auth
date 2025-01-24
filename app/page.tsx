"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  async function logoutHandle() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }

  return (
    <main className=" w-full max-w-[280px] flex flex-col items-center gap-y-6">
      <h1 className="font-medium text-xl">Welcome from home page</h1>
      <Button variant="outline" onClick={logoutHandle}>
        Logout
      </Button>
    </main>
  );
}
