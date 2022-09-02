import { EnumResourceProps } from "@/api/Enums/Resource/ResourceProps";

export interface ResourceInterface {
  id: number;
  [EnumResourceProps.gold]: number;
  [EnumResourceProps.diamonds]: number;
  [EnumResourceProps.energy]: number;
  [EnumResourceProps.character_id]: number;
}
