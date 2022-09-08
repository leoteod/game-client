import { useHttp } from "@/composables/useHttp";
import { EnumCharacterProps } from "@/api/Enums/Character/CharacterProps";

export interface PublicCreateFormInterface {
  [EnumCharacterProps.server_id]: number;
  [EnumCharacterProps.name]: string;
  [EnumCharacterProps.avatar]: number;
}

export function CharactersController() {
  const { fetch, loading } = useHttp();
  const url = "character";
  async function scopedCharactersOnServer(id: number) {
    const response = await fetch({
      method: "get",
      url: `scoped/${id}/${url}s`,
      delay: 1000,
    });
    if (!response.error) {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      return {
        success: false,
      };
    }
  }
  async function scopedIndex() {
    const response = await fetch({
      method: "get",
      url: `scoped/${url}`,
      delay: 1000,
    });
    if (!response.error) {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      return {
        success: false,
      };
    }
  }

  async function publicCreate(form: PublicCreateFormInterface) {
    const response = await fetch({
      method: "post",
      url: `public/${url}`,
      data: form,
      delay: 1000,
    });
    if (!response.error) {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      return {
        success: false,
      };
    }
  }
  return { scopedCharactersOnServer, scopedIndex, publicCreate, loading };
}
