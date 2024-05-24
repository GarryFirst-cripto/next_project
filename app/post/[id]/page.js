import Post from '@/app/components/post';

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.id);
  return {
    title: post.title,
    description: post.body
  }
}

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());

  return posts.map(post => ({
    id: post.id.toString(),
  }));
}

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
