<template>
  <div class="w-screen h-screen">
    <img
      class="fixed top-0 right-0 bottom-0 left-0 object-fill w-full h-full"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/66853f18520863.562cad463d0eb.jpg"
      alt=""
    />
    <div class="relative" v-if="loading">Loading...</div>
    <div class="relative" v-else>
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
