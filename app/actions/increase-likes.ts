'use server';

export async function incrementLikeCount(): Promise<number> {
  const namespace = process.env.COUNTERAPI_NAMESPACE!;
  const counterName = "kaialan-portfolio-likes";
  const apiKey = process.env.COUNTERAPI_KEY!;

  try {
    console.log(`https://api.counterapi.dev/v2/${namespace}/${counterName}`)
    const res = await fetch(`https://api.counterapi.dev/v2/satyas-team-1613/kaialan-portfolio-likes/up`, {
      method: "POST",
    });

    if (!res.ok) {
      console.error("Like counter increment failed", res.status);
      throw Error('Like counter increment failed')
    }

    const data = await res.json();
    return data.value ?? 0;
  } catch (error) {
    console.error("Like counter increment error", error);
    throw Error('Like counter increment failed')
  }
}

