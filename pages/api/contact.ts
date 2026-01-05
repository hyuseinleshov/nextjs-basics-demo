import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, message } = req.body;

    console.log("Received contact form data:", {
      name,
      message,
    });

    return res.status(200).json({
      success: true,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
