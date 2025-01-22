'use server';

import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { authSchema } from './schema';

export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: authSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  redirect('/');
}