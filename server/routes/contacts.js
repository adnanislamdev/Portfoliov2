const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, comment } = req.body;

    const result = await pool.query(
      'INSERT INTO contacts (first_name, last_name, email, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name || '', last_name || '', email || '', comment || '']
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

module.exports = router;


