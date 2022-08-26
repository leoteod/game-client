<template>
  <div>
    Main town
    <pre>
    {{ props.character }}
  </pre
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  character: Object,
});
</script>
