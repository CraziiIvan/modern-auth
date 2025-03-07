"use client";

import { Button } from "@/components/ui/button";
import { CustomSonner } from "@/components/ui/custom-sonner";
import { logout } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();

  async function logoutHandle() {
    const result = await logout();

    if (result?.success) {
      toast.custom((t) => (
        <CustomSonner type="success" message={result.message} t={t} />
      ));
      router.push("/login");
    } else if (!result?.success) {
      toast.custom((t) => (
        <CustomSonner type="error" message={result.message} t={t} />
      ));
    }
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
