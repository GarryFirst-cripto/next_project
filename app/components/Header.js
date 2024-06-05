import Link from "next/link"

const Header = () => {
  return (
    <header>
      <strong>Next JS</strong>
      <nav>
        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
