<template>
  <div>
    <game-ui-frame />
    <reloadPWA />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import ReloadPWA from "@/components/pwa/ReloadPWA.vue";
import GameUiFrame from "@/components/game/ui/GameUiFrame/GameUiFrame.vue";
</script>
