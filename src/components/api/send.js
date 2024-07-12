import { Configuration, OpenAIApi } from "openai-edge";
export async function sendMessage(text) {
  const configuration = new Configuration({
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M",
    basePath: "https://bothub.chat/api/v2/openai/v1",
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    messages: [
      { role: "user", content: "Привет! Как дела?" },
      {
        role: "assistant",
        content: "Супер!",
      },
      { role: "user", content: text },
    ],
    model: "gemini-pro",
  });

  try {
    if (completion.ok) {
      const data = await completion.json();
      const messageBot = data.choices[0].message.content;
      return messageBot;
    } else {
      throw new Error("упал...");
    }
  } catch (err) {
    console.warn(err.message);
    return "XXXX Неполадки, повтори запрос еще раз XXXX";
  }
}
