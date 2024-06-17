'use client'

import { FC } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface Params {
  data: string,
  revalidate: (param: string) => void;
}

const HomePage: FC<Params> = ({ data, revalidate }) => {
  const router = useRouter();

  const handleRouterClick = () => {
    router.refresh();
  }

  const callback = async () => {
    revalidate('path');
  }
  
  const callbackTag = async () => {
    revalidate('tag');
  }

  const prefetchHistoryPage = () => {
    router.prefetch('/history');
    console.log('Prefetch')
  };

  return (
    <main>
      <h2 onMouseEnter={prefetchHistoryPage}><strong> Main page </strong></h2>
      <div>{data}</div>
      <Link className='link' href="/history" prefetch={false}>History</Link>
      <br />
      <button onClick={callback}>Revalidate Page</button>
      <br />
      <button onClick={callbackTag}>Revalidate Tag</button>
      <br />
      <button onClick={handleRouterClick}>Router Refresh</button>
    </main>
  );
}

export default HomePage
