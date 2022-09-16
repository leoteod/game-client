<template>
  <div class="w-full h-full">
    <img
      class="object-fill w-full h-full"
      src="@/assets/images/campaign/bg.jpg"
      alt="Arena"
    />
    <game-ui-full-loader v-if="isLoading" />
    <div
      class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center"
      v-else
    >
      <div class="flex items-center flex-col gap-4">
        <template v-if="campaignProgress.data">
          <div class="text-center">
            <h1
              class="text-lg font-border--black font-bold text-yellow-500 uppercase"
              v-text="`Mode: ${returnCurrentStageData?.campaign?.tier}`"
            />
            <div
              v-if="returnNextStageData"
              class="text-sm font-bold text-red-500 uppercase"
              v-text="
                `Next Stage Recommended Power: ${numberWithCommas(
                  returnNextStageData
                    ? returnNextStageData?.monster?.stats?.power || 0
                    : returnCurrentStageData.campaign?.power
                )}`
              "
            />
            <div
              class="text-sm font-bold text-orange-500 uppercase"
              v-text="'Finished all stages. Congrats!'"
              v-else
            />
          </div>
          <div class="flex items-center gap-4">
            <div
              class="relative bg-black text-white w-20 h-20 flex items-center justify-center rounded-lg border border-black border-opacity-25 opacity-50"
              :class="{
                'opacity-100':
                  campaign.id <= returnCurrentStageData?.campaign_id,
                'opacity-100 border-yellow-400 border-opacity-100 border-2 bg-yellow-900':
                  campaign.id === returnCurrentStageData?.campaign_id + 1,
                'border-green-400 border-opacity-100 border-2 bg-green-900 animate-bounce':
                  campaign.id === returnCurrentStageData?.campaign_id,
              }"
              v-for="(campaign, campaignIndex) in returnCampaigns"
              :key="campaign.id"
              @click="
                campaign.id < returnCurrentStageData?.campaign_id
                  ? onBattlePreviousStage(campaign.id)
                  : null
              "
            >
              <div class="flex flex-col gap-2 items-center">
                <div class="text-xs" v-text="`Stage ${campaignIndex + 1}`" />
                <div
                  class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
                >
                  <img
                    class="block w- h-4"
                    src="@/assets/images/svg/energy.svg"
                    alt="Energy"
                  />
                  <div
                    class="font-border--black text-xs"
                    v-text="`${numberWithCommas(campaign.required_energy)}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="flex items-center gap-4">
          <div v-if="!campaignProgress.data">
            <div class="relative">
              <button
                class="pointer-events-none absolute top-0 right-0 bottom-0 left-0 bg-green-700 px-4 py-2 text-sm uppercase rounded-sm text-white font-bold animate-ping"
                type="button"
                v-text="'Start Campaign'"
              />
              <button
                class="bg-green-500 px-4 py-2 text-sm uppercase rounded-sm text-white font-bold"
                type="button"
                @click="onBattleNextStage()"
                v-text="'Start Campaign'"
              />
            </div>
          </div>
          <template v-else>
            <div>
              <button
                class="border-green-400 border-2 bg-green-900 px-4 py-2 text-sm uppercase rounded-sm text-white font-bold"
                type="button"
                @click="onBattleCurrentStage()"
                v-text="'Battle current stage'"
              />
            </div>
            <div
              v-if="returnNextStageData ? returnNextStageData.id < 35 : false"
            >
              <button
                class="border-yellow-400 border-2 bg-yellow-900 px-4 py-2 text-sm uppercase rounded-sm text-white font-bold"
                type="button"
                @click="onBattleNextStage()"
                v-text="'Go to next stage'"
              />
            </div>
          </template>
        </div>
        <div
          v-if="campaignProgress.data"
          :class="{
            'animate-pulse': returnNextStageData && ableToShowNextInfo,
          }"
        >
          <h2
            class="text-center font-border--black text-lg mb-2 text-green-400"
            :class="{ 'text-yellow-300': ableToShowNextInfo }"
            v-text="`${ableToShowNextInfo ? 'Next' : 'Current'} Stage Rewards`"
          />
          <div class="flex flex-col gap-2 items-center">
            <div class="flex gap-4 whitespace-nowrap">
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <span
                  class="text-xs font-border--black font-bold text-blue-500"
                  v-text="'EXP'"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="
                    `${numberWithCommas(
                      returnRewardsInfo?.minExp
                    )} ~ ${numberWithCommas(returnRewardsInfo?.maxExp)}`
                  "
                />
              </div>
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <img
                  class="block w- h-4"
                  src="@/assets/images/svg/gold.svg"
                  alt="Gold"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="
                    `${numberWithCommas(
                      returnRewardsInfo?.minGold
                    )} ~ ${numberWithCommas(returnRewardsInfo?.maxGold)}`
                  "
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
                  v-text="
                    `${numberWithCommas(
                      returnRewardsInfo?.minDiamonds
                    )} ~ ${numberWithCommas(returnRewardsInfo?.maxDiamonds)}`
                  "
                />
              </div>
            </div>
            <div class="flex gap-4 whitespace-nowrap">
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <img
                  class="block w- h-4"
                  src="/images/equipment/craft/starter_stone.png"
                  alt="Craft Starter Material"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="
                    `${numberWithCommas(returnRewardsInfo?.starter_stone)}`
                  "
                />
              </div>
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <img
                  class="block w- h-4"
                  src="/images/equipment/craft/common_stone.png"
                  alt="Craft Common Material"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="
                    `${numberWithCommas(returnRewardsInfo?.common_stone)}`
                  "
                />
              </div>
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <img
                  class="block w- h-4"
                  src="/images/equipment/craft/rare_stone.png"
                  alt="Craft Rare Material"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="`${numberWithCommas(returnRewardsInfo?.rare_stone)}`"
                />
              </div>
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <img
                  class="block w- h-4"
                  src="/images/equipment/craft/epic_stone.png"
                  alt="Craft Epic Material"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="`${numberWithCommas(returnRewardsInfo?.epic_stone)}`"
                />
              </div>
              <div
                class="bg-black bg-opacity-75 border border-black text-white rounded-lg px-2 py-0.5 flex gap-1 items-center"
              >
                <img
                  class="block w- h-4"
                  src="/images/equipment/craft/legendary_stone.png"
                  alt="Craft Legendary Material"
                />
                <div
                  class="font-border--black text-xs"
                  v-text="
                    `${numberWithCommas(returnRewardsInfo?.legendary_stone)}`
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import GameUiFullLoader from "@/components/game/ui/GameUiFullLoader/GameUiFullLoader.vue";
import { useFormat } from "@/composables/useFormat";
import { CampaignProgressController } from "@/api/Controllers/Http/CampaignProgress/CampaignProgressController";
import type { CampaignProgressInterface } from "@/api/Interfaces/CampaignProgress/CampaignProgressInterface";
import { CampaignController } from "@/api/Controllers/Http/Campaign/CampaignController";
import type { CampaignInterface } from "@/api/Interfaces/Campaign/CampaignInterface";
import eventBus from "@/events/eventBus";
import { EnumEvents } from "@/events/events";

