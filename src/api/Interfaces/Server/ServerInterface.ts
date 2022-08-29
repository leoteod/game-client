import { EnumServerProps } from "@/api/Enums/Server/ServerProps";

export interface ServerInterface {
  id: number;
  [EnumServerProps.name]: string;
  [EnumServerProps.capacity]: number;
  [EnumServerProps.maintenance]: boolean;
}
