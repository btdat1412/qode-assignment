This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Qode Assignment

Website upload image and add commment to it

## Deployed Link

[Qode Assignment Website](qode-assignment-beta.vercel.app)

## What I have done

- Using AWS S3 to upload image
- Using PlanetScale for database management (MySQL)
- Using Next.js to build both Front-End and Back-End with the newest server actions
- Create a simple dashboard to manage the image and comment

## Installation

First, you need to have a `.env` file in the root folder with the following variables:

```bash
DATABASE_URL=
AWS_BUCKET_NAME =
AWS_REGION =
AWS_ACCESS_KEY_ID =
AWS_SECRET_ACCESS_KEY =
```

Please contact me if you want to have the access to my database and AWS S3

Then, install the dependencies:

```bash
npm install
# or
yarn install
```

Run the application

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

Finally, if you have any question related to the project, feel free to contact me via email: btdat1412@gmail.com`
