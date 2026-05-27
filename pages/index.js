import Head from 'next/head';
import Layout from '../components/Layout';

const experience = [
  {
    title: 'Geek Squad Senior',
    company: 'Best Buy LLC · New York, NY',
    period: 'Aug 2024 – Present',
    highlights: [
      'Lead a team of 5 Geek Squad Agents with mentorship, training, and performance guidance.',
      'Manage high-priority escalations and workflow optimizations, cutting turnaround times by 30%.',
      'Deliver training on cybersecurity, malware removal, and data recovery.',
      'Improved repair and upgrade processes for a 15% gain in service efficiency.',
    ],
  },
  {
    title: 'Geek Squad Agent',
    company: 'Best Buy LLC · New York, NY',
    period: 'Apr 2021 – Aug 2024',
    highlights: [
      'Resolved complex hardware and software issues across Windows, macOS, and Linux.',
      'Maintained 95% customer satisfaction through repairs, upgrades, and optimizations.',
      'Performed malware removal, security maintenance, and data recovery.',
    ],
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Adnan Islam | Full Stack Developer</title>
        <meta
          name="description"
          content="Full stack developer and Geek Squad Senior. B.S. Computer Science from CUNY Lehman College."
        />
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
            <h1 className="page-title">Adnan Islam</h1>
            <p style={{ fontSize: '1.2rem', textAlign: 'center', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
              Full Stack Developer · Software Engineer · IT Technician
            </p>
            <p style={{ fontSize: '1rem', textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem' }}>
              B.S. Computer Science · CUNY Lehman College · Graduated May 2026 · GPA 3.95
            </p>
          </section>

          <section className="about">
            <div className="card">
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', fontSize: '2rem' }}>About Me</h2>
              <p style={{ marginBottom: '1.5rem', lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                I earned my Bachelor of Computer Science from CUNY Lehman College (graduated May 2026, GPA 3.95)
                and work as a Geek Squad Senior at Best Buy, where I lead a team of five agents and drive process
                improvements across repairs, security, and customer support.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                I build full stack applications with Next.js and React, and personal projects like an Automated
                Parking Detector using Python, OpenCV, and a Raspberry Pi camera feed—with a local web app for live
                monitoring and queue management.
              </p>
              <p style={{ lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                I work with Python, C++, Java, JavaScript, and Next.js, and I&apos;m comfortable with hardware
                diagnostics, network configuration, and security maintenance across Windows, macOS, and Linux.
              </p>
            </div>
          </section>

          <section className="experience" style={{ marginTop: '2rem' }}>
            <h2
              style={{
                color: 'var(--primary-blue)',
                marginBottom: '1.5rem',
                fontSize: '2rem',
                textAlign: 'center',
              }}
            >
              Experience
            </h2>
            {experience.map((role) => (
              <div key={role.title} className="card" style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <h3 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>{role.title}</h3>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>{role.company}</p>
                  </div>
                  <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{role.period}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '1.9', color: 'var(--text-dark)' }}>
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}
