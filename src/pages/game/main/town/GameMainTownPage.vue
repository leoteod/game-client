<template>
  <div class="w-full h-full">
    <game-ui-player :character="props.character" />
    <game-ui-resources />
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
        class="absolute top-[52%] left-[17%] w-[43%] h-[35%] flex items-start justify-center"
        @click="$router.push({ name: 'arena' })"
      >
        <div
          class="bg-black text-white py-2 px-4 rounded border border-black bg-opacity-50 text-sm"
        >
          Battle Arena
        </div>
      </div>
      <div
        data-area="battleArenaLocked"
        class="absolute text-white top-[52%] left-[17%] w-[43%] h-[35%] flex items-center justify-center text-center"
      >
        <div class="mt-4">
          <div class="bg-black border border-black p-2 rounded-lg inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <div
            class="bg-black border border-black rounded-lg px-2 py-1 text-xs"
          >
            Unlocks at Lvl. 10
          </div>
        </div>
      </div>
      <div
        data-area="skillTree"
        class="absolute top-[51%] left-[1%] w-[16%] h-[15%] flex items-start justify-center"
      >
        <div
          class="bg-black text-white py-2 px-4 rounded border border-black bg-opacity-50 text-sm"
        >
          Skill Tree
        </div>
      </div>
      <div
        data-area="skillTreeLocked"
        class="absolute text-white top-[51%] left-[1%] w-[16%] h-[15%] flex items-center justify-center text-center"
      >
        <div class="mt-24">
          <div class="bg-black border border-black p-2 rounded-lg inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <div
            class="bg-black border border-black rounded-lg px-2 py-1 text-xs"
          >
            Unlocks at Lvl. 15
          </div>
        </div>
      </div>
      <div
        data-area="dungeon"
        class="absolute top-[51%] right-[6%] w-[22%] h-[24%] flex items-start justify-center"
      >
        <div
          class="bg-black text-white py-2 px-4 rounded border border-black bg-opacity-50 text-sm"
        >
          Dungeon
        </div>
      </div>
      <div
        data-area="dungeonLocked"
        class="absolute text-white top-[51%] right-[6%] w-[22%] h-[24%] flex items-center justify-center text-center"
      >
        <div class="mt-16">
          <div class="bg-black border border-black p-2 rounded-lg inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <div
            class="bg-black border border-black rounded-lg px-2 py-1 text-xs"
          >
            Unlocks at Lvl. 20
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
import GameUiPlayer from "@/components/game/ui/GameUiPlayer/GameUiPlayer.vue";
import GameUiResources from "@/components/game/ui/GameUiResources/GameUiResources.vue";

interface Props {
  character: CharacterInterface;
}

const props = defineProps<Props>();
</script>
