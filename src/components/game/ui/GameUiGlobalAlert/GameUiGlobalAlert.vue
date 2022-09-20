<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed top-0 right-0 bottom-0 left-0 bg-black z-50 bg-opacity-50"
    />
  </transition>
  <div
    class="fixed top-10 right-0 left-0 z-50 flex items-center justify-center pointer-events-none transition-transform duration-700"
    :style="{ transform: `translateY(${show ? '0' : '-100px'})` }"
  >
    <div
      class="pointer-events-auto shadow border w-[60vw] py-2 px-4 rounded-lg flex justify-between items-center gap-2"
      :class="[returnAlertColor]"
    >
      <div class="flex items-center gap-2">
        <svg
          v-if="data.type === 'error'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else-if="data.type === 'info'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else-if="data.type === 'success'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else-if="data.type === 'warning'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            fill-rule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>

        <span
          class="text-white font-bold"
          v-text="data.message || 'This is my errr'"
        />
      </div>
      <div class="flex items-center justify-center">
        <button type="button" @click="onClose">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import eventBus from "@/events/eventBus";
import { EnumEvents } from "@/events/events";

type AlertTypes = "info" | "error" | "success" | "warning";

interface DataInterface {
  message: string;
  type: AlertTypes;
}

const show = ref(false);
const data = reactive<DataInterface>({
  type: "info",
  message: "",
});
const timeout = ref(0);

onMounted(() => {
  eventBus.$on(EnumEvents.showGlobalAlert, onShowAlert);
});

onBeforeUnmount(async () => {
  eventBus.$off(EnumEvents.showGlobalAlert, () => onShowAlert);
});

const returnAlertColor = computed(() => {
  switch (data.type) {
    case "warning":
      return "bg-yellow-500 border-yellow-600";
    case "info":
      return "bg-blue-500 border-blue-600";
    case "success":
      return "bg-green-500 border-green-600";
    case "error":
      return "bg-red-500 border-red-600";
    default:
      return "bg-neutral-500 border-neutral-600";
  }
});

function onShowAlert({ type, message }: DataInterface) {
  show.value = true;
  data.type = type;
  data.message = message;
  timeout.value = setTimeout(() => {
    onClose();
  }, 3000);
}

function onClose() {
  show.value = false;
  clearTimeout(timeout.value);
}
</script>
