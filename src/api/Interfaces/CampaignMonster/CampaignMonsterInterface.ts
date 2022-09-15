import type {
  EquipmentBootsOptionsInterface,
  EquipmentEarringsOptionsInterface,
  EquipmentGlovesOptionsInterface,
  EquipmentHeadOptionsInterface,
  EquipmentItemInterface,
  EquipmentRingsOptionsInterface,
  EquipmentShieldOptionsInterface,
  EquipmentSuitOptionsInterface,
  EquipmentWeaponOptionsInterface,
} from "@/api/Interfaces/Equipment/EquipmentInterface";
import { EnumCampaignMonsterProps } from "@/api/Enums/CampaignMonster/CampaignMonsterProps";
import type { CharacterStatsInterface } from "@/api/Interfaces/Character/CharacterInterface";

export interface CampaignMonsterInterface {
  [EnumCampaignMonsterProps.id]?: number;
  [EnumCampaignMonsterProps.name]: string;
  [EnumCampaignMonsterProps.avatar]: number;
  [EnumCampaignMonsterProps.animations]: object;
  // Boots
  [EnumCampaignMonsterProps.boots_id]?: number;
  boots?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.boots_options]?: EquipmentBootsOptionsInterface;
  // Earring Left
  [EnumCampaignMonsterProps.earring_left_id]?: number;
  earring_left?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.earring_left_options]?: EquipmentEarringsOptionsInterface;
  // Earring Right
  [EnumCampaignMonsterProps.earring_right_id]?: number;
  earring_right?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.earring_right_options]?: EquipmentEarringsOptionsInterface;
  // Gloves
  [EnumCampaignMonsterProps.gloves_id]?: number;
  gloves?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.gloves_options]?: EquipmentGlovesOptionsInterface;
  // Head
  [EnumCampaignMonsterProps.head_id]?: number;
  head?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.head_options]?: EquipmentHeadOptionsInterface;
  // Ring Left
  [EnumCampaignMonsterProps.ring_left_id]?: number;
  ring_left?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.ring_left_options]?: EquipmentRingsOptionsInterface;
  // Ring Right
  [EnumCampaignMonsterProps.ring_right_id]?: number;
  ring_right?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.ring_right_options]?: EquipmentRingsOptionsInterface;
  // Shield
  [EnumCampaignMonsterProps.shield_id]?: number;
  shield?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.shield_options]?: EquipmentShieldOptionsInterface;
  // Suit
  [EnumCampaignMonsterProps.suit_id]?: number;
  suit?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.suit_options]?: EquipmentSuitOptionsInterface;
  // Weapon
  [EnumCampaignMonsterProps.weapon_id]?: number;
  weapon?: EquipmentItemInterface | undefined;
  [EnumCampaignMonsterProps.weapon_options]?: EquipmentWeaponOptionsInterface;
  // Automatically generated readonly props
  monster_id?: number; // Used for battle to avoid same ID as character
  stats: CharacterStatsInterface | object | undefined;
}
