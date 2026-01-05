import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Next.js Basics Demo</title>
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1>Contact</h1>

        <p>
          This page will later include a simple form that sends data to an API
          route.
        </p>

        <Link href="/">← Back to Home</Link>
      </main>
    </>
  );
}
