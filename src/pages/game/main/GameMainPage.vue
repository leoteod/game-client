<template>
  <div class="w-screen h-screen">
    <div v-if="loading">Loading...</div>
    <div class="w-full h-full" v-else>
      <game-ui-player :character="character.data" />
      <button
        v-if="!path.includes('/main/town')"
        @click="$router.push({ name: 'town' })"
        class="fixed top-2 right-2 border border-black bg-black bg-opacity-75 w-12 h-12 flex items-center justify-center text-white rounded-lg"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
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
