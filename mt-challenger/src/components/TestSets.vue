<template>
    <div class="card mt-5">
            <DataView :value="testsets" layout="grid" :paginator="true" :rows="4">
                <template #header>
                    <div class="">
                        List of available test sets
                    </div>
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
                                <Button icon="pi pi-check" label="Select" @click="handleSelectBtn(slotProps.data.id)" class="p-button-link" />
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
    data() {
        return {
            testsets: [
                {
                    id: 1,
                    name: 'Test Set 1',
                    description: "Test set for middle voice challenge"
                },
                {
                    id: 2,
                    name: 'Test Set 2',
                    description: "Test set for middle voice challenge"
                },
                {
                    id: 3,
                    name: 'Test Set 3',
                    description: "Test set for middle voice challenge"
                },
                {
                    id: 4,
                    name: 'Test Set 4',
                    description: "Test set for middle voice challenge"
                },{
                    id: 5,
                    name: 'Test Set 5',
                    description: "Test set for middle voice challenge"
                },
                {
                    id: 6,
                    name: 'Test Set 6',
                    description: "Test set for middle voice challenge"
                },
                {
                    id: 7,
                    name: 'Test Set 7',
                    description: "Test set for middle voice challenge"
                },
                {
                    id: 8,
                    name: 'Test Set 8',
                    description: "Test set for middle voice challenge"
                }
            ]
        }
    },
    methods: {
        handleSelectBtn(id) {
            // TO DO: get list of sentences by test set id
            console.log('test set id', id)
            this.$router.push({name: 'select-sentence', params: { setid: id}})
        }
    }
}
</script>