# OAuth2 Frontend

A Next.js frontend for OAuth2 login with Google. It connects to a backend that handles the OAuth2 flow and session cookies, then redirects users back to the app.

## Features

- Google OAuth2 login button
- Session-based login/logout via backend endpoints
- Simple routes for home, auth, user, and about pages
- Built with Next.js App Router, Mantine UI, and Tailwind utilities

## Routes

- `/` – Home page
- `/auth` – Login page
- `/user` – Post-login page
- `/about` – About page

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file:

   ```bash
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Backend Expectations

The backend should expose the following endpoints:

- `GET /oauth2/authorization/google` – starts the OAuth2 login flow
- `POST /logout` – logs the user out and clears the session

After a successful login, the backend should redirect the user to `/user`.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run start` – run the production server
- `npm run lint` – lint the project

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Mantine UI
- Tailwind CSS utilities
