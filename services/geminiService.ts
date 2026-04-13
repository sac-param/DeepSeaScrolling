import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const scanOceanDepth = async (depth: number): Promise<string> => {
  if (!apiKey) {
    return "API Key not found. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert oceanographer guiding a deep-sea submersible. 
      The current depth is ${depth} meters.
      
      Briefly describe the environment here (light levels, pressure, temperature) and mention 1 type of creature or phenomenon found near this specific depth.
      Keep the tone scientific but awe-inspiring. Limit response to 2 sentences.`,
      config: {
        maxOutputTokens: 100,
        temperature: 0.7,
      }
    });

    return response.text || "Communication interference. Data unavailable.";
  } catch (error) {
    console.error("Gemini Scan Error:", error);
    return "Sensor malfunction. Unable to scan environment.";
  }
};
