<template>
  <div>
    <div class="card my-3">
      <div class="text-center">
        <p>
          <strong>Source sentence:</strong>
          {{ store.state.currentTestItem.source }}
        </p>
        <p>
          <strong>Target rule:</strong>
          {{ store.state.currentTestItem.target.prefix }}
          {{ store.state.currentTestItem.target.rule }}
        </p>
      </div>
      <div class="flex flex-row">
        <Fieldset legend="Editor" class="col-10">
          <div class="flex flex-wrap overflow-y-scroll">
            <div v-for="(item, index) in sentenceTemplate" :key="index">
              <Button
                v-if="item.is_selected"
                :label="item.label"
                class="py-1 px-2 m-1 p-button-help p-button-rounded"
                @click="handleItemClick(index)"
              />
              <Button
                v-else
                :label="item.label"
                class="py-1 px-2 m-1 p-button-help p-button-outlined p-button-rounded"
                @click="handleItemClick(index)"
              />
            </div>
          </div>
        </Fieldset>
        <div class="flex justify-content-end align-items-center col-2">
          <Button
            label="Generate"
            class="m-3"
            icon="pi pi-cog"
            iconPos="left"
            @click="handleGenerateBtn"
          />
        </div>
      </div>
    </div>
    <div class="card my-3 flex">
      <Panel header="Bucket" class="col-5">
        <div class="flex flex-wrap overflow-y-scroll">
          <div v-for="(item, index) in store.state.buckets" :key="index">
            <Button
              v-if="item.is_selected"
              :label="item.name"
              class="py-1 px-2 m-1 p-button-help p-button-rounded"
              @click="handleBucketClick(index)"
            />
            <Button
              v-else
              :label="item.name"
              class="py-1 px-2 m-1 p-button-help p-button-outlined p-button-rounded"
              @click="handleBucketClick(index)"
            />
          </div>
        </div>
      </Panel>
      <div class="flex justify-content-center align-items-center col-2">
        <Button
          label="Apply bucket"
          class="m-3 p-button-outlined p-button-success"
          icon="pi pi-angle-double-up"
          iconPos="left"
          @click="handleApplyBucketBtn"
        />
      </div>
      <Panel class="col-5">
        <template v-if="!store.state.currentBucket.name" #header>
          Bucket Preview
        </template>
        <template v-else #header>
          Bucket Preview: {{ store.state.currentBucket.name }}
        </template>
        <div class="flex flex-wrap overflow-y-scroll">
          <Button
            v-for="item in store.state.currentBucket.items"
            :key="item"
            :label="item"
            disabled="true"
            class="py-1 px-2 m-1 p-button-help p-button-outlined p-button-rounded"
          />
        </div>
      </Panel>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "primevue/button";
import Panel from "primevue/panel";
import Fieldset from "primevue/fieldset";
import { PLUS, PLUS_TEMPLATE_ITEM } from "@/utils";
import { generateSentences, deselect_all_else } from "@/utils";
import { useStore } from "vuex";
import { defineComponent, onMounted, ref } from "vue";
import { key } from "@/store";
import { TemplateItem } from "@/interfaces/template-item.interface";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SentenceEditor",
  components: {
    Button,
    Panel,
    Fieldset,
  },
  setup() {
    const sentenceTemplate = ref([] as TemplateItem[]);
    const insertIndex = ref(null as null | number);
    const isInsertion = ref(false);
    const store = useStore(key);
    const router = useRouter();
    onMounted(() => {
      sentenceTemplate.value = store.getters.getTemplateFromCurrentTestItem;
      store.commit("setCurrentSentenceTemplate", sentenceTemplate.value);
    });

    function handleGenerateBtn() {
      const sentences = generateSentences(sentenceTemplate.value);
      store.commit("setGeneratedSentences", sentences);
      router.push({
        name: "validate-sentences",
        params: {
          setid: store.state.currentTestSet.id,
          itemid: store.state.currentTestItem.id,
        },
      });
    }
    function handleApplyBucketBtn() {
      if (insertIndex.value != null && store.state.currentBucket.is_selected) {
        sentenceTemplate.value[insertIndex.value].label =
          store.state.currentBucket.name;
        sentenceTemplate.value[insertIndex.value].bucket = [
          ...store.state.currentBucket.items,
        ];
        sentenceTemplate.value[insertIndex.value].is_selected = false;
        if (isInsertion.value) {
          sentenceTemplate.value.splice(
            insertIndex.value,
            0,
            PLUS_TEMPLATE_ITEM()
          );
          sentenceTemplate.value.splice(
            insertIndex.value + 2,
            0,
            PLUS_TEMPLATE_ITEM()
          );
        }
        store.commit("setCurrentSentenceTemplate", sentenceTemplate.value);
        insertIndex.value = null;
      }
    }
    function handleBucketClick(index: number) {
      deselect_all_else(store.state.buckets, index);
      if (store.state.buckets[index].is_selected) {
        store.commit("setCurrentBucket", store.state.buckets[index]);
      } else {
        store.commit("clearCurrentBucket");
      }
    }
    function handleItemClick(index: number) {
      deselect_all_else(sentenceTemplate.value, index);
      if (sentenceTemplate.value[index].is_selected) {
        insertIndex.value = index;
        isInsertion.value = sentenceTemplate.value[index].label === PLUS;
      } else {
        insertIndex.value = null;
        isInsertion.value = false;
      }
    }
    return {
      store,
      sentenceTemplate,
      insertIndex,
      isInsertion,
      handleGenerateBtn,
      handleApplyBucketBtn,
      handleBucketClick,
      handleItemClick,
    };
  },
});
</script>
