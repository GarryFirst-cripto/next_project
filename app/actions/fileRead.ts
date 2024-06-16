'use server'

import { promises as fs } from "fs";

export default async function file() {
  const data = await fs.readFile(process.cwd() + "/data.txt", "utf8");
  return data;
}