'use client'

import { useEffect, useState, useTransition, useDeferredValue } from "react";
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
  // const [isPending, startTransition] = useTransition();
  
  const [filteredComments, setFilteredComments] = useState(comments)
  const values = useDeferredValue(filteredComments);  
  function handleSearch(event) {
    setSearch(event.target.value);
    // startTransition(() => {
    //   setFilteredComments(searchFilter(comments, search));
    // })
    setFilteredComments(searchFilter(comments, search));
  }

  async function getCommentsList() {
    const comments = await fetchData();
    setComments(comments);
    setFilteredComments(searchFilter(comments, search))
    // setLoading(false)
    setTimeout(()=>setLoading(false), 100);
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
        {/* {isPending && <h2>RR</h2>} */}
      </div>
      {/* {filteredComments.map(item => { */}
      {values.map(item => {
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