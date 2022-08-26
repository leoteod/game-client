<template>
  <div
    class="avatar fixed top-2 left-2 bg-black rounded-lg overflow-hidden border-2 border-black"
    :class="['desktop:w-32 desktop:h-32', 'mobile:w-20 mobile:h-20']"
  >
    <img
      class="w-full h-full block"
      src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1341200/6c7da42b5fccb071fbaa8e3ec757ee13938e83e9.jpg"
      alt="Avatar"
    />
    <div
      class="level absolute bg-zinc-900 border border-black text-xs text-white font-bold rounded"
      :class="[
        'desktop:py-1 desktop:px-3 desktop:bottom-1 desktop:left-1',
        'mobile:py-0.5 mobile:px-1.5 mobile:bottom-0.5 mobile:left-0.5',
      ]"
      v-text="`${props.character.level} Level`"
    />
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
