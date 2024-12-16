"use client";

import { useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { RiFacebookFill, RiGoogleFill } from "@remixicon/react";
import { login } from "@/lib/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [loading, setLoading] = useState(false);

  const [lastResult, action] = useActionState(login, undefined);

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
        <Button variant="outline">
          <RiGoogleFill
            className="me-3 text-[#DB4437] dark:text-white/60"
            size={16}
            aria-hidden="true"
          />
          Login with Google
        </Button>
        <Button variant="outline">
          <RiFacebookFill
            className="me-3 text-[#1877f2] dark:text-white/60"
            size={16}
            aria-hidden="true"
          />
          Login with Facebook
        </Button>
      </div>
      <div className=" flex items-center gap-x-2 text-sm text-muted-foreground pt-2">
        <div className=" h-px grow bg-input" />
        Or continue with
        <div className=" h-px grow bg-input" />
      </div>
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
          required
        />
        <p
          className="mt-2 text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          {fields.email.errors}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="login-password">Password</Label>
        <div className="relative">
          <Input
            id="login-password"
            className={cn("pe-9", {
              "border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20":
                fields.email.errors,
            })}
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            key={fields.password.key}
            name={fields.password.name}
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
        <p
          className="mt-2 text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          {fields.password.errors}
        </p>
      </div>
      <div className=" pt-4">
        <Button className="w-full" disabled={loading}>
          {loading ? (
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
        Don&apos;t have an account?{" "}
        <a href="/signup" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
