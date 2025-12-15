import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Home - Personal Website</title>
        <meta name="description" content="Welcome to my personal website" />
      </Head>

      <div className="page-container">
        <div className="container">
          <section className="hero">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img
                src="/profile-photo.png"
                alt="Adnan Islam"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid var(--primary-blue)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
            <h1 className="page-title">Adnan Islam's Portfolio</h1>
            <p style={{ fontSize: '1.2rem', textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem' }}>
              Full Stack Developer | Problem Solver | Creative Thinker
            </p>
          </section>

          <section className="about">
            <div className="card">
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>About Me</h2>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                I'm a Computer Science undergraduate at CUNY Lehman College, graduating in December 2025, with a strong interest in software engineering and problem-solving through technology. I enjoy building practical, user-focused solutions and have experience working across programming, technical support, and customer-facing environments.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                Currently, I work as a Geek Squad Consultation Agent at Best Buy, where I troubleshoot hardware and software issues, communicate technical concepts clearly to non-technical users, and provide reliable, detail-oriented support under pressure. I'm also Apple Certified, which has strengthened my understanding of device ecosystems and repair workflows.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                Academically and personally, I've worked on projects using Java, Python, and C++, including GUI applications, data structures, and computer vision tools. I'm especially interested in software development that combines clean design, efficiency, and real-world impact. Beyond tech, I've served as Treasurer of the Muslim Student Association, organizing events and managing funds—an experience that helped develop my leadership, collaboration, and organizational skills.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                I'm always looking to grow as a developer, learn new technologies, and apply my skills in environments where curiosity, teamwork, and continuous improvement are valued.
              </p>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

