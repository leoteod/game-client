<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <game-ui-player :character="character.data" />
      <router-view :character="character.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharactersController } from "@/api/Controllers/Http/Character/CharactersController";
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import GameUiPlayer from "@/components/game/ui/GameUiPlayer/GameUiPlayer.vue";
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
const character = reactive<{ data: CharacterInterface | object }>({
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
    character.data = response.data as CharacterInterface;
  }
}
</script>
