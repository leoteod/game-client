import type { AccountInterface } from "@/api/Interfaces/Account/AccountInterface";
import type { EquipmentInterface } from "@/api/Interfaces/Equipment/EquipmentInterface";
import { EnumEquipmentItemProps } from "@/api/Enums/Equipment/EquipmentProps";
import { EnumCharacterProps } from "@/api/Enums/Character/CharacterProps";

export interface CharacterStatsInterface {
  [EnumEquipmentItemProps.hp]: number;
  [EnumEquipmentItemProps._currentHP]?: number;
  [EnumEquipmentItemProps.atk]: number;
  [EnumEquipmentItemProps.def]: number;
  [EnumEquipmentItemProps.criticalDMG]: number;
  [EnumEquipmentItemProps.criticalRate]: number;
  [EnumEquipmentItemProps.blockRate]: number;
  [EnumEquipmentItemProps.power]: number;
}

export interface CharacterInterface {
  [EnumCharacterProps.id]?: number;
  [EnumCharacterProps.name]: string;
  [EnumCharacterProps.account_id]: number;
  [EnumCharacterProps.server_id]: number;
  [EnumCharacterProps.class]: number;
  [EnumCharacterProps.avatar]: string;
  [EnumCharacterProps.exp]: number;
  account?: AccountInterface | undefined;
  equipment?: EquipmentInterface | object | undefined;
  // Automatically generated readonly props
  stats: CharacterStatsInterface | object | undefined;
  [EnumCharacterProps.level]?: number;
  [EnumCharacterProps.nextLevelExp]?: number;
}
