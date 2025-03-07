"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema, signupSchema } from "./schema";
import { auth } from "./auth";
import { headers } from "next/headers";
import { APIError } from "better-auth/api";

export async function signup(prevState: unknown, formData: FormData) {
  // const submission = parseWithZod(formData, {
  //   schema: signupSchema,
  // });

  // if (submission.status !== "success") {
  //   return submission.reply();
  // }

  try {
    await auth.api.signUpEmail({
      body: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    });

    return {
      success: true,
      message: "Account created successfully",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}

export async function login(prevState: unknown, formData: FormData) {
  // const submission = parseWithZod(formData, {
  //   schema: loginSchema,
  // });

  // if (submission.status !== "success") {
  //   return submission.reply();
  // }

  try {
    await auth.api.signInEmail({
      body: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    });

    return {
      success: true,
      message: "Logged in successfully",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}

export async function logout() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  redirect("/");
}
