<template>
  <div class="w-full h-full">
    <img
      class="object-fill w-full h-full"
      src="@/assets/images/inventory/bg.jpg"
      alt="Arena"
    />
    <div class="fixed top-16 right-0 bottom-0 left-0 flex">
      <div
        class="grid justify-center gap-4 px-4"
        style="grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr)"
      >
        <div />
        <div>
          <div class="equipment bg-black bg-opacity-50 text-white rounded-lg">
            <div class="boots">
              <img src="@/assets/images/equipment/starter/boots.jpg" alt="" />
            </div>
            <div class="earring_left">
              <img src="@/assets/images/equipment/starter/earring.jpg" alt="" />
            </div>
            <div class="earring_right">
              <img src="@/assets/images/equipment/starter/earring.jpg" alt="" />
            </div>
            <div class="gloves">
              <img src="@/assets/images/equipment/starter/gloves.jpg" alt="" />
            </div>
            <div class="head">
              <img src="@/assets/images/equipment/starter/head.jpg" alt="" />
            </div>
            <div class="ring_left">
              <img src="@/assets/images/equipment/starter/ring.jpg" alt="" />
            </div>
            <div class="ring_right">
              <img src="@/assets/images/equipment/starter/ring.jpg" alt="" />
            </div>
            <div class="shield">
              <img src="@/assets/images/equipment/starter/shield.jpg" alt="" />
            </div>
            <div class="suit">
              <img src="@/assets/images/equipment/starter/suit.jpg" alt="" />
            </div>
            <div class="weapon">
              <img src="@/assets/images/equipment/starter/weapon.jpg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div
            class="text-white py-4 bg-black bg-opacity-80 px-4 rounded-lg overflow-y-auto overflow-x-auto h-[80vh]"
          >
            <h2 class="uppercase font-bold mb-2">Help</h2>
            <p class="text-sm opacity-75">
              Click on item to enhance it. In order to make successful upgrade
              you need to have enough materials Click on item to enhance it. In
              order to make successful upgrade you need to have enough materials
              Click on item to enhance it. In order to make successful upgrade
              you need to have enough materials
            </p>
            <ul class="flex flex-col gap-1 mt-4 text-sm">
              <li class="flex items-center gap-4">
                <div
                  class="bg-black rounded overflow-hidden w-8 h-8 flex items-center justify-center"
                >
                  <img
                    class="block w-6 h-6"
                    src="/images/equipment/craft/starter_stone.png"
                    alt=""
                  />
                </div>
                <div>Starter Stone: 1</div>
              </li>
              <li class="flex items-center gap-4">
                <div
                  class="bg-black rounded overflow-hidden w-8 h-8 flex items-center justify-center"
                >
                  <img
                    class="block w-6 h-6"
                    src="/images/equipment/craft/common_stone.png"
                    alt=""
                  />
                </div>
                <div>Common Stone: 1</div>
              </li>
              <li class="flex items-center gap-4">
                <div
                  class="bg-black rounded overflow-hidden w-8 h-8 flex items-center justify-center"
                >
                  <img
                    class="block w-6 h-6"
                    src="/images/equipment/craft/rare_stone.png"
                    alt=""
                  />
                </div>
                <div>Rare Stone: 1</div>
              </li>
              <li class="flex items-center gap-4">
                <div
                  class="bg-black rounded overflow-hidden w-8 h-8 flex items-center justify-center"
                >
                  <img
                    class="block w-6 h-6"
                    src="/images/equipment/craft/epic_stone.png"
                    alt=""
                  />
                </div>
                <div>Epic Stone: 1</div>
              </li>
              <li class="flex items-center gap-4">
                <div
                  class="bg-black rounded overflow-hidden w-8 h-8 flex items-center justify-center"
                >
                  <img
                    class="block w-6 h-6"
                    src="/images/equipment/craft/legendary_stone.png"
                    alt=""
                  />
                </div>
                <div>Legendary Stone: 1</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CharacterInterface } from "@/api/Interfaces/Character/CharacterInterface";
interface Props {
  character: CharacterInterface;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.equipment {
  @apply grid p-3;
  * {
    //outline: 1px dashed red;
  }
  @apply gap-2;
  grid-template-columns: repeat(3, 64px);
  grid-template-rows: repeat(4, 64px);
  & > div {
    @apply flex items-center justify-center;
  }
  // prettier-ignore
  grid-template-areas:  'earringLeft    head       earringRight'
                        'gloves         suit              .'
                        'ringLeft         .           ringRight'
                        'weapon         boots            shield';
  .boots {
    grid-area: boots;
  }
  .earring_left {
    grid-area: earringLeft;
  }
  .earring_right {
    grid-area: earringRight;
  }
  .gloves {
    grid-area: gloves;
  }
  .head {
    grid-area: head;
  }
  .ring_left {
    grid-area: ringLeft;
  }
  .ring_right {
    grid-area: ringRight;
  }
  .shield {
    grid-area: shield;
  }
  .suit {
    grid-area: suit;
  }
  .weapon {
    grid-area: weapon;
  }
  img {
    @apply block w-[64px] h-[64px] object-contain border-2 border-black rounded overflow-hidden;
  }
}
</style>
