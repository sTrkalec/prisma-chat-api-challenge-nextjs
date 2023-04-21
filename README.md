This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
docker-compose build 
docker-compose up
```

Open [http://localhost:3000/api/chats/chats](http://localhost:3000/api/chats/chats) with your browser to see the result.

## POST
Ex body:
```bash
{
  "message": "Hello, world!"
}
```

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

