# Enterprise Analytics Dashboard — Next.js

A hands-on portfolio project built with **Next.js, React, TypeScript, and Material UI (MUI)**, focused on modern frontend engineering practices, reusable UI components, routing, and application structure.

The project explores Next.js App Router capabilities through a dashboard application, including nested layouts, dynamic routes, error handling, and interactive UI components.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Library:** React, Material UI (MUI)
- **Styling:** CSS Modules and global CSS
- **Fonts:** Geist via `next/font`
- **Runtime:** Node.js

## Features and Implementation

- **App Router:** File-system-based routing and nested route structures.
- **Layouts and Route Groups:** Shared layouts and separation of application sections using route groups.
- **Dynamic Routing:** Dynamic segments and nested route parameters.
- **Catch-all Routes:** Catch-all and optional catch-all routing patterns.
- **Navigation:** Client-side navigation and active route handling.
- **Loading and Error States:** Route-level loading UI, error boundaries, and not-found handling.
- **Forms and Interactions:** Login form UI, input validation, and password visibility toggle.
- **User Management:** User directory with name search, role filtering, sortable columns, and individual user detail routes.
- **User Route States:** Simulated asynchronous data loading, loading/error UI, and not-found handling for unknown user IDs.
- **Material UI:** Reusable interface elements using MUI components.
- **TypeScript:** Typed component props, state, and route parameters.

User records currently come from an in-memory sample dataset in `src/lib/users.ts`; no backend API is connected yet.

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Installation

Clone the repository:

```bash
git clone https://github.com/SurendraYalamarthi/enterprise-analytics-nextjs.git
cd enterprise-analytics-nextjs
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The application will automatically reload as you make changes to the source files.

## Project Structure

The application uses the Next.js App Router under `src/app`, with layouts, route groups, and nested route segments organized by responsibility.

```text
src/
├── app/
│   ├── (auth)/
│   │   └── login/
│   ├── (main)/
│   │   └── about/
│   ├── dashboard/
│   │   ├── [...slug]/
│   │   ├── docs/[[...slug]]/
│   │   ├── reports/
│   │   ├── settings/
│   │   ├── users/
│   │   │   └── [id]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── dashboard/
├── constants/
├── lib/
├── types/
└── utils/
```

*Note: This is a high-level overview; the structure may evolve as the project develops.*

## Development Goals

This project is intended to demonstrate practical frontend engineering skills and explore Next.js features, including:

- Building maintainable and reusable React components.
- Understanding Server Components and Client Components.
- Structuring applications with the App Router.
- Implementing accessible, responsive user interfaces.
- Handling route parameters, loading states, and errors.
- Exploring server-side data fetching and backend integration as the project evolves.

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/)

## Deployment

The application can be deployed using [Vercel](https://vercel.com/), which supports Next.js deployments.

For deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

Built as a practical portfolio project focused on modern React and Next.js frontend engineering.
