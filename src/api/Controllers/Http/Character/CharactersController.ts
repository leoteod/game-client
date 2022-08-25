import { useHttp } from "@/composables/useHttp";

export function CharactersController() {
  const { get, apiVersion, loading } = useHttp();
  const route = "character";
  async function index() {
    const response = await get({
      url: `${apiVersion}/${route}`,
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
