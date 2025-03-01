"use client";

import { useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CircleAlert, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { RiGoogleFill } from "@remixicon/react";
import { login } from "@/lib/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

export const signInWithGoogle = async (e: React.FormEvent) => {
  e.preventDefault();

  await authClient.signIn.social({
    provider: "google",
  });
};

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [lastResult, action, isPending] = useActionState(login, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
      className=" space-y-4 w-full"
    >
      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={signInWithGoogle}>
          <RiGoogleFill
            className="me-3 text-[#DB4437] dark:text-white/60"
            size={16}
            aria-hidden="true"
          />
          Login with Google
        </Button>
      </div>
      <div className=" flex items-center gap-x-2 text-sm text-muted-foreground pt-2">
        <div className=" h-px grow bg-input" />
        Or continue with
        <div className=" h-px grow bg-input" />
      </div>
      {form.errors && (
        <div className="rounded-lg border border-border px-4 py-3">
          <p className="text-sm">
            <CircleAlert
              className="-mt-0.5 me-3 inline-flex text-red-500"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            {form.errors}
          </p>
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <Input
          id="login-email"
          className={cn({
            "border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
              fields.email.errors,
          })}
          placeholder="Email"
          type="email"
          key={fields.email.key}
          name={fields.email.name}
          defaultValue={fields.email.initialValue}
          required
        />
        {fields.email.errors && (
          <p
            className="mt-2 text-xs text-destructive"
            role="alert"
            aria-live="polite"
          >
            {fields.email.errors}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-password">Password</Label>
        <div className="relative">
          <Input
            id="login-password"
            className={cn("pe-9", {
              "border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
                fields.password.errors,
            })}
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            key={fields.password.key}
            name={fields.password.name}
            defaultValue={fields.password.initialValue}
            required
          />
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Eye size={16} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
        {fields.password.errors && (
          <p
            className="mt-2 text-xs text-destructive"
            role="alert"
            aria-live="polite"
          >
            {fields.password.errors}
          </p>
        )}
      </div>
      <div className=" pt-4">
        <Button className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <LoaderCircle
                className="-ms-1 me-2 animate-spin"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Submiting
            </>
          ) : (
            "Login Account"
          )}
        </Button>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <a href="/signup" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
