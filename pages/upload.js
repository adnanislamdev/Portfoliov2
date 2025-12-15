import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Upload() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Experience form state
  const [experienceForm, setExperienceForm] = useState({
    title: '',
    company: '',
    location: '',
    start_date: '',
    end_date: '',
    description: '',
    type: 'work',
  });

  const handleExperienceChange = (e) => {
    setExperienceForm({
      ...experienceForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleExperienceSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(experienceForm),
      });

      if (response.ok) {
        setMessage('Experience entry added successfully!');
        setExperienceForm({
          title: '',
          company: '',
          location: '',
          start_date: '',
          end_date: '',
          description: '',
          type: 'work',
        });
      } else {
        setMessage('Error adding experience entry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting experience:', error);
      setMessage('Error adding experience entry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Upload Experience - Personal Website</title>
        <meta name="description" content="Upload experience entries to the database" />
      </Head>

      <div className="page-container">
        <div className="container">
          <h1 className="page-title">Upload Experience</h1>

          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleExperienceSubmit}>
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
                Add New Experience
              </h2>

              <div className="form-group">
                <label htmlFor="exp_title">Title/Position *</label>
                <input
                  type="text"
                  id="exp_title"
                  name="title"
                  value={experienceForm.title}
                  onChange={handleExperienceChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={experienceForm.company}
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={experienceForm.location}
                  onChange={handleExperienceChange}
                  placeholder="City, State or Remote"
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Type *</label>
                <select
                  id="type"
                  name="type"
                  value={experienceForm.type}
                  onChange={handleExperienceChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: '5px',
                    fontSize: '1rem',
                  }}
                  required
                >
                  <option value="work">Work</option>
                  <option value="education">Education</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="start_date">Start Date</label>
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  value={experienceForm.start_date}
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="end_date">End Date (leave empty if current)</label>
                <input
                  type="date"
                  id="end_date"
                  name="end_date"
                  value={experienceForm.end_date}
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exp_description">Description</label>
                <textarea
                  id="exp_description"
                  name="description"
                  value={experienceForm.description}
                  onChange={handleExperienceChange}
                  rows="4"
                />
              </div>

              {message && (
                <div
                  style={{
                    padding: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '5px',
                    backgroundColor: message.includes('Error')
                      ? '#fee2e2'
                      : '#d1fae5',
                    color: message.includes('Error') ? '#991b1b' : '#065f46',
                  }}
                >
                  {message}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Adding...' : 'Add Experience'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

