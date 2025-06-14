export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  const mockResponse = [
    "Thanks for your application.\n",
    "We have reviewed the provided details.\n",
    "Based on your interest, here are some suggestions:\n",
    "- Explore latest courses in AI & Data Science\n",
    "- Join student research groups in your college\n",
    "- Apply for internships early\n",
    "Good luck! 🚀\n"
  ];

  for (const line of mockResponse) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    res.write(line);
  }

  res.end();
}
