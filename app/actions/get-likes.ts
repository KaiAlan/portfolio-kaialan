'use server';

export async function getLikeCount(): Promise<number> {
  const namespace = process.env.COUNTERAPI_NAMESPACE!;
  const counterName = "kaialan-portfolio-likes";
  const apiKey = process.env.COUNTERAPI_KEY!;

  try {
    const res = await fetch(`https://api.counterapi.dev/v2/${namespace}/${counterName}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: "no-store", // always fresh
    });

    if (!res.ok) {
      console.error("Like counter fetch failed", res.status);
      return 469; // fallback count
    }

    const data = await res.json();
    return data.value ?? 469;
  } catch (error) {
    console.error("Like counter fetch error", error);
    return 469; // fallback count
  }
}