<template>
  <div>
    <game-ui-player :character="props.character" />
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
