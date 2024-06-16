'use server';

import { revalidatePath } from 'next/cache';

// Определение серверного действия
export async function doRevalidate() {
  revalidatePath('/', 'page');
}