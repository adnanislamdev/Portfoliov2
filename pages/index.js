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
              Full Stack Developer | Sofware Engineer | IT Technician
            </p>
          </section>

          <section className="about">
            <div className="card">
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', fontSize: '2rem' }}>About Me</h2>
              <p style={{ marginBottom: '1.5rem', lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                I'm a Computer Science undergraduate at CUNY Lehman College, graduating in December 2025, with a passion for software engineering and technology solutions. Currently, I work as a Geek Squad Senior at Best Buy, where I lead a team of agents and help improve how we serve customers. I've been working in technical support for over three years, and I really enjoy helping people solve their technology problems. I work with all kinds of devices and operating systems—Windows, Mac, and Linux—fixing hardware and software issues, removing malware, and helping people recover their data when things go wrong.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                When I'm not at work, I love building projects that solve real problems. I created an Automated Parking Detector using Python and OpenCV that can automatically tell when parking spots are available or taken. I also built a full-stack website for a restaurant using Next.js and React, working closely with the client to make sure it looked great and worked smoothly on all devices. These projects taught me a lot about taking an idea and turning it into something people can actually use.
              </p>
              <p style={{ lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                I work with programming languages like Python, C++, Java, and JavaScript, and I'm comfortable with web development, hardware troubleshooting, and network setup. I'm always excited to learn new things and work with people who care about building good software and helping others. I believe the best solutions come from understanding the problem, working together, and never stopping to improve.
              </p>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

