# 📚 BookNook

Discover, share and borrow books with BookNook — a community book library built with the modern web stack.

## Features

- **Browse the collection** — explore and search all available books in one place.
- **Book details** — view owner info, availability, and a description for each book.
- **Borrow flow** — borrow and manage your borrowed books.
- **Add your own books** — contribute books you own to share with the community (**Add Books**, **My Books**).
- **Personal profile** — view your account and borrowing history (**My Borrows**, **Profile**).
- **Auth** — sign up or sign in with email (better-auth).

## Tech Stack

| Layer        | Technologies                                            |
| ------------ | ------------------------------------------------------- |
| Framework    | Next.js 16 (App Router)                                |
| Language     | JavaScript (.js/.jsx only)                              |
| Database     | MongoDB                                                 |
| Auth         | better-auth                                             |
| Styling      | Tailwind CSS v4                                        |
| Components    | shadcn/ui (`@base-ui/react`)                           |
| Animations   | Lenis, Swiper, `tw-animate-css`, lucide-react           |
| Notifications | sonner                                                 |
| Utils        | `cn`                                                    |

## Getting Started

First run the development server:

```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
src/app
├── (auth)/                  # Sign-up & sign-in pages
├── add-books/               # Add a new book to your collection
├── all-books/                # Browse & search the community collection
│   └── [id]/                # Individual book detail page
├── my-books/                # List of the books you've added
├── my-borrows/               # Your currently borrowed books
├── profile/                 # Your personal profile page
├── api/                      # Server-side API routes
│   └── auth/[...all]/        # better-auth endpoint
├── layout.js                 # Root layout with branding + fonts
├── globals.css               # Global styles & design tokens
└── not-found.jsx             # 404 fallback page
```

## Scripts

| Command   | Description                              |
| --------- | ---------------------------------------- |
| `dev`     | Start the Turbopack development server.  |
| `build`   | Production build.                        |
| `start`   | Serve the production build.              |
| `lint`    | Run ESLint over the project.             |

---

**BookNook** — a community book library, built for readers, by readers.
