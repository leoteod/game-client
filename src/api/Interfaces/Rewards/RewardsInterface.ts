import { EnumRewardsProps } from "@/api/Enums/Rewards/RewardsProps";
import { EnumResourceProps } from "@/api/Enums/Resource/ResourceProps";
import { EnumCharacterProps } from "@/api/Enums/Character/CharacterProps";

export interface RewardsCampaignInterface {
  [EnumRewardsProps.minExp]: number;
  [EnumRewardsProps.maxExp]: number;
  [EnumRewardsProps.minGold]: number;
  [EnumRewardsProps.maxGold]: number;
  [EnumRewardsProps.minDiamonds]: number;
  [EnumRewardsProps.maxDiamonds]: number;
  [EnumRewardsProps.starter_stone]?: number;
  [EnumRewardsProps.common_stone]?: number;
  [EnumRewardsProps.rare_stone]?: number;
  [EnumRewardsProps.epic_stone]?: number;
  [EnumRewardsProps.legendary_stone]?: number;
}

export interface RewardsResponseInterface extends RewardsCampaignInterface {
  [EnumRewardsProps.minExp]: number;
  [EnumRewardsProps.maxExp]: number;
  [EnumRewardsProps.minGold]: number;
  [EnumRewardsProps.maxGold]: number;
  [EnumRewardsProps.minDiamonds]: number;
  [EnumRewardsProps.maxDiamonds]: number;
  [EnumRewardsProps.starter_stone]?: number;
  [EnumRewardsProps.common_stone]?: number;
  [EnumRewardsProps.rare_stone]?: number;
  [EnumRewardsProps.epic_stone]?: number;
  [EnumRewardsProps.legendary_stone]?: number;
  // Response
  [EnumCharacterProps.exp]?: number;
  [EnumResourceProps.gold]?: number;
  [EnumResourceProps.diamonds]?: number;
  [EnumResourceProps.diamonds]?: number;
}
