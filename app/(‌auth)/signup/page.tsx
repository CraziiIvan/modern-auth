import SignupForm from "@/components/form/SignupForm";

export default function Login() {
  return (
    <main className="w-full max-w-[280px] flex flex-col items-center gap-y-6">
      <div className=" flex flex-col items-center gap-y-1">
        <h2 className="text-xl font-semibold">Sign Up</h2>
        <p className=" text-muted-foreground">Create an account</p>
      </div>
      <SignupForm />
    </main>
  );
}
