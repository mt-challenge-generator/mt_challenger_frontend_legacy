<template>
  <div class="flex align-items-center justify-content-center">
    <div class="text-center">
      <h1>A generator of challenges for Machine Translation</h1>
      <Button
        label="Get started"
        class="p-button-rounded"
        icon="pi pi-chevron-right"
        iconPos="right"
        @click="handleGetStartedBtn"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "Generator",
  components: {
    Button,
  },
  data() {
    return {};
  },
  methods: {
    handleGetStartedBtn() {
      this.$router.push({ name: "select-test-set" });
    },
  },
};
</script>
