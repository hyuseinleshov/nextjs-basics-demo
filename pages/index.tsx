import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Basics Demo</title>
        <meta
          name="description"
          content="Minimal Next.js demo application for university practice"
        />
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1>Next.js Basics Demo</h1>

        <p>
          This is a minimal Next.js application used to demonstrate the basics
          of project structure, routing and API routes.
        </p>

        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
