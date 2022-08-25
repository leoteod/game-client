import { useHttp } from "@/composables/useHttp";

export function CharactersController() {
  const { fetch, loading } = useHttp();
  const url = "character";
  async function index() {
    const response = await fetch({
      method: "get",
      url,
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
