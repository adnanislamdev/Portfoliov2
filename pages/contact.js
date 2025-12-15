import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    comment: '',
  });
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/contacts');
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          comment: '',
        });
        setMessage('Thank you for your message! It has been submitted successfully.');
        // Refresh submissions from server to get the latest messages
        fetchSubmissions();
      } else {
        setMessage('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('There was an error submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact Me - Personal Website</title>
        <meta name="description" content="Get in touch with me" />
      </Head>

      <div className="page-container">
        <div className="container">
          <h1 className="page-title">Contact Me</h1>

          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            <div className="card">
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                Get in Touch
              </h2>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                I'd love to hear from you! Whether you have a question, want to collaborate,
                or just want to say hello, feel free to reach out using the form.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="first_name">First Name *</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last_name">Last Name *</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Message *</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                  />
                </div>

                {message && (
                  <div
                    style={{
                      padding: '1rem',
                      marginBottom: '1rem',
                      borderRadius: '5px',
                      backgroundColor: message.includes('error')
                        ? '#fee2e2'
                        : '#d1fae5',
                      color: message.includes('error') ? '#991b1b' : '#065f46',
                    }}
                  >
                    {message}
                  </div>
                )}

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="card">
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                Contact Information
              </h2>
              <div style={{ lineHeight: '2' }}>
                <p>
                  <strong>Email:</strong> your.email@example.com
                </p>
                <p>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/yourprofile
                  </a>
                </p>
                <p>
                  <strong>GitHub:</strong>{' '}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    github.com/yourusername
                  </a>
                </p>
              </div>
            </div>
          </div>

          <section className="submissions">
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Recent Messages
            </h2>
            {submissions.length === 0 ? (
              <div className="card" style={{ textAlign: 'center' }}>
                <p>No messages yet. Be the first to reach out!</p>
              </div>
            ) : (
              <div className="submissions-list">
                {submissions.map((submission) => (
                  <div key={submission.id} className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h3 style={{ color: 'var(--dark-blue)' }}>
                        {submission.first_name} {submission.last_name}
                      </h3>
                      <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                        {new Date(submission.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                      {submission.email}
                    </p>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
                      {submission.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}

