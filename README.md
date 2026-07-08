# Veezuals — Brand Designer Portfolio

A modern, server-rendered portfolio and booking website for **Veezuals** (Victoria Edochie), an independent brand designer based in Nigeria. Built with TanStack Start, React 19, and Tailwind CSS 4.

**Live site:** [veezuals.onrender.com](https://veezuals.onrender.com)

---

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, services preview, selected work, and CTA |
| `/about` | Designer bio, experience stats (5 years, 20+ clients) |
| `/gallery` | Project image grid with lightbox preview per project |
| `/services` | Detailed service offerings with deliverables |
| `/policies` | Payment, revision, timeline, delivery, and usage policies |
| `/contact` | Booking form that opens a pre-filled WhatsApp message |

---

## Services Offered

1. **Social Media Design** — Feed systems, story templates, launch campaigns
2. **Flyer Design** — Event flyers, promo posters, digital invites
3. **Book Interior Design** — Page layouts, typography setting, print-ready files
4. **Brand Presentation Design** — Pitch decks, brand books, investor decks
5. **Creative Decorations** — Event styling, spatial direction, print collateral

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (SSR, file-based routing) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 + tw-animate-css |
| Components | Radix UI (shadcn/ui pattern) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod validation |
| Query | TanStack React Query |
| Bundler | Vite 7 |
| Language | TypeScript 5.8 |
| Fonts | Clash Grotesk, Space Grotesk, Poppins, Alfa Slab One |
| Email | Nodemailer (server-side contact form) |
| Hosting | Render |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm, bun, or npm

### Install

```bash
pnpm install
# or
bun install
# or
npm install
```

### Development

```bash
pnpm dev
# or
bun dev
```

### Production Build

```bash
pnpm build
pnpm preview    # preview the production build locally
pnpm start      # start the production server
```

> **Tip:** Replace `pnpm` with `bun` or `npm` if you prefer.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Production build |
| `pnpm build:dev` | Development-mode build |
| `pnpm preview` | Preview production build |
| `pnpm start` | Run production server |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier |

---

## Project Structure

```
src/
├── assets/              # Images, fonts, brand assets
│   └── projects/        # Portfolio project images (auto-discovered by gallery)
├── components/
│   ├── site/            # Nav, Footer, Splash, Marquee, KenteRule
│   └── ui/              # shadcn/ui primitives (button, card, dialog, etc.)
├── hooks/               # Custom hooks (e.g. use-mobile)
├── lib/
│   ├── api/             # TanStack Start server functions
│   │   ├── contact.functions.ts   # Contact form → Nodemailer
│   │   └── example.functions.ts   # Example server function
│   ├── config.server.ts
│   ├── error-capture.ts
│   ├── error-page.ts
│   └── utils.ts
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout (Nav, Footer, Splash)
│   ├── index.tsx        # Home page
│   ├── about.tsx
│   ├── gallery.tsx
│   ├── services.tsx
│   ├── policies.tsx
│   └── contact.tsx
├── router.tsx
├── routeTree.gen.ts     # Auto-generated — do not edit
├── server.ts
├── start.ts
└── styles.css           # Global styles, theme variables, splash animations
```

---

## Environment Variables

For the contact form email (Nodemailer) to work in production:

| Variable | Description | Default |
| --- | --- | --- |
| `SMTP_HOST` | SMTP server host | — |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_SECURE` | Use TLS (`true`/`false`) | `false` |
| `SMTP_USER` | SMTP auth username | — |
| `SMTP_PASS` | SMTP auth password | — |
| `EMAIL_TO` | Recipient email | `designsbyveezuals@gmail.com` |
| `EMAIL_FROM` | Sender email (defaults to form input) | — |

---

## Adding Portfolio Projects

Drop image files (`.jpg`, `.jpeg`, `.png`) into `src/assets/projects/<Project Name>/`. The gallery page auto-discovers all images in subdirectories and groups them by folder name — no code changes needed.

---

## Code Quality

- **ESLint** with TypeScript, React Hooks, React Refresh, and Prettier plugins
- **Prettier** (100 char width, double quotes, trailing commas)
- Path alias: `@/` → `./src/`

---

## Contact

- **WhatsApp:** [+234 906 871 6986](https://wa.me/2349068716986)
- **Instagram:** [@shedesignerr](https://www.instagram.com/shedesignerr)
- **LinkedIn:** [Victoria Edochie](https://www.linkedin.com/in/victoria-edochie-0135a0288)

---

## License

All rights reserved. Brand assets, images, and design work are property of Veezuals / Victoria Edochie.
