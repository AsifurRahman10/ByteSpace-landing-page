# ByteSpace — Landing Page

The marketing site for **ByteSpace**, a place where people learn new skills and creators
publish courses. This repo is the landing page: a hero with a course search, a company strip,
skill categories, learning paths, feature highlights, a "become a creator" banner, and
testimonials — plus simple sign-in / sign-up screens.

It's built to be fast and easy to tweak. Everything is server-rendered by default, so it
loads quickly and stays simple to reason about.

## Tech stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **`next/image`** for all images
- **pnpm** as the package manager

Fonts: **Satoshi** (self-hosted from `public/font`) and **Poppins** (loaded via `next/font`).

## Getting started

You'll need Node.js and `pnpm`. Then:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and you're in. The page hot-reloads as
you edit.

## Scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `pnpm dev`      | Start the dev server                      |
| `pnpm build`    | Create a production build                 |
| `pnpm start`    | Run the production build                  |
| `pnpm lint`     | Lint with ESLint                          |
| `pnpm lint:fix` | Lint and auto-fix what it can             |

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout: fonts, metadata, skip link
│  ├─ globals.css           # Design tokens + theme (Tailwind v4 @theme)
│  ├─ (site)/               # The public marketing site
│  │  ├─ layout.tsx         # Wraps pages with <main> + <Footer>
│  │  └─ page.tsx           # The home page (composes all the sections)
│  └─ (auth)/               # Login & register screens
│     ├─ layout.tsx         # Shared blue auth shell + logo
│     ├─ login/page.tsx
│     └─ register/page.tsx
├─ dummyData/               # Placeholder data (courses), imported by a few sections
└─ components/
   ├─ layout/               # Navbar, Footer, Logo
   ├─ shared/               # Reusable bits: Button, CourseCard, AvatarGroup, etc.
   ├─ hero/                 # Hero + feature sections
   ├─ company/              # Company logo strip
   ├─ skills/               # Skill category filter + course grid
   ├─ learingpath/          # Learning path cards
   ├─ creatorBanner/        # "Become a creator" CTA
   ├─ testimonial/          # Testimonials
   └─ Auth/                 # Auth form, card, shell, social buttons
```

## Routes

- `/` — the landing page
- `/login` — sign in
- `/register` — create an account

## Design system

All colors, radii, and fonts live in **one place**: `src/app/globals.css`.

- Colors are defined as CSS variables (`--brand-blue`, `--brand-lime`, `--neutral-*`,
  `--primary`, …) and exposed to Tailwind through `@theme inline`, so you can use them as
  normal utilities: `bg-primary`, `text-neutral-700`, `text-brand-blue`, etc.
- `--container-width` and `--grid-gutter` drive the layout, wrapped in a handy
  `container-page` utility that centers content and handles side padding everywhere.
- Headings use Poppins via `--font-heading`; body text uses Satoshi.

Change a token here and it updates across the whole site — that's the point.

## Content & data

Placeholder course data lives in `src/dummyData/skillsData.ts` and is currently imported by
the skills grid, the feature section, and the auth showcase. Swap it for real data (or an
API) whenever you're ready.

## A couple of things worth knowing

- The home page is assembled from section components in `src/app/(site)/page.tsx` — add,
  remove, or reorder sections there.
- Images use `next/image`. A few decorative SVGs are large; compressing them is an easy
  performance win later.
- The site is static and prerenders cleanly, so it deploys anywhere that runs Next.js
  (Vercel is the zero-config option).

That's it — have fun building. 🚀

