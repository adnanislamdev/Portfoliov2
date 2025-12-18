import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react';
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

  const fetchSubmissions = useCallback(async () => {
    try {
      const response = await fetch('/api/contacts');
      if (!response.ok) {
        // If database is not available, just show empty list
        if (response.status === 503) {
          console.log('Database not available, showing empty list');
          setSubmissions([]);
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubmissions(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      setSubmissions([]);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

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
        fetchSubmissions();
      } else {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 503) {
          setMessage('Database is not available. Please try again later.');
        } else {
          setMessage(errorData.error || 'Failed to submit message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchSubmissions();
      } else {
        console.error('Failed to delete submission:', response.status);
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
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

          <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
            <div className="card">
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                Get in Touch
              </h2>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                I'd love to hear from you! Feel free to reach out using the form.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
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
                  <label htmlFor="last_name">Last Name</label>
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
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="comment">Message</label>
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
                      backgroundColor: '#d1fae5',
                      color: '#065f46',
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
          </div>

          <section className="submissions">
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Recent Messages
            </h2>
            {submissions.length === 0 ? (
              <div className="card" style={{ textAlign: 'center' }}>
                <p>No messages yet</p>
              </div>
            ) : (
              <div className="submissions-list">
                {submissions.map((submission) => (
                  <div key={submission.id} className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>
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
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="btn btn-secondary"
                        style={{
                          padding: '0.5rem 1rem',
                          fontSize: '0.85rem',
                          marginLeft: '1rem',
                        }}
                      >
                        Delete
                      </button>
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

