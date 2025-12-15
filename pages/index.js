import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    try {
      const response = await fetch('/api/experience');
      const data = await response.json();
      setExperience(data);
    } catch (error) {
      console.error('Error fetching experience:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Home - Personal Website</title>
        <meta name="description" content="Welcome to my personal website" />
      </Head>

      <div className="page-container">
        <div className="container">
          <section className="hero">
            <h1 className="page-title">Welcome to My Portfolio</h1>
            <p style={{ fontSize: '1.2rem', textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem' }}>
              Full Stack Developer | Problem Solver | Creative Thinker
            </p>
          </section>

          <section className="about">
            <div className="card">
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>About Me</h2>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                I'm a passionate full-stack developer with experience building modern web applications
                using cutting-edge technologies. I love solving complex problems and creating
                user-friendly experiences.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                This website showcases my projects, experience, and provides a way to get in touch.
                Feel free to explore and reach out if you'd like to collaborate!
              </p>
            </div>
          </section>

          {!loading && experience.length > 0 && (
            <section className="experience-preview" style={{ marginTop: '3rem' }}>
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
                Recent Experience
              </h2>
              <div className="grid grid-2">
                {experience.slice(0, 2).map((exp) => (
                  <div key={exp.id} className="card">
                    <h3 style={{ color: 'var(--dark-blue)', marginBottom: '0.5rem' }}>
                      {exp.title}
                    </h3>
                    {exp.company && (
                      <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                        {exp.company}
                      </p>
                    )}
                    {exp.start_date && (
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                        {new Date(exp.start_date).toLocaleDateString()} -{' '}
                        {exp.end_date ? new Date(exp.end_date).toLocaleDateString() : 'Present'}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link href="/experience">
                  <button className="btn btn-primary">View All Experience</button>
                </Link>
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}

