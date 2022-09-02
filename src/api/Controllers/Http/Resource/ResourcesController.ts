import { useHttp } from "@/composables/useHttp";

export function ResourcesController() {
  const { fetch, loading } = useHttp();
  const url = "resource";
  async function scopedIndex() {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}`,
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
  return { scopedIndex, loading };
}
