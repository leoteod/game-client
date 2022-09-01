<template>
  <div class="fixed top-2 left-2">
    <div
      class="relative avatar bg-black rounded-lg overflow-hidden border-2 border-black z-10"
      :class="['desktop:w-32 desktop:h-32', 'mobile:w-20 mobile:h-20']"
    >
      <img
        class="w-full h-full block"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1341200/6c7da42b5fccb071fbaa8e3ec757ee13938e83e9.jpg"
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
      class="absolute top-0 left-[calc(100%-5px)] pl-[5px] bg-black bg-opacity-50 border border-black h-8 rounded-tr-lg"
    >
      <span
        class="pl-2 pr-4 whitespace-nowrap text-green-400 text-xs font-border--black"
        v-text="props.character?.name"
      />
    </div>
    <div
      class="absolute left-[calc(100%-5px)] bg-black top-7 pl-[5px] w-48 h-5 border border-black rounded-tr-md rounded-br-md"
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
          `${(props.character?.exp / props.character?.nextLevelExp) * 100}% Exp`
        "
      />
    </div>
    <div class="absolute top-12 left-[calc(100%-5px)] pl-2 whitespace-nowrap">
      <span
        class="text-xs font-border--black text-white bg-black bg-opacity-50 border border-black px-2 py-0.5 rounded"
      >
        Power:
        <span
          class="text-yellow-400 font-border--black"
          v-text="props.character?.stats?.power"
      /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";

interface Props {
  character: CharacterInterface;
}

const props = defineProps<Props>();
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
