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

function searchFilter(entities, search) {
  return entities.filter(item => item.name.concat(item.body).includes(search));
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');
  
  function handleSearch(event) {
    setSearch(event.target.value)
  }

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
      <div className="comment-header">
        <h1>Comments Page</h1>
        <input type="text" onChange={handleSearch}/>
      </div>
      {searchFilter(comments, search).map(item => {
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