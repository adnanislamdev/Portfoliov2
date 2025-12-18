let pool;
try {
  pool = require('../../../server/db');
} catch (error) {
  console.error('Failed to load database connection:', error);
}

export default async function handler(req, res) {
  if (!pool) {
    return res.status(503).json({ error: 'Database connection not available' });
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Error deleting contact:', error);
      res.status(500).json({ error: 'Failed to delete contact' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
