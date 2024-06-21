'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "../styles/404.module.css";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper} >
      <h1>404 - Page Not Found</h1>
      <h2>The page you are looking for does not exist.</h2>
    </div>
  );
};

export default Error;
