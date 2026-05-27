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
            <h3 style={{ color: 'var(--primary-white)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                <a 
                  href="mailto:adnan.islam28@gmail.com" 
                  style={{ 
                    color: 'var(--primary-white)',
                    textDecoration: 'none',
                    fontSize: '1rem'
                  }}
                >
                  adnan.islam28@gmail.com
                </a>
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--primary-white)' }}>
                (929) 842-4556
              </div>
              <a
                href="/Adnan-Islam-Resume.pdf"
                download
                style={{
                  backgroundColor: 'white',
                  color: 'var(--primary-blue)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  display: 'inline-block',
                }}
              >
                Download Resume
              </a>
              <a 
                href="https://linkedin.com/in/a-dnanislam/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  backgroundColor: 'white',
                  color: 'var(--primary-blue)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/adnanislamdev" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  backgroundColor: 'white',
                  color: 'var(--primary-blue)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

