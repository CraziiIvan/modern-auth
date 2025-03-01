"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema, signupSchema } from "./schema";
import { auth } from "./auth";

export async function signup(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: signupSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await auth.api.signUpEmail({
    body: {
      name: submission.value.name,
      email: submission.value.email,
      password: submission.value.password,
    },
  });

  redirect("/");
}

export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await auth.api.signInEmail({
    body: {
      email: submission.value.email,
      password: submission.value.password,
    },
  });

  redirect("/");
}
