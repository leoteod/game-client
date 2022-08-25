<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" @click="onGetCharacter()">Get character</button>
    {{ loading }}
    <div v-if="loading">Loading...</div>
    <pre>
      {{ character.data }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { CharactersController } from "@/api/Controllers/Http/Character/CharactersController";
import { reactive } from "vue";
const character = reactive({
  data: {},
});
const { index, loading } = CharactersController();

async function onGetCharacter() {
  const response = await index();
  if (response.success) {
    character.data = response.data;
  }
}
</script>
