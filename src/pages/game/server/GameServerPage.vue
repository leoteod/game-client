<template>
  <div class="w-screen h-screen">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <pre>
        {{ servers.data }}
      </pre>
      <ul>
        <li
          @click="
            $router.push({
              query: {
                id: server.id,
              },
            })
          "
          v-for="server in servers.data"
          :key="server.id"
        >
          {{ server.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { ServersController } from "@/api/Controllers/Http/Server/ServersController";
import type { ServerInterface } from "@/api/Interfaces/Server/ServerInterface";

const servers = reactive<{ data: ServerInterface | object }>({
  data: {},
});
const { index, loading } = ServersController();

onMounted(() => {
  onGetServers();
});

async function onGetServers() {
  const response = await index();
  if (response.success) {
    servers.data = response.data as ServerInterface;
  }
}
</script>
