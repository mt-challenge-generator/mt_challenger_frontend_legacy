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

<script lang="ts">
import Button from "primevue/button";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Generator",
  components: {
    Button,
  },
  setup() {
    const router = useRouter();
    function handleGetStartedBtn() {
      router.push({ name: "select-test-set" });
    }
    return {
      handleGetStartedBtn,
    };
  },
});
</script>
