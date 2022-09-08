<template>
  <div class="bg-gray-100 h-screen w-screen">
    <div class="flex items-center justify-center h-full">
      <form @submit.prevent="onRegister" class="bg-gray-200 p-10">
        <div class="mb-4">
          <label class="block mb-1 text-sm font-semibold" for="email"
            >Email</label
          >
          <input
            v-model.trim="form.email"
            class="border py-2 px-4"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-1 text-sm font-semibold" for="password"
            >Password</label
          >
          <input
            v-model.trim="form.password"
            class="border py-2 px-4"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div>
          <button class="bg-gray-900 text-white w-full py-2" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import router from "@/router";
import { AccountsController } from "@/api/Controllers/Http/Account/AccountsController";

const form = reactive({
  email: "nemanja.dragun@gmail.com",
  password: "12345678",
  password_confirmation: "",
});

async function onRegister() {
  const { register } = AccountsController();
  form.password_confirmation = form.password;
  const response = await register(form);
  if (response.success) {
    await router.push("/login");
  }
}
</script>
