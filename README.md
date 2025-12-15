# Personal Portfolio Website

A modern, full-stack personal portfolio website built with the PERN stack (PostgreSQL, Express, React, Node.js) and Next.js framework. This website showcases experience, projects, and includes a contact form with real-time submission display.

## Features

- **Home Page**: Welcome page with about section and recent experience preview
- **Experience Page**: Display all work, education, and volunteer experience with filtering
- **Projects Page**: Showcase portfolio projects with technologies, links, and images
- **Contact Page**: Contact form (first name, last name, email, comment) with submissions displayed at the bottom
- **Upload Page**: Admin interface to add new projects and experience entries to the database
- **Modern Blue Aesthetic**: Beautiful, responsive design with a cohesive blue color scheme

## Tech Stack

### Frontend
- **Next.js 14**: React framework for server-side rendering and routing
- **React 18**: UI library
- **CSS**: Custom styling with modern blue aesthetic

### Backend
- **Express.js**: RESTful API server
- **Node.js**: JavaScript runtime
- **PostgreSQL**: Relational database
- **pg**: PostgreSQL client for Node.js

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd FINALWEBDEV
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**
   ```bash
   # Create database
   createdb personal_website
   
   # Or using psql
   psql -U postgres
   CREATE DATABASE personal_website;
   \q
   ```

4. **Run database schema**
   ```bash
   psql -U postgres -d personal_website -f server/db/schema.sql
   ```

5. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your database credentials:
   ```
   DB_USER=postgres
   DB_HOST=localhost
   DB_NAME=personal_website
   DB_PASSWORD=your_password
   DB_PORT=5432
   PORT=5000
   ```

## Running the Application

### Development Mode

1. **Start the Express backend server**
   ```bash
   npm run dev:server
   ```
   The server will run on `http://localhost:5000`

2. **Start the Next.js frontend** (in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

### Production Mode

1. **Build the Next.js application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## Project Structure

```
FINALWEBDEV/
├── pages/                 # Next.js pages
│   ├── _app.js           # App wrapper
│   ├── index.js          # Home page
│   ├── experience.js     # Experience page
│   ├── projects.js       # Projects page
│   ├── contact.js        # Contact page with form
│   └── upload.js         # Database upload page
├── components/            # React components
│   └── Layout.js         # Main layout with navigation
├── server/               # Express backend
│   ├── index.js          # Server entry point
│   ├── db/               # Database configuration
│   │   ├── index.js      # PostgreSQL connection
│   │   └── schema.sql    # Database schema
│   └── routes/           # API routes
│       ├── contacts.js   # Contact form endpoints
│       ├── projects.js   # Project CRUD endpoints
│       └── experience.js # Experience CRUD endpoints
├── styles/               # Global styles
│   └── globals.css       # Main stylesheet
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
└── README.md            # This file
```

## API Endpoints

### Contacts
- `GET /api/contacts` - Get all contact submissions
- `POST /api/contacts` - Create a new contact submission
- `DELETE /api/contacts/:id` - Delete a contact submission

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Experience
- `GET /api/experience` - Get all experience entries
- `GET /api/experience/type/:type` - Get experience by type (work, education, volunteer)
- `POST /api/experience` - Create a new experience entry
- `PUT /api/experience/:id` - Update an experience entry
- `DELETE /api/experience/:id` - Delete an experience entry

## Database Schema

### Contacts Table
- `id` (SERIAL PRIMARY KEY)
- `first_name` (VARCHAR)
- `last_name` (VARCHAR)
- `email` (VARCHAR)
- `comment` (TEXT)
- `created_at` (TIMESTAMP)

### Projects Table
- `id` (SERIAL PRIMARY KEY)
- `title` (VARCHAR)
- `description` (TEXT)
- `technologies` (TEXT[])
- `github_url` (VARCHAR)
- `live_url` (VARCHAR)
- `image_url` (VARCHAR)
- `created_at` (TIMESTAMP)

### Experience Table
- `id` (SERIAL PRIMARY KEY)
- `title` (VARCHAR)
- `company` (VARCHAR)
- `location` (VARCHAR)
- `start_date` (DATE)
- `end_date` (DATE)
- `description` (TEXT)
- `type` (VARCHAR) - 'work', 'education', or 'volunteer'
- `created_at` (TIMESTAMP)

## Deployment

### Recommended Platforms

1. **Vercel** (Recommended for Next.js)
   - Connect your GitHub repository
   - Add environment variables
   - Deploy automatically on push

2. **Render**
   - Deploy backend as a Web Service
   - Deploy frontend separately or use Next.js API routes

3. **Railway**
   - Supports both PostgreSQL and Node.js
   - Easy database setup

### Deployment Steps

1. **Backend Deployment**
   - Set up PostgreSQL database (use managed service or Docker)
   - Update `.env` with production database credentials
   - Deploy Express server

2. **Frontend Deployment**
   - Update API URLs in `next.config.js` to point to production backend
   - Deploy to Vercel or similar platform
   - Add environment variables if needed

3. **Database Migration**
   - Run `schema.sql` on production database
   - Seed initial data if needed

## Future Enhancements

- User authentication for upload page
- Image upload functionality
- Email notifications for contact form submissions
- Search and filter functionality
- Dark mode toggle
- Blog section
- Analytics integration

## Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note**: Remember to update the contact information in `pages/contact.js` and `pages/index.js` with your actual details before deploying!


