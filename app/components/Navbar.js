'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
  { id: 4, title: 'About', path: '/about' },
];

const Navbar = () => {
  const pathname = usePathname();
  const logg = pathname.startsWith('/about')

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={60} height={60} alt="webDev" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <span className={pathname === path ? styles.active : undefined}>{title}</span>
          </Link>
        ))}
        {logg && <Link href="/about/key" className={pathname === '/about/key' ? styles.active : undefined}>Key Link</Link>}
        {logg && <Link href="/about/use" className={pathname === '/about/use' ? styles.active : undefined}>Use Link</Link>}
      </div>
    </nav>
  );
};

export default Navbar;