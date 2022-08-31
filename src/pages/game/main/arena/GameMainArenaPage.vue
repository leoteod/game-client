<template>
  <div class="w-full h-full">
    <img
      class="object-fill w-full h-full"
      src="https://cdnb.artstation.com/p/assets/images/images/032/395/035/large/artforgame-gamedesign-background.jpg?1606313150"
      alt=""
    />
    <game-ui-full-loader v-if="loading" />
    <div
      class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center"
      v-else
    >
      <div>
        <ul
          class="h-[55vh] overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 rounded-lg p-6 flex flex-col gap-2"
        >
          <li
            class="w-[40vw] text-white bg-black bg-opacity-50 p-2 border border-white border-opacity-10 rounded flex gap-2"
            v-for="arena in arenaCharacters.data"
            :class="{ 'text-red-500': props.character.id === arena.character.id }"
            :key="arena.id"
          >
            <span v-text="`Rank: ${arena.rank}`" />
            <span
              v-text="`[${arena.character.level}] ${arena.character.name}`"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { ArenaController } from "@/api/Controllers/Http/Arena/ArenaController";
import type { ArenaInterface } from "@/api/Interfaces/Arena/ArenaInterface";
import GameUiFullLoader from "@/components/game/ui/GameUiFullLoader/GameUiFullLoader.vue";
import { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";

interface Props {
  character: CharacterInterface;
}

const props = defineProps<Props>();

const arenaCharacters = reactive<{ data: ArenaInterface[] | [] }>({
  data: [],
});
const { publicIndex, loading } = ArenaController();

onMounted(() => {
  onGetArenaCharacter();
});

async function onGetArenaCharacter() {
  const response = await publicIndex();
  if (response.success) {
    arenaCharacters.data = response.data as ArenaInterface[];
  }
}
</script>
