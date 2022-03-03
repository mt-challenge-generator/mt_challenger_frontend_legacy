<template>
  <div class="card mt-5">
    <DataTable
      :value="store.state.testItems"
      :paginator="true"
      class=""
      :rows="5"
      dataKey="id"
      :rowHover="true"
      v-model:selection="selectedItem"
      :loading="loading"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 20]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <div>{{ store.state.currentTestSet.name }}</div>
          <div class="font-light">
            {{ store.state.currentTestSet.description }}
          </div>
        </div>
      </template>
      <template #empty> No items found in this set. </template>
      <template #loading> Loading set items. Please wait. </template>
      <Column selectionMode="single" headerStyle="width: 3rem"></Column>
      <Column field="source" header="Source sentence" style="min-width: 14rem">
        <template #body="{ data }">
          {{ data.source }}
        </template>
      </Column>
    </DataTable>
    <div class="flex justify-content-end">
      <Button
        label="Next"
        class="m-3"
        icon="pi pi-chevron-right"
        iconPos="right"
        @click="handleNextBtn"
        :disabled="!selectedItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import { ref } from "vue";
import { TestItem } from "@/interfaces/test-item.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestSets",
  components: {
    Button,
    DataTable,
    Column,
  },
  setup() {
    const store = useStore(key);
    const router = useRouter();
    const selectedItem = ref<TestItem>();
    const loading = ref(false);
    function handleNextBtn() {
      store.commit("setCurrentTestItem", selectedItem);
      router.push({
        name: "edit-sentence",
        params: {
          setid: store.state.currentTestSet.id,
          itemid: store.state.currentTestItem.id,
        },
      });
    }
    return {
      store,
      selectedItem,
      loading,
      handleNextBtn,
    };
  },
});
</script>
