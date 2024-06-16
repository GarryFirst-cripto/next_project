import Link from "next/link";
// import getHistory from "../actions/getHistory";

// export const dynamic = 'force-dynamic';
export const revalidate = 10;

async function getHistory() {
  const data = await fetch("http://127.0.0.1:8000/history");
  return data.json();
}

export async function generateMetadata() {
  const history = await getHistory();
  return {
    title: history.data
  };
}

export default async function History() {
  const history = await getHistory()
  console.log('HISTORY PAGE', history.data) 
  return (
    <main>
      <h1><strong> History page </strong></h1>
      <div>History Data: <span>{history.data}</span></div>
      <Link className='link' href="/" prefetch={true} >Home</Link>
    </main>
  );
}
