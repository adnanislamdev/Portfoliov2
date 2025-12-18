# Personal Portfolio Website

This is a personal portfolio website built with Next.js and React. The website displays information about me, showcases my projects, and provides a way for visitors to get in touch.

## Website Overview

The website consists of three main sections accessible through the navigation tabs:

- **Home**: Displays an introduction and about me section with information about my background, education, and experience.
- **Projects**: Showcases my portfolio projects with descriptions, technologies used, and links to live demos or GitHub repositories.
- **Contact**: Features a contact form where visitors can send messages, along with my contact information.

## Backend Functionality

The website uses a backend server only for the Contact page. When visitors submit the contact form, the server receives the message and stores it in a PostgreSQL database. The server then updates the page by displaying all submitted messages at the bottom of the Contact page in real-time, so visitors can see previous messages that have been sent.

The backend server runs on Express.js and connects to a PostgreSQL database to store contact form submissions. The server continuously updates the messages displayed on the Contact page by fetching the latest submissions from the database whenever the page loads or a new message is submitted.

