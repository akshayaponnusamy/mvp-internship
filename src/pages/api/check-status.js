// pages/api/check-status.js
export default async function handler(req, res) {
  // You can integrate Gemini tracking logic here
  // Example: read from Firestore or status file
  const isSubmitted = true; // Replace with actual Gemini logic

  if (isSubmitted) {
    res.status(200).json({ status: "submitted" });
  } else {
    res.status(200).json({ status: "waiting" });
  }
}
