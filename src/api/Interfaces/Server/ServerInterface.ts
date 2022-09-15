import { EnumServerProps } from "@/api/Enums/Server/ServerProps";

export interface ServerInterface {
  [EnumServerProps.id]?: number
  [EnumServerProps.name]: string;
  [EnumServerProps.capacity]: number;
  [EnumServerProps.maintenance]: boolean;
  [EnumServerProps.hasCharacter]?: boolean;
}
