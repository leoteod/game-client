<template>
  <div
    class="avatar fixed top-2 left-2 bg-black rounded-lg overflow-hidden border-2 border-black"
    :class="['desktop:w-32 desktop:h-32', 'mobile:w-20 mobile:h-20']"
  >
    <img
      class="w-full h-full block"
      src="https://styles.redditmedia.com/t5_3jj2c/styles/profileIcon_j6qract1fgp61.png?width=256&height=256&crop=256:256,smart&s=b2c4a855f6576a4ed11e29b5f081e6dfb10b404b"
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
