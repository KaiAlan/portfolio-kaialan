import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function fetchLikes(): Promise<number> {
  const res = await fetch("/api/get-like");
  if (!res.ok) throw new Error("Failed to fetch likes");
  const data = await res.json();
  return data.data.up_count;
}

async function postIncrementLikes(): Promise<any> {
  const res = await fetch("/api/increment-like", { method: "POST" });
  if (!res.ok) throw new Error("Failed to increment likes");
  return res.json();
}

export function useLikes() {
  const queryClient = useQueryClient();

  const likesQuery = useQuery<number, Error>({
    queryKey: ["likes"],
    queryFn: fetchLikes,
  });

  const { mutate: incrementLikes, isPending: isIncrementing } = useMutation<any, Error, void, unknown>({
    mutationFn: postIncrementLikes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });

  return {
    likes: likesQuery.data,
    isLoading: likesQuery.isLoading,
    error: likesQuery.error,
    incrementLikes,
    isIncrementing,
  };
}
