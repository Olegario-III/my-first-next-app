# My First Next App

A small Next.js learning project that showcases a personal profile-style homepage built with React, TypeScript, and Next.js.

## Overview

This application is a beginner-friendly project meant to explore the fundamentals of Next.js app routing, component composition, and page rendering. The homepage currently presents:

- A sample profile name and course information
- Favorite programming language details
- Certificate count and year level
- A reusable `Skills` component
- A list of personal or learning project examples

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- ESLint with Next.js recommended rules
- Tailwind CSS 4 via PostCSS

## Project Structure

```text
app/
  components/
    Skills.tsx
  globals.css
  layout.tsx
  page.tsx
public/
package.json
next.config.ts
eslint.config.mjs
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser at:

   ```text
   http://localhost:3000
   ```

## Available Scripts

```bash
npm run dev    # Start the development server
npm run build  # Build the production bundle
npm run start  # Start the production server
npm run lint   # Run ESLint checks
```

## Notes

This project is intentionally lightweight and educational. It is a good starting point for experimenting with:

- Server and client component patterns in Next.js
- Reusable UI components
- TypeScript in a React/Next app
- Styling through global CSS and Tailwind integration

## Author

This project is being used as a learning exercise for Next.js and frontend development fundamentals.
