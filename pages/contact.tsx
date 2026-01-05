import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Contact | Next.js Basics Demo</title>
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1>Contact</h1>

        {submitted ? (
          <p>Thank you! The form was submitted successfully.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label>
                Message:
                <br />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
            </div>

            <button style={{ marginTop: "1rem" }} type="submit">
              Send
            </button>
          </form>
        )}

        <br />
        <Link href="/">← Back to Home</Link>
      </main>
    </>
  );
}
