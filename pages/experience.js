import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchExperience();
  }, [filter]);

  const fetchExperience = async () => {
    try {
      setLoading(true);
      const url = filter === 'all' 
        ? '/api/experience'
        : `/api/experience/type/${filter}`;
      const response = await fetch(url);
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
        <title>Experience - Personal Website</title>
        <meta name="description" content="My professional experience and education" />
      </Head>

      <div className="page-container">
        <div className="container">
          <h1 className="page-title">My Experience</h1>

          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <button
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('all')}
              style={{ marginRight: '0.5rem' }}
            >
              All
            </button>
            <button
              className={`btn ${filter === 'work' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('work')}
              style={{ marginRight: '0.5rem' }}
            >
              Work
            </button>
            <button
              className={`btn ${filter === 'education' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('education')}
              style={{ marginRight: '0.5rem' }}
            >
              Education
            </button>
            <button
              className={`btn ${filter === 'volunteer' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('volunteer')}
            >
              Volunteer
            </button>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>Loading experience...</p>
            </div>
          ) : experience.length === 0 ? (
            <div className="card" style={{ textAlign: 'center' }}>
              <p>No experience entries found. Add some through the Upload page!</p>
            </div>
          ) : (
            <div className="experience-list">
              {experience.map((exp) => (
                <div key={exp.id} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div>
                      <h2 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                        {exp.title}
                      </h2>
                      {exp.company && (
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                          {exp.company}
                        </p>
                      )}
                      {exp.location && (
                        <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                          📍 {exp.location}
                        </p>
                      )}
                    </div>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        backgroundColor: 'var(--accent-blue)',
                        color: 'var(--dark-blue)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  {exp.start_date && (
                    <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                      {new Date(exp.start_date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric',
                      })}{' '}
                      -{' '}
                      {exp.end_date
                        ? new Date(exp.end_date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })
                        : 'Present'}
                    </p>
                  )}
                  {exp.description && (
                    <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

