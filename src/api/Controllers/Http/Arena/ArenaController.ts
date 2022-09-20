import { useHttp } from "@/composables/useHttp";

export function ArenaController() {
  const { fetch, loading } = useHttp();
  const url = "arena";

  async function scopedCombat(defenderId: number) {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}/combat/${defenderId}`,
      delay: 250,
    });
    if (!response.error) {
      return {
        success: true,
        data: response.data.data,
        message: response.data?.message || "",
        message_code: response.data?.message_code || "",
      };
    } else {
      return {
        success: false,
        data: response?.errorData || {
          message: "",
          message_code: "",
        },
      };
    }
  }

  async function publicIndex() {
    const response = await fetch({
      method: "get",
      url: `public/${url}`,
      delay: 250,
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
  return { scopedCombat, publicIndex, loading };
}
