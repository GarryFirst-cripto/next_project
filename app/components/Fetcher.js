"use client"

import { useEffect } from 'react';
import { fetchWithAuth } from '../utilities/fetchWithAuth';

const Fetcher = () => {

  useEffect(() => {
console.log('XXXXXXXXXXX')    
    window.fetch = fetchWithAuth;
  }, []);

  return <></>
}

export default Fetcher
