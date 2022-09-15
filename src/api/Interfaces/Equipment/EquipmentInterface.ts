import {
  EnumEquipmentItemProps,
  EnumEquipmentProps,
} from "@/api/Enums/Equipment/EquipmentProps";
import type { TypeEquipmentTier } from "@/api/Types/Equipment/EquipmentType";

export interface EquipmentItemInterface {
  [EnumEquipmentItemProps.id]?: number;
  [EnumEquipmentItemProps.tier]: TypeEquipmentTier;
  [EnumEquipmentItemProps.level]: number;
  [EnumEquipmentItemProps.atk]?: number;
  [EnumEquipmentItemProps.def]?: number;
  [EnumEquipmentItemProps.hp]?: number;
  [EnumEquipmentItemProps.blockRate]?: number;
  [EnumEquipmentItemProps.criticalDMG]?: number;
  [EnumEquipmentItemProps.criticalRate]?: number;
}

export interface EquipmentBootsOptionsInterface {
  [EnumEquipmentItemProps.hp]: number;
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
}

export interface EquipmentEarringsOptionsInterface {
  [EnumEquipmentItemProps.def]: number;
  [EnumEquipmentItemProps.criticalDMG]: number;
}

export interface EquipmentGlovesOptionsInterface {
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
}

export interface EquipmentHeadOptionsInterface {
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
}

export interface EquipmentRingsOptionsInterface {
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.criticalRate]: number;
}

export interface EquipmentShieldOptionsInterface {
  [EnumEquipmentItemProps.def]: number;
  [EnumEquipmentItemProps.criticalDMG]: number;
  [EnumEquipmentItemProps.blockRate]: number;
}

export interface EquipmentSuitOptionsInterface {
  [EnumEquipmentItemProps.hp]: number;
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
}

export interface EquipmentWeaponOptionsInterface {
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.criticalRate]: number;
}

export interface EquipmentInterface {
  [EnumEquipmentProps.id]?: number;
  [EnumEquipmentProps.character_id]: number;
  // Boots
  [EnumEquipmentProps.boots_id]?: number;
  boots?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.boots_options]?: EquipmentBootsOptionsInterface;
  // Earring Left
  [EnumEquipmentProps.earring_left_id]?: number;
  earring_left?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.earring_left_options]?: EquipmentEarringsOptionsInterface;
  // Earring Right
  [EnumEquipmentProps.earring_right_id]?: number;
  earring_right?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.earring_right_options]?: EquipmentEarringsOptionsInterface;
  // Gloves
  [EnumEquipmentProps.gloves_id]?: number;
  gloves?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.gloves_options]?: EquipmentGlovesOptionsInterface;
  // Head
  [EnumEquipmentProps.head_id]?: number;
  head?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.head_options]?: EquipmentHeadOptionsInterface;
  // Ring Left
  [EnumEquipmentProps.ring_left_id]?: number;
  ring_left?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.ring_left_options]?: EquipmentRingsOptionsInterface;
  // Ring Right
  [EnumEquipmentProps.ring_right_id]?: number;
  ring_right?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.ring_right_options]?: EquipmentRingsOptionsInterface;
  // Shield
  [EnumEquipmentProps.shield_id]?: number;
  shield?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.shield_options]?: EquipmentShieldOptionsInterface;
  // Suit
  [EnumEquipmentProps.suit_id]?: number;
  suit?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.suit_options]?: EquipmentSuitOptionsInterface;
  // Weapon
  [EnumEquipmentProps.weapon_id]?: number;
  weapon?: EquipmentItemInterface | undefined;
  [EnumEquipmentProps.weapon_options]?: EquipmentWeaponOptionsInterface;
}
