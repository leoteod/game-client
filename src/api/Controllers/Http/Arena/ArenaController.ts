import { useHttp } from "@/composables/useHttp";

export function ArenaController() {
  const { fetch, loading } = useHttp();
  const url = "arena";
  async function publicIndex() {
    const response = await fetch({
      method: "get",
      url: `public/${url}`,
      delay: 1000,
    });
    if (!response.error) {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      return {
        success: false,
      };
    }
  }
  return { publicIndex, loading };
}
