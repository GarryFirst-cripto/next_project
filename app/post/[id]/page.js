import Post from '@/app/components/post';

async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await res.json();
  return result;
}

const Postpage = async ({ params }) => {
  const post = await fetchData(params.id);

  return (
    <Post post={post} />
  )
}

export default Postpage
