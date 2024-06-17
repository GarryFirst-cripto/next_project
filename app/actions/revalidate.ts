'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

// Определение серверного действия
export async function doRevalidate(param: string) {
  switch (param) {
    case 'path':
      revalidatePath('/', 'page');
      return;
    case 'tag':
      revalidateTag('/');
      return;
  }
  
}