# My First Next App

A personal portfolio and learning project built with Next.js, React, TypeScript, and Tailwind CSS. This application showcases a multi-page portfolio with interactive components, project showcase, and various React/Next.js features.

## Overview

This is an active learning project demonstrating modern Next.js patterns and best practices. The application includes:

- **Home Page**: Profile overview with skills, projects, and interactive components
- **About Page**: Personal information and background
- **Projects Page**: Showcase of completed and in-progress projects with status tracking
- **Contact Page**: Contact information and communication options
- **Navigation**: Multi-page routing with a responsive navbar
- **Interactive Components**: Calculator, counter, form handling, and name input
- **Type-Safe Development**: Comprehensive TypeScript types for projects and skills
- **Responsive Design**: Built with Tailwind CSS 4 for modern styling

## Tech Stack

- **Next.js 16** - React framework with app router and SSR
- **React 19** - Latest UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework via PostCSS
- **ESLint 9** - Code quality and style enforcement

## Features

✅ **Multi-page routing** with dynamic pages (Home, About, Projects, Contact)  
✅ **Reusable components**: Skills, ProjectCard, Counter, Calculator, UserForm, NameInput  
✅ **Type-safe project structure** with custom types (Project, Skill)  
✅ **Interactive elements**: Forms, counters, calculators, input handling  
✅ **Responsive navigation** with dynamic links  
✅ **Project status tracking**: Completed, planned, and in-progress projects  
✅ **Global styling** with Tailwind CSS integration  

## Project Structure

```text
app/
  about/
    page.tsx
  components/
    Calculator.tsx
    Counter.tsx
    NameInput.tsx
    Navbar.tsx
    ProjectCard.tsx
    Skills.tsx
    UserForm.tsx
  contact/
    page.tsx
  projects/
    page.tsx
  types/
    project.ts
    skill.ts
  globals.css
  layout.tsx
  page.tsx
public/
package.json
next.config.ts
eslint.config.mjs
tsconfig.json
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

3. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Available Scripts

```bash
npm run dev    # Start the development server (http://localhost:3000)
npm run build  # Build the production bundle
npm run start  # Start the production server
npm run lint   # Run ESLint checks
```

## Current Projects

- **AI Notes & Quiz App** - TypeScript-based application (Completed)
- **MediStock** - Medicine inventory management system (Planned)
- **FreeCodeCamp Projects** - Collection of learning projects (Completed)
- **My New Project** - Next.js learning project (In Progress - 40%)

## Learning Outcomes

This project demonstrates:

- Next.js 16 app router conventions and file-based routing
- Server and client component patterns
- React hooks (useState, useEffect) for interactivity
- Component composition and reusability
- TypeScript for type safety in React components
- Tailwind CSS for modern, responsive styling
- Form handling and user input management
- Metadata API for SEO (page titles, descriptions)
- Custom type definitions for application data

## Author

Built as a hands-on learning exercise for Next.js, React, and modern web development fundamentals.
