<template>
  <div class="w-screen h-screen">
    <img
      class="fixed top-0 right-0 bottom-0 left-0 object-fill w-full h-full"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/66853f18520863.562cad463d0eb.jpg"
      alt=""
    />
    <div class="relative mt-[3vh]">
      <img
        class="w-[40vh] m-auto"
        src="https://i.pinimg.com/originals/4c/99/c9/4c99c9c8236518c4ed584a297accee09.png"
        alt=""
      />
    </div>
    <button
      v-if="server"
      @click="server = 0"
      class="fixed top-2 right-2 border border-black bg-black bg-opacity-75 w-12 h-12 flex items-center justify-center text-white rounded-lg"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>
    </button>
    <div class="relative" v-if="loading || charactersLoading">
      <game-ui-full-loader />
    </div>
    <div class="relative" v-else-if="!redirect">
      <div class="mt-[2vh] flex items-center justify-center">
        <ul
          v-if="!server"
          class="h-[55vh] overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 rounded-lg p-6 flex flex-col gap-2"
        >
          <li
            class="w-[40vw] text-white bg-black bg-opacity-50 p-2 border border-white border-opacity-10 rounded flex gap-2"
            v-for="server in servers.data"
            :key="server.id"
            @click="onSelectServer(server.id)"
          >
            <svg
              v-if="server.id === 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z"
              />
              <path
                fill-rule="evenodd"
                d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
              />
            </svg>

            <span v-text="server.name" />
          </li>
        </ul>
        <ul
          class="h-[55vh] overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 rounded-lg p-6 flex flex-col gap-2"
          v-else
        >
          <li
            class="w-[40vw] text-white bg-black bg-opacity-50 p-2 border border-white border-opacity-10 rounded flex gap-2"
            v-for="character in characters.data"
            :key="character.id"
            @click="onSelectCharacter(character.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span v-text="`[${character.level}] ${character.name}`" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { ServersController } from "@/api/Controllers/Http/Server/ServersController";
import type { ServerInterface } from "@/api/Interfaces/Server/ServerInterface";
import type { AccountInterface } from "@/api/Interfaces/Account/AccountInterface";
import { EnumAccountProps } from "@/api/Enums/Account/AccountProps";
import { CharactersController } from "@/api/Controllers/Http/Character/CharactersController";
import { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
import router from "@/router";
import GameUiFullLoader from "@/components/game/ui/GameUiFullLoader/GameUiFullLoader.vue";

const servers = reactive<{ data: ServerInterface | object }>({
  data: {},
});
const { index, loading, scopedCharacterSelect } = ServersController();

onMounted(() => {
  onGetServers();
});

async function onGetServers() {
  const response = await index();
  if (response.success) {
    servers.data = response.data as ServerInterface;
  }
}

const { scopedCharactersOnServer, loading: charactersLoading } =
  CharactersController();
const server = ref(0);
const characters = reactive<{ data: CharacterInterface[] | [] }>({
  data: [],
});
async function onSelectServer(serverId: number) {
  server.value = serverId;
  const response = await scopedCharactersOnServer(server.value);
  if (response.success) {
    characters.data = response.data as CharacterInterface[];
  }
}

const redirect = ref(false);
async function onSelectCharacter(characterId: number) {
  const response = await scopedCharacterSelect(server.value, characterId);
  if (response.success) {
    server.value = 0;
    redirect.value = true;
    const data = response.data as AccountInterface;
    await router.push(
      `/game/server/${data[EnumAccountProps.selected_server_id]}/main/town`
    );
  }
}
</script>
