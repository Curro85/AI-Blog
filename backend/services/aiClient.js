const { GoogleGenAI } = require("@google/genai");
const config = require("./config");

const GEMINI_API_KEY = config.GEMINI_API_KEY;
console.log(GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

module.exports = { ai };
