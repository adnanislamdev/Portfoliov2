import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <div className="container">
          <Link href="/" className="nav-logo">
            My Portfolio
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Personal Portfolio Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

