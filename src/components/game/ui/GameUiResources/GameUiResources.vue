<template>
  <div class="fixed top-2 left-1/2 flex gap-4 whitespace-nowrap">
    <div
      class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
    >
      <img
        class="block w- h-4"
        src="@/assets/images/svg/energy.svg"
        alt="Energy"
      />
      <div class="font-border--black text-xs">50/ 300</div>
    </div>
    <div
      class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
    >
      <img class="block w- h-4" src="@/assets/images/svg/gold.svg" alt="Gold" />
      <div
        class="font-border--black text-xs"
        v-text="numberWithCommas(100000000)"
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
      <div class="font-border--black text-xs" v-text="numberWithCommas(1000)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
function numberWithCommas(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>
