<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <router-view />
    <GeneratedSentences />
  </div>
</template>

<script lang="ts">
import Breadcrumb from "primevue/breadcrumb";
import GeneratedSentences from "../components/GeneratedSentences.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default {
  name: "ValidateSentences",
  components: {
    Breadcrumb,
    GeneratedSentences,
  },
  setup() {
    const store = useStore(key);
    const home = { icon: "pi pi-home", to: { name: "generator" } };
    const items = [
      {
        label: "Select Test Set",
        to: { name: "select-test-set" },
      },
      {
        label: "Select Sentence",
        to: {
          name: "select-sentence",
          params: { setid: store.state.currentTestSet.id },
        },
      },
      {
        label: "Edit Sentence",
        to: {
          name: "edit-sentence",
          params: {
            setid: store.state.currentTestSet.id,
            itemid: store.state.currentTestItem.id,
          },
        },
      },
      {
        label: "Validate Sentences",
        to: {
          name: "validate-sentences",
          params: {
            setid: store.state.currentTestSet.id,
            itemid: store.state.currentTestItem.id,
          },
        },
      },
    ];
    function handleSaveBtn() {
      console.log("handling save button");
    }
    return {
      store,
      home,
      items,
      handleSaveBtn,
    };
  },
};
</script>
