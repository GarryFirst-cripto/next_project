'use client';

import { useState, useEffect } from 'react';
import { useStore } from '../../provider/context';
import Post from '@/app/components/Postinfo';

const Postpage = () => {
  const { state } = useStore();
  const [value, setValue] = useState(null)
  
  useEffect(() => {
    setValue(state.post); 
  }, [state])
  
  return (
    <>
      {value && <Post post={value} />}
    </>
  )
}

export default Postpage
