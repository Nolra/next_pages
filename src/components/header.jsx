import Link from "next/link";

const Header = () => {
  return (
      <header>
        <ul>
          <li><Link href="/">home</Link></li>
          <li><Link href="/about-us">about us</Link></li>
          <li><Link href="/posts">posts</Link></li>
        </ul>
      </header>
  )
}

export default Header;
