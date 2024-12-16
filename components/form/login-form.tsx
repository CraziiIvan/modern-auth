"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <form className=" space-y-4 w-full">
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
        <Label htmlFor="input-06">Email</Label>
        <Input
          id="input-06"
          className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
          placeholder="Email"
          type="email"
          defaultValue="invalid@email.com"
          required
        />
        <p
          className="mt-2 text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          Email is invalid
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="input-23">Password</Label>
        <div className="relative">
          <Input
            id="input-23"
            className="pe-9"
            placeholder="Password"
            type={isVisible ? "text" : "password"}
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
      </div>
      <div className=" pt-4">
        <Button className="w-full">Login Account</Button>
      </div>
    </form>
  );
}
