# Zayan Bag - Business Website

A modern, multilingual (English/Tamil) business website for Zayan Bag, a bag shop and suitcase repair service in Madurai.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v6
- React i18next
- Framer Motion
- Lucide React Icons
- React Helmet Async

## Getting Started

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment (Vercel)

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Configure:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
   - Install Command: npm install
4. Set environment variables from `.env.example`.
5. Deploy.

The `vercel.json` is already configured for SPA routing.

## Configuration

Update `src/config/business.ts` with actual business details:
- Phone number
- WhatsApp number
- Google Maps URL
- Business hours

Update image URLs in `src/data/` files with actual product photos.

## Languages

- English (default)
- Tamil (தமிழ்)

Translation files: `src/locales/en/translation.json` and `src/locales/ta/translation.json`
