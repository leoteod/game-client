import { EnumEquipmentResourceProps } from "@/api/Enums/EquipmentResource/EquipmentResourceProps";

export interface EquipmentResourceInterface {
  [EnumEquipmentResourceProps.id]?: number;
  [EnumEquipmentResourceProps.starter_stone]: number;
  [EnumEquipmentResourceProps.common_stone]: number;
  [EnumEquipmentResourceProps.rare_stone]: number;
  [EnumEquipmentResourceProps.epic_stone]: number;
  [EnumEquipmentResourceProps.epic_stone]: number;
  [EnumEquipmentResourceProps.legendary_stone]: number;
  [EnumEquipmentResourceProps.character_id]: number;
}
