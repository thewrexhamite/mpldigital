# MPL Digital

Website and web app for MPL Digital — a web app development and digital strategy consultancy based in North Wales, serving clients across North Wales and the North West of England.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Analytics:** Vercel Analytics + Speed Insights (cookie-consent gated)
- **Linting:** ESLint + eslint-plugin-jsx-a11y
- **Formatting:** Prettier
- **Git hooks:** Husky + lint-staged

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All site copy lives in `constants/content.ts`. Edit this file to update text, service descriptions, stats, etc.

### Adding Case Studies

Replace `placeholder: true` items in `WORK.projects` within `constants/content.ts` with real project data. Remove the `placeholder` flag to show the full card without the "Coming soon" overlay.

### Updating Stats

Edit `ABOUT.stats` in `constants/content.ts`. Verify all figures before launch.

## Deployment

1. Connect the GitHub repo to [Vercel](https://vercel.com)
2. Set environment variables in the Vercel dashboard (see `.env.example`)
3. Point `mpldigital.co.uk` domain to Vercel

## Post-Launch Checklist

- [ ] Add Google Search Console verification code to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var
- [ ] Add ICO registration number to privacy policy (`app/privacy/page.tsx`)
- [ ] Add social profile URLs to `FOOTER.social` in `constants/content.ts`
- [ ] Replace placeholder case studies with real projects
- [ ] Verify and update `ABOUT.stats` with real figures
- [ ] Add Resend backend for contact form

## Environment Variables

| Variable                               | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                 | Production URL (e.g., `https://mpldigital.co.uk`) |
| `NEXT_PUBLIC_CONTACT_EMAIL`            | Contact email address                             |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification code           |
| `RESEND_API_KEY`                       | Resend API key for contact form (future)          |

## Accessibility

This site targets WCAG 2.1 AA compliance. ESLint with `eslint-plugin-jsx-a11y` is configured to enforce accessible patterns. Run `npm run lint` to check for issues.

## UK GDPR

- Cookie consent banner gates analytics cookies
- Privacy policy covers all Article 13 requirements
- Contact form includes data processing notice
- ICO registration placeholder included

## Adding Contact Form Backend

Recommended: [Resend](https://resend.com)

1. Add `RESEND_API_KEY` to environment variables
2. Create an API route at `app/api/contact/route.ts`
3. Validate the honeypot field server-side (reject if `website` field is not empty)
4. Send email via Resend
5. Handle data per the privacy policy — do not forward to any third party without explicit user consent
