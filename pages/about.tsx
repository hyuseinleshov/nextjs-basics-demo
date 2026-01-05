import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next.js Basics Demo</title>
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1>About</h1>

        <p>
          This page demonstrates basic routing in Next.js using the Pages
          Router.
        </p>

        <Link href="/">← Back to Home</Link>
      </main>
    </>
  );
}
