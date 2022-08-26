<template>
  <div>
    <div v-if="loading">Loading...</div>
    <router-view v-else :character="character" />
  </div>
</template>

<script setup lang="ts">
import { CharactersController } from "@/api/Controllers/Http/Character/CharactersController";
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
const character = reactive({
  data: {},
});
const route = useRoute();
const { index, loading } = CharactersController();

const path = computed(() => route.path);

onMounted(() => {
  console.log("route", path.value);
  if (path.value !== "/game/server") {
    onGetCharacter();
  }
});

async function onGetCharacter() {
  const response = await index();
  if (response.success) {
    character.data = response.data;
  }
}
</script>
