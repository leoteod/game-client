import { useHttp } from "@/composables/useHttp";

export function ServersController() {
  const { fetch, loading } = useHttp();
  const url = "server";
  async function index() {
    const response = await fetch({
      method: "get",
      url: `public/${url}s`,
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
  return { index, loading };
}
