<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <router-view />
    <SentenceEditor />
  </div>
</template>

<script lang="ts">
import Breadcrumb from "primevue/breadcrumb";
import SentenceEditor from "../components/SentenceEditor.vue";
import { useStore } from "vuex";

export default {
  name: "EditSentence",
  components: {
    Breadcrumb,
    SentenceEditor,
  },
  setup() {
    const store = useStore();
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
    ];
    return {
      home,
      items,
    };
  },
};
</script>
