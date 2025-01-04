# Week 2 Headstarter Accelerator Project 2 Discord Clone: Real-Time Chat & Video
Discord Clone: Real-Time Chat & Video.
In this project, you will build a Discord clone with real-time chat and video functionality. 
You'll build a React frontend with Tailwind CSS and a backend API using Convex.
I don't integrate WebRTC for real-time video and audio.

First create this file .env.local and change with your secrets and urls: 

```bash
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:tidy-dotterel-357 # team: aslaualexandru, project: https-auth-convex-dev-device-chatstarter-274cc

NEXT_PUBLIC_CONVEX_URL=https://tidy-dotterel-357.convex.cloud
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_a2V5LX...
CLERK_SECRET_KEY=sk_test_ZwJ6MF...
```
Install with: 
```bash  
npm install
```


After, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Resources

[Tour of Convex](
https://docs.convex.dev/tutorial)

[Convex Functions](
https://docs.convex.dev/functions)

[Convex Database](
https://docs.convex.dev/database)

[Convex & Clerk Setup](
https://docs.convex.dev/auth/clerk)

[Clerk Webhooks](
https://clerk.com/docs/webhooks/sync-data)

[Deploying Convex to Vercel](
https://docs.convex.dev/production/hosting/vercel)


## Overview
This is a Next.js application that uses Clerk.js to power user management (authentication and athorization), and Convex.dev to enable application database with with support for automatic indexing and straightforward api to handle queries and data manipulation with real-time events.

The frontend uses Shadcn UI components. Users can sign up with their email, Google, or Github account. Once signed in, they can chat with each other in real-time.



## This project is in Next.js 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
