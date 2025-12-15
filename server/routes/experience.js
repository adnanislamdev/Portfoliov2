const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all experience entries
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM experience ORDER BY start_date DESC, created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching experience:', error);
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

// Get experience by type
router.get('/type/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const result = await pool.query(
      'SELECT * FROM experience WHERE type = $1 ORDER BY start_date DESC',
      [type]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching experience by type:', error);
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

// Create a new experience entry
router.post('/', async (req, res) => {
  try {
    const { title, company, location, start_date, end_date, description, type } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const result = await pool.query(
      'INSERT INTO experience (title, company, location, start_date, end_date, description, type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, company, location, start_date, end_date, description, type || 'work']
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating experience:', error);
    res.status(500).json({ error: 'Failed to create experience' });
  }
});

// Update an experience entry
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, location, start_date, end_date, description, type } = req.body;

    const result = await pool.query(
      'UPDATE experience SET title = $1, company = $2, location = $3, start_date = $4, end_date = $5, description = $6, type = $7 WHERE id = $8 RETURNING *',
      [title, company, location, start_date, end_date, description, type, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Experience entry not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating experience:', error);
    res.status(500).json({ error: 'Failed to update experience' });
  }
});

// Delete an experience entry
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM experience WHERE id = $1', [id]);
    res.json({ message: 'Experience entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting experience:', error);
    res.status(500).json({ error: 'Failed to delete experience' });
  }
});

module.exports = router;


