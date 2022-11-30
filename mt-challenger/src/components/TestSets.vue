<template>
  <div class="card mt-5">
    <DataView
      :value="store.state.testSets"
      layout="grid"
      :paginator="true"
      :rows="4"
    >
      <template #header>
        <div class="">List of available test sets</div>
      </template>
      <template #empty> No sets found. </template>
      <template #loading> Loading set list. Please wait. </template>
      <template #grid="slotProps">
        <Card class="m-3">
          <template #title>
            {{ slotProps.data.name }}
          </template>
          <template #content>
            {{ slotProps.data.description }}
          </template>
          <template #footer>
            <div class="flex justify-content-center">
              <Button
                label="Select"
                @click="handleSelectBtn(slotProps.data)"
                class="p-button-link"
              />
            </div>
          </template>
        </Card>
      </template>
    </DataView>
  </div>
</template>

<script lang="ts">
import DataView from "primevue/dataview";
import Card from "primevue/card";
import Button from "primevue/button";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { TestSet } from "@/interfaces/test-set.interface";
import { defineComponent } from "vue";
import { key } from "@/store";

export default defineComponent({
  name: "TestSets",
  components: {
    Button,
    DataView,
    Card,
  },
  setup() {
    const store = useStore(key);
    const router = useRouter();
    function handleSelectBtn(testset: TestSet) {
      store.commit("setCurrentTestSet", testset);
      router.push({
        name: "select-sentence",
        params: { setid: testset.id },
      });
    }
    return {
      store,
      handleSelectBtn,
    };
  },
});
</script>
