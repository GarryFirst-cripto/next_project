import Link from "next/link";

const post = ({ post }) => {
  return (
    <div className="post">
      Post {post.id} :
      <p>User Id : {post.userId}</p>
      <p><strong>{post.title}</strong></p>
      <p>{post.body}</p>
      <br />
      <Link href='/' style={{ color: 'darkgreen' }}>return to main</Link>
    </div>
  )
}

export default post
