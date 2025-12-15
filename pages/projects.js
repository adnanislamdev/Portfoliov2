import Head from 'next/head';
import Layout from '../components/Layout';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Automated Parking Detector',
      description: 'Built a computer vision system to automatically detect open and occupied parking spots using OpenCV and supervised learning techniques. Optimized object detection algorithms and data attribution pipelines, improving classification accuracy and reliability. Deployed a local web application for live monitoring and parking queue management via Raspberry Pi camera feed. Integrated real-time threat detection module, enhancing system security and reducing false positives by 30%.',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Raspberry Pi'],
      github_url: null,
      live_url: null,
      image_url: null
    },
    {
      id: 2,
      title: 'Full Stack Restaurant Website',
      description: 'Developed a responsive full stack website for a client\'s restaurant business using Next.js and React, delivering a modern and user-friendly interface. Improved site performance and design by implementing optimized components, dynamic routing, and server-side rendering. Collaborated with the client to tailor the site\'s branding and features, ensuring a smooth user experience across devices.',
      technologies: ['JavaScript', 'Next.js', 'React', 'Full Stack'],
      github_url: null,
      live_url: 'https://adnanislamdev.com',
      image_url: null
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Projects - Personal Website</title>
        <meta name="description" content="My portfolio projects" />
      </Head>

      <div className="page-container">
        <div className="container">
          <h1 className="page-title">My Projects</h1>

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
        </div>
      </div>
    </Layout>
  );
}

