<template>
  <div class="w-full h-full">
    <game-ui-player :character="props.character" />
    <img
      class="object-fill w-full h-full"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/66853f18520863.562cad463d0eb.jpg"
      alt=""
    />
    <div class="game-areas">
      <div
        data-area="campaign"
        class="absolute top-[23%] left-[23%] w-[13%] h-[22%] pt-2 flex items-start justify-center"
      >
        <div
          class="bg-black text-white py-2 px-4 rounded border border-black bg-opacity-50 text-sm"
        >
          Campaign
        </div>
      </div>
      <div
        data-area="battleArena"
        class="absolute top-[52%] left-[17%] w-[43%] h-[35%] flex items-center justify-center"
      >
        <div
          class="bg-black text-white py-2 px-4 rounded border border-black bg-opacity-50 text-sm"
        >
          Battle Arena
        </div>
      </div>
      <div
        data-area="skillTree"
        class="absolute top-[51%] left-[1%] w-[16%] h-[15%] flex items-center justify-center"
      >
        <div
          class="bg-black text-white py-2 px-4 rounded border border-black bg-opacity-50 text-sm"
        >
          Skill Tree
        </div>
      </div>
      <div
        data-area="dungeon"
        class="absolute top-[51%] right-[6%] w-[22%] h-[24%] flex items-center justify-center"
      >
        <div
          class="bg-black text-white py-2 px-4 rounded border border-black bg-opacity-50 text-sm"
        >
          Dungeon
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
import GameUiPlayer from "@/components/game/ui/GameUiPlayer/GameUiPlayer.vue";

interface Props {
  character: CharacterInterface;
}

const props = defineProps<Props>();
</script>
