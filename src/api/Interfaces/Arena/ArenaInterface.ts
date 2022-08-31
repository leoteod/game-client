import { EnumArenaProps } from "@/api/Enums/Arena/ArenaProps";
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
import type { ServerInterface } from "@/api/Interfaces/Server/ServerInterface";

export interface ArenaInterface {
  id: number;
  [EnumArenaProps.rank]: number;
  [EnumArenaProps.character_id]: number | null;
  [EnumArenaProps.server_id]: number | null;
  character: CharacterInterface;
  server?: ServerInterface | null;
}
