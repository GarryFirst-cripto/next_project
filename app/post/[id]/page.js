'use client';

import { useState, useEffect } from 'react';
import Post from '@/app/components/Postinfo';

const Postpage = () => {
  const [value, setValue] = useState(null)
  
  // useEffect(() => {
  //   setValue(state.post); 
  // }, [state])
  
  return (
    <>
      {value && <Post post={value} />}
    </>
  )
}

export default Postpage
