import LoginForm from "@/components/form/LoginForm";

export default function Login() {
  return (
    <main className="w-full max-w-[280px] flex flex-col items-center gap-y-6">
      <div className=" flex flex-col items-center gap-y-1">
        <h2 className="text-xl font-semibold">Login</h2>
        <p className=" text-muted-foreground text-center">
          Login to your account
        </p>
      </div>
      <LoginForm />
    </main>
  );
}
