export async function sendMessage(message: string, history: any[]) {
  const res = await fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      history,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch response");
  }

  const data = await res.json();
  return data.reply;
}