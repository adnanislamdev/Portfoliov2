import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <div className="container">
          <Link href="/" className="nav-logo">
            Adnan Islam's Portfolio
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
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
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong> adnanislamdev@gmail.com
              </p>
              <p style={{ margin: 0 }}>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://linkedin.com/in/a-dnanislam/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)' }}>
                  LinkedIn
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/adnanislamdev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)' }}>
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

