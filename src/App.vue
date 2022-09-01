<template>
  <div>
    <reloadPWA />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import ReloadPWA from "@/components/pwa/ReloadPWA.vue";
</script>
