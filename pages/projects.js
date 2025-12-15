import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Projects - Personal Website</title>
        <meta name="description" content="My portfolio projects" />
      </Head>

      <div className="page-container">
        <div className="container">
          <h1 className="page-title">My Projects</h1>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="card" style={{ textAlign: 'center' }}>
              <p>No projects found. Add some through the Upload page!</p>
            </div>
          ) : (
            <div className="grid grid-2">
              {projects.map((project) => (
                <div key={project.id} className="card">
                  {project.image_url && (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                      }}
                    />
                  )}
                  <h2 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h2>
                  {project.description && (
                    <p style={{ marginBottom: '1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                      {project.description}
                    </p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            style={{
                              padding: '0.25rem 0.75rem',
                              borderRadius: '20px',
                              backgroundColor: 'var(--light-blue)',
                              color: 'var(--dark-blue)',
                              fontSize: '0.85rem',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                      >
                        GitHub
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

