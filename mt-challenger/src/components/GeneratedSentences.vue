<template>
    <div class="card mt-5">
        <DataTable :value="$store.state.generatedSentences" :paginator="true" class="" :rows="5"
            dataKey="id" :rowHover="true" v-model:selection="selectedSentences"  :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,20]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            responsiveLayout="scroll">
            <template #header>
                <div class="flex justify-content-between align-items-center">
                    <div> {{$store.state.currentTestSet.name}}</div> 
                    <div class="font-light">{{$store.state.currentTestSet.description}}</div>
            </div>
            </template>
            <template #empty>
                No items sentences in this set.
            </template>
            <template #loading>
                Loading set items. Please wait.
            </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="source" header="Generated sentence" style="min-width: 14rem">
                <template #body="{data}">
                    {{data}}
                </template>
            </Column>
        </DataTable>
        <div class="flex justify-content-end">
            <Button label="Save" class="m-3" icon="pi pi-save" iconPos="left" @click="handleSaveBtn" />
        </div>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button'

export default {
    name: 'GeneratedSentences',
    components: {
        Button,
        DataTable,
        Column
    },
    data() {
        return {
            selectedSentences: null,
            loading: false,
        }
    },
    methods: {
        handleNextBtn() {
            // TO DO: get list of sets
            console.log('test item', this.selectedItem)
            this.$store.commit('setCurrentTestItem', this.selectedItem)
            this.$router.push({
                name: 'edit-sentence', 
                params: { 
                    setid: this.$store.state.currentTestSet.id,
                    itemid: this.$store.state.currentTestItem.id
                }
            })
        }
    }
}
</script>