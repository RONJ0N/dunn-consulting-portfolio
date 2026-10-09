# Dunn Consulting — Website

A responsive business website with an interactive missed-call cost calculator, lead-form API, and configurable chatbot embed. Built by **Randal Dunn** for Dunn Consulting.

[Live business website](https://www.dunnconsulting.org/) · [AI services source](https://github.com/RONJ0N/dunn-consulting-services-portfolio) · [LinkedIn](https://www.linkedin.com/in/randal-dunn-4342b3379/)

## What this demonstrates

- Next.js App Router, React, TypeScript, and Tailwind CSS.
- Reusable components, responsive layouts, metadata, structured data, and accessible navigation.
- Interactive calculator and server-side form validation.
- Optional email/webhook delivery and a configurable AI chatbot embed.

This is a curated source showcase. Internal operating documents and production configuration are excluded. The live business site is separately managed; this repository is not its deployment branch. Service descriptions on the website describe the business offering, not proof that every advertised service is implemented in this repository.

## Run locally

Use Node.js 22 or 24 and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [localhost:3000](http://localhost:3000). No API key is required to view the site. Form submissions are validated but are not stored, emailed, or sent to a webhook by default. Analytics and the external chat embed are also disabled by default. Public business links, including booking links, still point to the live business.

Optional integrations are configured through `.env.local`; see `.env.example`. Enabling actual delivery requires `ENABLE_LEAD_DELIVERY=true` and your own provider configuration. Never prefix a server credential with `NEXT_PUBLIC_`.

## Code map

| Area | Source |
| --- | --- |
| Page and layouts | `app/` |
| UI and calculator | `components/sections/` |
| Lead endpoint | `app/api/leads/route.ts` |
| Site settings | `lib/site.ts` |
| Chat embed settings | `lib/chat-widget.ts` |
| Page copy | `content/` |

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The build downloads Google Fonts. It requires network access for those fonts. Provider delivery and the live business deployment are outside local build checks.

## Verified for this source release

On 2026-10-08: lint, TypeScript checking, and the production build passed. Local HTTP smoke checks verified successful demo submissions, rejection of malformed requests, and disabled external chat/analytics defaults. No messages were sent.

The source release passed a credential scan. That scan does not certify future edits or a deployed service.

## Rights and dependencies

Published for portfolio review. No general open-source reuse license has been granted for the original application code or Dunn Consulting branding. Third-party dependencies retain their own licenses; see `package.json` and `package-lock.json`.
