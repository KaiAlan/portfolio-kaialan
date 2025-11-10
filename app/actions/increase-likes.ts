'use server';

export async function incrementLikeCount(): Promise<number> {
  const namespace = process.env.COUNTERAPI_NAMESPACE!;
  const counterName = "kaialan-portfolio-likes";
  const apiKey = process.env.COUNTERAPI_KEY!;

  try {
    const res = await fetch(`https://api.counterapi.dev/v2/${namespace}/${counterName}/up`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
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

