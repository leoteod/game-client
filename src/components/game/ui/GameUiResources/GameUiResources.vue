<template>
  <div class="fixed top-10 left-1/2 flex gap-4 whitespace-nowrap">
    <div
      v-if="routeName === 'arena'"
      class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
    >
      <img
        class="block w- h-4"
        src="@/assets/images/svg/arena_energy.svg"
        alt="Arena Energy"
      />
      <div
        class="font-border--black text-xs"
        v-text="`${resource.data?.arena_energy || 0} / 10`"
      />
    </div>
    <div
      v-else
      class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
    >
      <img
        class="block w- h-4"
        src="@/assets/images/svg/energy.svg"
        alt="Energy"
      />
      <div
        class="font-border--black text-xs"
        v-text="`${resource.data?.energy || 0} / 500`"
      />
    </div>
    <div
      class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
    >
      <img class="block w- h-4" src="@/assets/images/svg/gold.svg" alt="Gold" />
      <div
        class="font-border--black text-xs"
        v-text="numberWithCommas(resource.data?.gold || 0)"
      />
    </div>
    <div
      class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
    >
      <img
        class="block w- h-4"
        src="@/assets/images/svg/diamond.svg"
        alt="Diamonds"
      />
      <div
        class="font-border--black text-xs"
        v-text="numberWithCommas(resource.data?.diamonds || 0)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ResourceInterface } from "@/api/Interfaces/Resource/ResourceInterface";
import { computed, onBeforeUnmount, onMounted, reactive } from "vue";
import { ResourcesController } from "@/api/Controllers/Http/Resource/ResourcesController";
import { useFormat } from "@/composables/useFormat";
import eventBus from "@/events/eventBus";
import { EnumEvents } from "@/events/events";
import { useRoute } from "vue-router";

const { numberWithCommas } = useFormat();

const { scopedIndex } = ResourcesController();

onMounted(async () => {
  await onGetCharacterResources();
  eventBus.$on(
    EnumEvents.reloadResources,
    async () => await onGetCharacterResources()
  );
});

onBeforeUnmount(() => {
  eventBus.$off(
    EnumEvents.reloadResources,
    async () => await onGetCharacterResources()
  );
});

const route = useRoute();
const routeName = computed(() => route.name);

const resource = reactive<{ data: ResourceInterface | object }>({
  data: {},
});

async function onGetCharacterResources() {
  const response = await scopedIndex();
  if (response.success) {
    resource.data = response.data as ResourceInterface;
  }
}
</script>
