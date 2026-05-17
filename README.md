# Tom Joshua Portfolio

Recruiter-focused portfolio for a Web Developer and IT Support Freelancer. The site is built with Astro and Tailwind CSS and highlights project proof, technical skills, credentials, experience, and contact paths.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Static assets in `public/`

## Scripts

```sh
npm install
npm run dev
npm run build
npm run preview
npm run astro -- check
```

## Editing Content

Most portfolio content is managed in `src/data/siteData.ts`.

- Set `siteConfig.resumeUrl` when a resume PDF or external resume link is ready.
- Add more projects to the `projects` array with `problem`, `solution`, `contributions`, `outcome`, `repoUrl`, and `demoUrl`.
- Replace disabled freelance platform entries once real Upwork, Fiverr, or Freelancer profiles are available.

## Current Routes

- `/` - homepage, profile, skills, experience, resume placeholder, contact
- `/projects` - detailed project proof
- `/credentials` - certifications and education

## Verification

Run these before publishing changes:

```sh
npm run astro -- check
npm run build
```
