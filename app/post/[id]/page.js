
const Post = ({ params, searchParams }) => {
  const query = JSON.parse(searchParams.data)
  return (
    <div>
      Post {params.id} : 
      <p>User Id : {query.userId}</p>
      <p><strong>{query.title}</strong></p>
      <p>{query.body}</p>
    </div>
  )
}

export default Post
