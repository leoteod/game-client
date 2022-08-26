import type {
  TypeEquipmentTier,
  TypeEquipmentType,
} from "@/api/Types/Equipment/EquipmentType";
import {
  EnumEquipmentItemProps,
  EnumEquipmentProps,
} from "@/api/Enums/Equipment/EquipmentProps";

export interface EquipmentItemInterface {
  id: number;
  [EnumEquipmentItemProps.tier]: TypeEquipmentTier;
  [EnumEquipmentItemProps.type]: TypeEquipmentType;
  [EnumEquipmentItemProps.level]: number;
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
  [EnumEquipmentItemProps.hp]?: number;
  [EnumEquipmentItemProps.blockRate]?: number;
  [EnumEquipmentItemProps.criticalDMG]?: number;
  [EnumEquipmentItemProps.criticalRate]?: number;
}

export interface EquipmentHeadOptionsInterface {
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
}

export interface EquipmentSuitOptionsInterface {
  [EnumEquipmentItemProps.hp]: number;
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
}

export interface EquipmentInterface {
  id: number;
  account_id: number;
  [EnumEquipmentProps.head_id]?: number;
  head?: EquipmentItemInterface | undefined;
  head_options?: EquipmentHeadOptionsInterface;
  [EnumEquipmentProps.suit_id]: number;
  suit?: EquipmentItemInterface | undefined;
  suit_options?: EquipmentSuitOptionsInterface;
}
