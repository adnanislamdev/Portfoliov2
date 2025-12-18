const pool = require('../../../server/db');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query(
        'SELECT * FROM contacts ORDER BY created_at DESC'
      );
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ error: 'Failed to fetch contacts' });
    }
  } else if (req.method === 'POST') {
    try {
      const { first_name, last_name, email, comment } = req.body;

      // Validate required fields
      if (!first_name || !last_name || !email || !comment) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      const result = await pool.query(
        'INSERT INTO contacts (first_name, last_name, email, comment) VALUES ($1, $2, $3, $4) RETURNING *',
        [first_name.trim(), last_name.trim(), email.trim(), comment.trim()]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).json({ error: 'Failed to create contact' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
