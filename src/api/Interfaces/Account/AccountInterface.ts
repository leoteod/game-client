import { EnumAccountProps } from "@/api/Enums/Account/AccountProps";

export interface AccountInterface {
  id: number;
  [EnumAccountProps.email]: string;
  [EnumAccountProps.selected_server_id]: number | null;
  [EnumAccountProps.selected_character_id]: number | null;
}
