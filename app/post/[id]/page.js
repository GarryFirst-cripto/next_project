import Post from '@/app/components/post';

const Postpage = ({ params, searchParams }) => {
  const query = JSON.parse(searchParams.data)
  return (
    <Post post={query} />
  )
}

export default Postpage
