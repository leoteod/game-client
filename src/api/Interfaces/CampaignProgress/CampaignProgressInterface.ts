import { EnumCampaignProgressProps } from "@/api/Enums/CampaignProgress/CampaignProgressProps";

export interface CampaignProgressInterface {
  [EnumCampaignProgressProps.id]?: number;
  [EnumCampaignProgressProps.stars]: number;
  [EnumCampaignProgressProps.stars_requirements]: object;
  [EnumCampaignProgressProps.campaign_id]: number;
  [EnumCampaignProgressProps.character_id]: number;
}
