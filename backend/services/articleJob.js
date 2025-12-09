const { ai } = require("./aiClient");

async function generateArticle() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are an assistant that must respond ONLY with valid JSON.

Generate the following:

{
  "title": "A realistic title for a real news-style article",
  "content": "A realistic article summary, maximum 400 words long.",
  "img": [
    "Real image URLs from Google Images that are directly related to the article topic, between 1-3."
  ]
}

Rules:
- Do NOT explain anything.
- Do NOT include backticks.
- Do NOT add extra fields.
- The response must be ONLY the JSON object.
- The URLs must point directly to real image files (jpg/png), not HTML pages or Google redirect links.
- The content must be factual and consistent with the title.
`,
  });
  const data = JSON.parse(response.text);
  return data;
}

module.exports = { generateArticle };
