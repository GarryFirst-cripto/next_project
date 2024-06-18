'use client'

import { useEffect, useState } from "react";
import delay from "../components/delay";
import Loading from "../loading";

async function fetchData() {
  await delay(500)
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const result = await res.json();
  return result;
}

export default function Home() {
  const [ comments, setComments ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  
  async function getCommentsList() {
    const comments = await fetchData();
    setComments(comments);
    setLoading(false)
  }

  useEffect(() => {
    getCommentsList();
  }, [])

  if (loading) return <Loading />

  return (
    <div>
      <h1>Comments Page</h1>
      {comments.map(item => {
        return (
          <div key={item.id} className="comment">
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
  )
}