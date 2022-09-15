import { EnumCampaignProps } from "@/api/Enums/Campaign/CampaignProps";
import type { TypeCampaignTier } from "@/api/Types/Campaign/CampaignType";
import type { RewardsCampaignInterface } from "@/api/Interfaces/Rewards/RewardsInterface";

export interface CampaignInterface {
  [EnumCampaignProps.id]?: number;
  [EnumCampaignProps.level]: number;
  [EnumCampaignProps.required_energy]: number;
  [EnumCampaignProps.rewards]: RewardsCampaignInterface;
  [EnumCampaignProps.tier]: TypeCampaignTier;
  [EnumCampaignProps.monster_id]: number;
}
