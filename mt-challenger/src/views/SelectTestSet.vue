<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <router-view />
    <TestSets />
  </div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
import TestSets from "../components/TestSets";

export default {
  name: "SelectTestSet",
  components: {
    Breadcrumb,
    TestSets,
  },
  data() {
    return {
      home: { icon: "pi pi-home", to: { name: "generator" } },
      items: [
        {
          label: "Select Test Set",
          to: { name: "select-test-set" },
        },
      ],
    };
  },
};
</script>
