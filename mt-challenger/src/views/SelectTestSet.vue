<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <router-view />
    <TestSets />
  </div>
</template>

<script lang="ts">
import Breadcrumb from "primevue/breadcrumb";
import TestSets from "../components/TestSets.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectTestSet",
  components: {
    Breadcrumb,
    TestSets,
  },
  setup() {
    const home = { icon: "pi pi-home", to: { name: "generator" } };
    const items = [
      {
        label: "Select Test Set",
        to: { name: "select-test-set" },
      },
    ];
    return {
      home,
      items,
    };
  },
});
</script>
