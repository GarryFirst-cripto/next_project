'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import styles from "../../styles/header.module.css";

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <strong>Next JS</strong>
      <nav>
        <Link href="/" className={pathname === '/' ? styles.active : undefined}>Home</Link>
        <Link href="/comments" className={pathname === '/comments' ? styles.active : undefined}>Comments</Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : undefined}>About</Link>
      </nav>
    </header>
  )
}

export default Header
