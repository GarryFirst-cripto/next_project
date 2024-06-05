'use client';

import { useMyContext } from '../../provider/context';
import { useRouter } from 'next/navigation';
import Post from '@/app/components/Postinfo';

const Postpage = ({ params }) => {
  const { value } = useMyContext();
  const router = useRouter();

  if (value === null) {
    router.push('/');
    return (<></>)
  }

  return (
    <Post post={value} />
  )
}

export default Postpage
