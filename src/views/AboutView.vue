<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" @click="onGetCharacter()">Get character</button>
    <pre>
      {{ results }}
    </pre>
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
import { BattlesController } from "@/api/Controllers/Http/Battle/BattlesController";
const character = reactive({
  data: {},
});
const { scopedIndex, loading } = CharactersController();
const { results } = BattlesController();

async function onGetCharacter() {
  const response = await scopedIndex();
  if (response.success) {
    character.data = response.data;
  }
}
</script>
