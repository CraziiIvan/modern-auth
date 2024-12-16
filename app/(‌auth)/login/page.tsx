import LoginForm from "@/components/form/login-form";

export default function Login() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-[280px] flex flex-col items-center space-y-6">
        <div className=" flex flex-col items-center gap-y-1">
            <h2 className="text-xl font-semibold">Login</h2>
            <p className=" text-muted-foreground text-center">Login to your account</p>
        </div>
        <LoginForm/>
      </main>
    </div>
  );
}
