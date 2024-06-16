import HomePage from "./components/HomePage";
import { promises as fs } from "fs";
import { doRevalidate } from "./actions/revalidate";

// export const dynamic = 'force-dynamic'
export const revalidate = 10;

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data.txt", "utf8");
  console.log('HOME ... PAGE', file)   
  return (
    <HomePage data={file} revalidate={doRevalidate} />
  );
}
