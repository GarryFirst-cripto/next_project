import Link from "next/link";
import getCoocies from './components/cookies';
import delay from "./components/delay";

async function fetchData() {
  await delay(500)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Home() {

  const posts = await fetchData();
  // getCoocies();

  return (
    <div>
      <h1>Main Page</h1>
      {posts.map(item => {
        const data = JSON.stringify(item);
        return (
          <div key={item.id} className="post">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <Link href={`/post/${item.id}`}>Detail</Link>
          </div>
        )
      })}
    </div>
  )
}
