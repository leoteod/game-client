<template>
  <div class="w-full h-full">
    <img
      class="object-fill w-full h-full"
      src="@/assets/images/campaign/bg.jpg"
      alt="Arena"
    />
    <game-ui-full-loader v-if="loading" />
    <div
      class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center"
      v-else
    >
      <div class="flex items-center flex-col gap-4">
        <div class="text-center">
          <h1
            class="text-lg font-border--black font-bold text-yellow-500 uppercase"
            v-text="'Mode: Easy'"
          />
          <div
            class="text-sm font-bold text-red-500 uppercase"
            v-text="`Recommended Power: ${numberWithCommas(10000)}`"
          />
        </div>
        <div class="flex items-center gap-4">
          <div
            class="relative bg-black text-white w-20 h-20 flex items-center justify-center rounded-lg border border-black border-opacity-25 opacity-50"
            :class="{
              'opacity-100': n === 1,
            }"
            v-for="n in 7"
            :key="n"
          >
            <div class="flex flex-col gap-2 items-center">
              <div class="text-xs">Stage {{ n }}</div>
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <img
                  class="block w- h-4"
                  src="@/assets/images/svg/energy.svg"
                  alt="Energy"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="`${numberWithCommas(10)}`"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div v-if="true">
            <button
              class="bg-green-500 px-4 py-2 text-sm uppercase rounded-sm text-white font-bold"
              type="button"
            >
              Start Campaign
            </button>
          </div>
          <template v-else>
            <div>
              <button
                class="bg-neutral-800 px-4 py-2 text-sm uppercase rounded-sm text-white font-bold"
                type="button"
              >
                Battle current stage
              </button>
            </div>
            <div>
              <button
                class="bg-green-500 px-4 py-2 text-sm uppercase rounded-sm text-white font-bold"
                type="button"
              >
                Go to next stage
              </button>
            </div>
          </template>
        </div>
        <div>
          <h2
            class="text-center font-border--black text-lg mb-2 text-green-400"
            v-text="'Stage Rewards'"
          />
          <div class="flex gap-4 whitespace-nowrap">
            <div
              class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
            >
              <span
                class="text-xs font-border--black font-bold text-blue-500"
                v-text="'EXP'"
              />
              <div
                class="font-border--black text-xs"
                v-text="`${numberWithCommas(500)} ~ ${numberWithCommas(1000)}`"
              />
            </div>
            <div
              class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
            >
              <img
                class="block w- h-4"
                src="@/assets/images/svg/gold.svg"
                alt="Gold"
              />
              <div
                class="font-border--black text-xs"
                v-text="`${numberWithCommas(1000)} ~ ${numberWithCommas(5000)}`"
              />
            </div>
            <div
              class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
            >
              <img
                class="block w- h-4"
                src="@/assets/images/svg/diamond.svg"
                alt="Diamonds"
              />
              <div
                class="font-border--black text-xs"
                v-text="`${numberWithCommas(1)} ~ ${numberWithCommas(10)}`"
              />
            </div>
            <div
              class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
            >
              <img
                class="block w- h-4"
                src="/images/equipment/craft/1.png"
                alt="Craft Starter Material"
              />
              <div
                class="font-border--black text-xs"
                v-text="`${numberWithCommas(1)}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { ArenaController } from "@/api/Controllers/Http/Arena/ArenaController";
import type { ArenaInterface } from "@/api/Interfaces/Arena/ArenaInterface";
import GameUiFullLoader from "@/components/game/ui/GameUiFullLoader/GameUiFullLoader.vue";
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
import { useFormat } from "@/composables/useFormat";

interface Props {
  character: CharacterInterface;
}

const props = defineProps<Props>();

const { numberWithCommas } = useFormat();

const arenaCharacters = reactive<{ data: ArenaInterface[] | [] }>({
  data: [],
});
const { publicIndex, loading, scopedCombat } = ArenaController();

onMounted(async () => {
  await onGetArenaCharacter();
});

async function onGetArenaCharacter() {
  const response = await publicIndex();
  if (response.success) {
    arenaCharacters.data = response.data as ArenaInterface[];
  }
}

async function onBattle(defenderId: number) {
  const response = await scopedCombat(defenderId);
  if (response.success) {
    if (response.data.results.winner_id === props.character.id) {
      await onGetArenaCharacter();
    } else {
      alert("lost");
    }
  }
}
</script>
