<template>
  <div class="fixed top-2 left-2 z-10">
    <div
      class="relative avatar rounded-lg overflow-hidden z-10"
      :class="['desktop:w-32 desktop:h-32', 'mobile:w-20 mobile:h-20']"
    >
      <img
        class="w-full h-full block"
        src="/images/avatar/bg.png"
        alt="Avatar BG"
      />
      <img
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full block"
        :src="`/images/avatar/${props.character?.avatar || 0}.png`"
        alt="Avatar"
      />
      <div
        class="level absolute bg-zinc-900 border border-black text-xxs text-white font-bold rounded"
        :class="[
          'desktop:py-1 desktop:px-3 desktop:bottom-1 desktop:left-1',
          'mobile:py-0.5 mobile:px-1.5 mobile:bottom-0.5 mobile:left-0.5',
        ]"
        v-text="`${props.character?.level} Level`"
      />
    </div>
    <div
      class="absolute top-0 left-[calc(100%-7px)] pl-[7px] bg-black bg-opacity-50 border border-black h-8 rounded-tr-lg"
    >
      <span
        class="pl-2 pr-4 whitespace-nowrap text-green-400 text-xs font-border--black"
        v-text="props.character?.name"
      />
    </div>
    <div
      class="absolute left-[calc(100%-7px)] bg-black top-7 pl-[5px] w-48 h-5 border border-black rounded-tr-md rounded-br-md"
    >
      <div
        class="absolute top-0 left-0 bottom-0 bg-blue-600"
        :style="{
          width: `${
            (props.character?.exp / props.character?.nextLevelExp) * 100
          }%`,
        }"
      />
      <div
        class="absolute top-0 right-0 bottom-0 left-0 text-center text-xxs flex items-center justify-center text-white font-border--black"
        v-text="
          `${(
            (props.character?.exp / props.character?.nextLevelExp) *
            100
          ).toFixed(2)}% Exp`
        "
      />
    </div>
    <div class="absolute top-12 left-[calc(100%-5px)] pl-2 whitespace-nowrap">
      <span
        @click="showStatsDropdown = !showStatsDropdown"
        class="text-xs font-border--black text-white bg-black bg-opacity-50 border border-black px-2 py-0.5 rounded"
      >
        Power:
        <span
          class="text-yellow-400 font-border--black"
          v-text="props.character?.stats?.power"
      /></span>
      <div
        v-if="showStatsDropdown"
        class="bg-black bg-opacity-90 border border-black absolute top-[calc(100%+5px)] left-2 text-white px-2 py-1.5 rounded text-xs w-32"
      >
        <ul>
          <template v-for="(statValue, statKey) in props.character?.stats">
            <li
              class="flex justify-between items-center"
              :key="statKey"
              v-if="statKey !== 'power'"
            >
              <span>{{ mapStatName(statKey) }}</span>
              <span class="text-yellow-500">
                {{ mapStatValue(statKey, statValue) }}
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
import { ref } from "vue";

interface Props {
  character: CharacterInterface;
}

const props = defineProps<Props>();

const showStatsDropdown = ref(false);

function mapStatName(statKey: string) {
  switch (statKey) {
    case "hp":
      return "HP";
    case "atk":
      return "Attack";
    case "def":
      return "Defense";
    case "criticalDMG":
      return "Critical DMG";
    case "criticalRate":
      return "Critical Rate";
    case "blockRate":
      return "Block Rate";
    default:
      return statKey;
  }
}
function mapStatValue(statKey: string, statValue: number) {
  switch (statKey) {
    case "hp":
    case "atk":
    case "def":
      return statValue;
    case "criticalDMG":
      return `${statValue}%`;
    case "criticalRate":
      return `${statValue * 100}%`;
    case "blockRate":
      return `${statValue * 100}%`;
    default:
      return statValue;
  }
}
</script>

<style lang="scss" scoped>
.level {
  @apply opacity-80;
}
.avatar {
  &:hover {
    .level {
      @apply opacity-100;
    }
  }
}
</style>
