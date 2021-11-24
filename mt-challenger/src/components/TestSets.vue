<template>
    <div class="card mt-5">
        <DataView :value="$store.state.testsets" layout="grid" :paginator="true" :rows="4">
            <template #header>
                <div class="">
                    List of available test sets
                </div>
            </template>
            <template #empty>
                No sets found.
            </template>
            <template #loading>
                Loading set list. Please wait.
            </template>
            <template #grid="slotProps">
                <Card class="m-3">
                    <template #title>
                        {{slotProps.data.name}}
                    </template>
                    <template #content>
                        {{slotProps.data.description}}
                    </template>
                    <template #footer >
                        <div class="flex justify-content-center">
                            <Button label="Select" @click="handleSelectBtn(slotProps.data)" class="p-button-link" />
                        </div>
                    </template>
                </Card>
            </template>
        </DataView>
    </div>
</template>

<script>
import DataView from 'primevue/dataview'
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
    name: 'TestSets',
    components: {
        Button,
        DataView,
        Card
    },
    methods: {
        handleSelectBtn(testset) {
            // TO DO: get list of sets
            console.log('test set', testset)
            this.$store.commit('setCurrentTestSet', testset)
            this.$router.push({name: 'select-sentence', params: { setid: testset.id}})
        }
    }
}
</script>