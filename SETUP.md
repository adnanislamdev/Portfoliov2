# Quick Setup Guide

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up PostgreSQL Database

### Option A: Using psql command line
```bash
# Create database
createdb personal_website

# Run schema
psql -U postgres -d personal_website -f server/db/schema.sql
```

### Option B: Using psql interactive
```bash
psql -U postgres
```
Then run:
```sql
CREATE DATABASE personal_website;
\c personal_website
\i server/db/schema.sql
\q
```

## Step 3: Configure Environment Variables

Create a `.env` file in the root directory:
```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=personal_website
DB_PASSWORD=your_postgres_password
DB_PORT=5432
PORT=5000
```

## Step 4: Start the Application

### Terminal 1 - Start Backend Server
```bash
npm run dev:server
```
Server runs on `http://localhost:5000`

### Terminal 2 - Start Frontend
```bash
npm run dev
```
Frontend runs on `http://localhost:3000`

## Step 5: Test the Application

1. Open `http://localhost:3000` in your browser
2. Navigate to the Upload page to add some initial data
3. Check the Projects page to see your data
4. Test the Contact form - submissions will appear at the bottom of the page

## Troubleshooting

### Database Connection Issues
- Make sure PostgreSQL is running: `pg_isready`
- Verify your database credentials in `.env`
- Check that the database exists: `psql -l | grep personal_website`

### Port Already in Use
- Change the PORT in `.env` if 5000 is taken
- Update `next.config.js` rewrite destination if you change the port

### Module Not Found Errors
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then `npm install`