const { numberWithCommas } = useFormat();

const showNextInfo = ref(false);
const showNextInfoInterval = ref(0);

const ableToShowNextInfo = computed(() => {
  return returnNextStageData.value && showNextInfo.value;
});

onMounted(async () => {
  await onGetCampaigns();
  await onGetCampaignProgress();
  showNextInfoInterval.value = setInterval(() => {
    showNextInfo.value = !showNextInfo.value;
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(showNextInfoInterval.value);
});

const { scopedIndex: getCampaigns, loading: campaignLoading } =
  CampaignController();
const campaigns = reactive<{ data: CampaignInterface[] | [] }>({
  data: [],
});
async function onGetCampaigns() {
  const response = await getCampaigns();
  if (response.success) {
    campaigns.data = response.data as CampaignInterface[];
  }
}

const returnCampaigns = computed(() => {
  const currentStageId = returnCurrentStageData.value?.campaign_id || 1;
  const findCampaignTier = campaigns.data.find(
    (obj) => obj.id === currentStageId
  );
  return campaigns.data.filter((obj) => obj.tier === findCampaignTier!.tier);
});

const returnCurrentStageData = computed(() => {
  return (
    campaignProgress.data || {
      campaign_id: campaigns.data[0]?.id,
      campaign: campaigns.data[0],
    }
  );
});

const returnNextStageData = computed(() => {
  let currentStageId = returnCurrentStageData.value?.campaign_id || 1;
  if (currentStageId > campaigns.data.length) {
    currentStageId = campaigns.data.length;
  }
  return campaigns.data.find((obj) => obj.id === currentStageId + 1);
});

const returnRewardsInfo = computed(() => {
  if (ableToShowNextInfo.value) {
    return returnNextStageData.value?.rewards;
  } else {
    return returnCurrentStageData.value?.campaign?.rewards;
  }
});

const {
  scopedIndex: getProgress,
  previous: onPreviousStage,
  next: onNextStage,
  current: onCurrentStage,
  loading: progressLoading,
} = CampaignProgressController();
const campaignProgress = reactive<{ data: CampaignProgressInterface | null }>({
  data: null,
});
async function onGetCampaignProgress() {
  const response = await getProgress();
  if (response.success) {
    campaignProgress.data = response.data as CampaignProgressInterface;
  }
}

const isLoading = computed(() => {
  return progressLoading.value || campaignLoading.value;
});

async function onBattlePreviousStage(campaignId: number) {
  const response = await onPreviousStage(campaignId);
  if (response.success) {
    console.log("WON");
    await onGetCampaignProgress();
    eventBus.$emit(EnumEvents.reloadCharacter);
    eventBus.$emit(EnumEvents.reloadResources);
  } else {
    console.log("lost");
    eventBus.$emit(EnumEvents.reloadResources);
  }
}

async function onBattleCurrentStage() {
  const response = await onCurrentStage();
  if (response.success) {
    console.log("WON");
    await onGetCampaignProgress();
    eventBus.$emit(EnumEvents.reloadCharacter);
    eventBus.$emit(EnumEvents.reloadResources);
  } else {
    console.log("lost");
    eventBus.$emit(EnumEvents.reloadResources);
  }
}

async function onBattleNextStage() {
  const response = await onNextStage();
  if (response.success) {
    console.log("WON");
    await onGetCampaignProgress();
    eventBus.$emit(EnumEvents.reloadCharacter);
    eventBus.$emit(EnumEvents.reloadResources);
  } else {
    console.log("lost");
    eventBus.$emit(EnumEvents.reloadResources);
  }
}
</script>
