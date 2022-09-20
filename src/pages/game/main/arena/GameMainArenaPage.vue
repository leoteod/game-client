<template>
  <div class="w-full h-full">
    <img
      class="object-fill w-full h-full"
      src="@/assets/images/arena/bg.jpg"
      alt="Arena"
    />
    <game-ui-full-loader v-if="loading" />
    <div
      class="absolute top-0 right-0 bottom-2 left-0 flex items-end justify-center"
      v-else
    >
      <div>
        <ul
          class="h-[75vh] overflow-y-auto overflow-x-hidden flex flex-col gap-2"
        >
          <li
            class="w-[45vw] relative text-white bg-black bg-opacity-80 p-2 border rounded flex gap-4 items-center"
            v-for="arena in arenaCharacters.data"
            :class="[
              returnRankBorderBG(arena.rank),
              {
                'text-green-500': props.character.id === arena.character.id,
              },
            ]"
            :key="arena.id"
            @click="
              props.character.id === arena.character.id
                ? false
                : onBattle(arena.character.id)
            "
          >
            <game-ui-avatar
              :character="arena.character"
              :class="['desktop:w-24 desktop:h-24', 'mobile:w-16 mobile:h-16']"
            />
            <div
              class="absolute top-2 right-2 text-xs py-1 px-2 font-bold"
              :class="returnRankLabelBG(arena.rank)"
            >
              <span v-text="`${arena.rank || 'Unranked'}`" />
            </div>
            <div>
              <div
                class="text font-border--black"
                v-text="arena.character.name"
              />
              <div
                class="text-sm font-border--black text-yellow-500"
                v-text="
                  `Power: ${numberWithCommas(arena.character?.stats?.power)}`
                "
              />
              <div class="flex items-center gap-3 text-xs mt-2">
                <div
                  class="font-border--black text-blue-400"
                  v-text="`Won: ${arena.won}`"
                />
                <div class="text-white" v-text="'|'" />
                <div
                  class="font-border--black text-red-400"
                  v-text="`Lost: ${arena.lost}`"
                />
                <div class="text-white" v-text="'|'" />
                <div
                  class="font-border--black text-orange-400"
                  v-text="
                    `WR ${(
                      (arena.won / (arena.lost + arena.won) || 0) * 100
                    ).toFixed(2)}%`
                  "
                />
              </div>
            </div>
            <div
              v-if="props.character.id !== arena.character.id"
              class="absolute bottom-2 right-2"
            >
              <button
                class="bg-black flex items-center gap-2 text-xs py-1 px-2 whitespace-nowrap rounded"
                type="button"
              >
                Battle
                <img
                  class="block w-3 h-3"
                  src="@/assets/images/svg/swords.svg"
                  alt="Battle"
                />
              </button>
            </div>
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
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
import GameUiAvatar from "@/components/game/ui/GameUiAvatar/GameUiAvatar.vue";
import { useFormat } from "@/composables/useFormat";
import eventBus from "@/events/eventBus";
import { EnumEvents } from "@/events/events";

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
      eventBus.$emit(EnumEvents.showGlobalAlert, {
        type: "success",
        message: response?.message,
      });
    } else {
      eventBus.$emit(EnumEvents.showGlobalAlert, {
        type: "info",
        message: response?.message,
      });
    }
    eventBus.$emit(EnumEvents.reloadResources);
  } else {
    eventBus.$emit(EnumEvents.showGlobalAlert, {
      type: "error",
      message: response?.data?.message,
    });
  }
}

function returnRankBorderBG(rank: number) {
  switch (rank) {
    case 1:
      return "border-[#ffd700]";
    case 2:
      return "border-[#c0c0c0]";
    case 3:
      return "border-[#cd7f32]";
    default:
      return "border-white border-opacity-10";
  }
}

function returnRankLabelBG(rank: number) {
  switch (rank) {
    case 1:
      return "bg-[#ffd700] text-black rounded-full";
    case 2:
      return "bg-[#c0c0c0] text-black rounded-full";
    case 3:
      return "bg-[#cd7f32] text-black rounded-full";
    default:
      return "bg-neutral-900 text-white rounded";
  }
}
</script>
