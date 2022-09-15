import { EnumCampaignProgressProps } from "@/api/Enums/CampaignProgress/CampaignProgressProps";
import type { CampaignInterface } from "@/api/Interfaces/Campaign/CampaignInterface";

export interface CampaignProgressInterface {
  [EnumCampaignProgressProps.id]?: number;
  [EnumCampaignProgressProps.stars]: number;
  [EnumCampaignProgressProps.stars_requirements]: object;
  [EnumCampaignProgressProps.campaign_id]: number;
  [EnumCampaignProgressProps.character_id]: number;
  // Generated
  campaign?: CampaignInterface;
}
