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
                I'm a Computer Science undergraduate at CUNY Lehman College, graduating in May 2026 with a 3.95/4.0 GPA, and I have a passion for software engineering and technology solutions. Currently, I work as a Geek Squad Senior at Best Buy, where I lead a team of five agents, mentor them, and drive workflow improvements that have cut service turnaround times by 30%. I've been working in technical support since April 2021—over five years now—and I genuinely enjoy helping people solve their technology problems. I work with all kinds of devices and operating systems—Windows, macOS, and Linux—fixing hardware and software issues, removing malware, and helping people recover their data when things go wrong.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                When I'm not at work, I love building projects that solve real problems. I created an Automated Parking Detector using Python and OpenCV that automatically detects open and occupied parking spots, deployed as a local web app driven by a Raspberry Pi camera feed, with a real-time threat detection module that reduced false positives by 30%. I also built a full-stack restaurant website (adnanislamdev.com) using Next.js and React, leveraging dynamic routing and server-side rendering to deliver a fast, responsive experience across devices. These projects taught me a lot about taking an idea and turning it into something people can actually use.
              </p>
              <p style={{ lineHeight: '2', fontSize: '1.3rem', color: 'var(--text-dark)' }}>
                My toolkit includes Python, C++, Java, JavaScript (Next.js), HTML, and Bash scripting, along with tools like Git, React, Vite, Cloudflare, and VS Code. I'm comfortable across web development, hardware diagnostics, system troubleshooting, network configuration, and security maintenance. I'm always excited to learn new things and work with people who care about building good software and helping others. I believe the best solutions come from understanding the problem, working together, and never stopping to improve.
              </p>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

