'use client';

// import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    }
    fetchData();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const id = Number(event.currentTarget.dataset.key);
    const current = posts.filter(item => item.id === id);
    if (current[0]) {
      // dispatch({ type: 'SET_POST', payload: current[0] });
      router.push(`/post/${id}`)
    }
  };

  return (
    <div>
      <h1>Main Page</h1>
      { posts.map(item => {
        const data = JSON.stringify(item);
        return (
          <div key={item.id} className="post">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            {/* <Link href={`/post/${item.id}?data=${data}`}>Detail</Link> */}
            <a data-key={item.id} href="#" onClick={handleClick}>Details</a>
          </div>
        )
      })}
    </div>  
  )
}
