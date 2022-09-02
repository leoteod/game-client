import { EnumResourceProps } from "@/api/Enums/Resource/ResourceProps";

export interface ResourceInterface {
  id: number;
  [EnumResourceProps.gold]: number;
  [EnumResourceProps.diamonds]: number;
  [EnumResourceProps.arena_coins]: number;
  [EnumResourceProps.energy]: number;
  [EnumResourceProps.arena_energy]: number;
  [EnumResourceProps.character_id]: number;
}
