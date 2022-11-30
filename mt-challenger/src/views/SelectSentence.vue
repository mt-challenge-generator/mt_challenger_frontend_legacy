<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <router-view />
    <TestItems />
  </div>
</template>

<script lang="ts">
import Breadcrumb from "primevue/breadcrumb";
import TestItems from "../components/TestItems.vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectSentence",
  components: {
    Breadcrumb,
    TestItems,
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
    ];
    return {
      home,
      items,
    };
  },
});
</script>
