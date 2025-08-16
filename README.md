## Smash & Learn – Badminton Course Site

A modern, fast, and mobile‑friendly landing site for a badminton course. The homepage includes a hero, “What is Badminton?”, curriculum modules, gallery, registration, and contact sections.

### Features

- **Hero**: Strong visual with primary calls‑to‑action
- **About (What is Badminton?)**: Quick intro and benefits
- **Curriculum**: Module‑based syllabus and key outcomes
- **Gallery**: Placeholder images with a lightbox experience
- **Registration**: Google Forms link for quick signup
- **Contact**: Simple form with toast feedback
- **Responsive UI**: Tailwind CSS + shadcn/ui components

### Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui (Radix UI)
- React Router

### Quick Start

Requires Node.js 18+ and npm

```sh
npm ci
npm run dev
# Open http://localhost:5173
```

Production preview:

```sh
npm run build
npm run preview
```

Linting:

```sh
npm run lint
```

### Customization

- `src/components/Registration.tsx`: Replace the Google Forms URL.
- `src/components/Contact.tsx` and `src/components/Footer.tsx`: Update contact details.

### Project Structure (short)

- `src/pages/Index.tsx`: Home composition (all sections)
- `src/components/*`: Sections (Hero, About, CourseContent, Gallery, Registration, Contact, Footer)
- `src/components/ui/*`: shadcn/ui building blocks
