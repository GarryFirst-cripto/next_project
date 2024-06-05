'use client';

import { useEffect } from 'react';
import { useMyContext } from '../../provider/context';
import { useRouter } from 'next/navigation';
import Post from '@/app/components/Postinfo';

const Postpage = ({ params }) => {
  const { value, setValue } = useMyContext();
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('pageData');
    if (data) setValue(JSON.parse(data))
  }, []);
  useEffect(() => {
    if (value) localStorage.setItem('pageData', JSON.stringify(value));
  }, [value]);

  return (
    <>
      {value && <Post post={value} />}
    </>
  )
}

export default Postpage
