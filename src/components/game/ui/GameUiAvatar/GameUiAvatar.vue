<template>
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
</template>

<script setup lang="ts">
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
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
