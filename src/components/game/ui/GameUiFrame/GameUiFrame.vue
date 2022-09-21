<template>
  <div class="frame__bg" />
  <div data-tauri-drag-region class="frame">
    <div class="frame__button frame__button--minimize" id="frame-minimize">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>
    </div>
    <!--    <div class="titlebar-button" id="titlebar-maximize">-->
    <!--      <img-->
    <!--        src="https://api.iconify.design/mdi:window-maximize.svg"-->
    <!--        alt="maximize"-->
    <!--      />-->
    <!--    </div>-->
    <div class="frame__button frame__button--close" id="frame-close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { appWindow } from "@tauri-apps/api/window";
import { nextTick, onMounted } from "vue";

onMounted(() => {
  nextTick(() => {
    document
      .getElementById("frame-minimize")
      ?.addEventListener("click", () => appWindow.minimize());
    // document
    //   .getElementById("frame-maximize")
    //   ?.addEventListener("click", () => appWindow.toggleMaximize());
    document
      .getElementById("frame-close")
      ?.addEventListener("click", () => appWindow.close());
  });
});
</script>

<style lang="scss" scoped>
.frame {
  @apply h-8 select-none;
  @apply cursor-move;
  @apply flex justify-end;
  @apply fixed top-0 right-0 left-0 z-[100];
  @apply bg-black bg-opacity-5 backdrop-blur;
  &__bg {
    @apply fixed top-0 right-0 bottom-0 left-0 z-[101] pointer-events-none;
    @apply border border-black border-opacity-50;
  }
  &__button {
    @apply h-8 w-8;
    @apply inline-flex justify-center items-center;
    &--minimize {
      @apply cursor-pointer;
      @apply hover:bg-white;
    }
    &--close {
      @apply cursor-pointer;
      @apply hover:bg-red-500 hover:text-white;
    }
  }
}
</style>
