'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const logg = pathname.startsWith('/about')

  return (
    <header>
      <strong>Next JS</strong>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {logg && <Link href="/about/key">Key Link</Link>}
        {logg && <Link href="/about/use">Use Link</Link>}
      </nav>
    </header>
  )
}

export default Header
