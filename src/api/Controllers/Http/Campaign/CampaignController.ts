import { useHttp } from "@/composables/useHttp";

export function CampaignController() {
  const { fetch, loading } = useHttp();
  const url = "campaign";
  async function scopedIndex() {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}s`,
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
  return { scopedIndex, loading };
}
