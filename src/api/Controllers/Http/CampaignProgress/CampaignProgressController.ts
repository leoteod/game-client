import { useHttp } from "@/composables/useHttp";

export function CampaignProgressController() {
  const { fetch, loading } = useHttp();
  const url = "campaign";
  async function scopedIndex() {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}/progress`,
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

  async function previous(campaignId: number) {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}/battle/previous/${campaignId}`,
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

  async function current() {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}/battle/current`,
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

  async function next() {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}/battle/next`,
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

  return { scopedIndex, previous, current, next, loading };
}
