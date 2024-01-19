import Link from "next/link";

const Header = () => {
  return (
      <header>
        <ul>
          <li><Link href="/">home</Link></li>
          <li><a href="/about-us">about us</a></li>
          <li><a href="/posts">posts</a></li>
        </ul>
      </header>
  )
}

export default Header;
