
export async function submitContactForm(apiUrl, apiKey, data) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "x-api-key": `${apiKey}`,
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return response.json();
}
