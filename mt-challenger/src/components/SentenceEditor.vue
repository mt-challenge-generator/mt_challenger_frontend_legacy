<template>
    <div>
        <div class="card my-3">
            <div class="text-center">
                <p><strong>Source sentence:</strong> {{ $store.state.currentTestItem.source }}</p>
                <p><strong>Target rule:</strong> {{ $store.state.currentTestItem.target.prefix }} {{ $store.state.currentTestItem.target.rule }}</p>
            </div>
            <div class="flex flex-row">
                <Fieldset legend="Editor" class="col-10">
                    <div  class="flex flex-wrap overflow-y-scroll">
                        <div v-for="(item, index) in sentenceTemplate" :key="index">
                            <Button v-if="item.is_selected" :label="item.label" class="py-1 px-2 m-1 p-button-help p-button-rounded" @click="handleItemClick(index)"/>
                            <Button v-else :label="item.label" class="py-1 px-2 m-1 p-button-help p-button-outlined p-button-rounded" @click="handleItemClick(index)"/>
                        </div>
                    </div>
                </Fieldset>
                <div class="flex justify-content-end align-items-center col-2">
                    <Button label="Generate" class="m-3" icon="pi pi-cog" iconPos="left" @click="handleGenerateBtn" />
                </div>
            </div>
        </div>
        <div class="card my-3 flex">
            <Panel header="Bucket" class="col-5 ">
                <div class="flex flex-wrap overflow-y-scroll">
                    <div v-for="(item, index) in $store.state.buckets" :key="index">
                        <Button v-if="item.is_selected" :label="item.name" class="py-1 px-2 m-1 p-button-help p-button-rounded" @click="handleBucketClick(index)"/>
                        <Button v-else :label="item.name" class="py-1 px-2 m-1 p-button-help p-button-outlined p-button-rounded" @click="handleBucketClick(index)"/>
                    </div>
                </div>
            </Panel>
            <div class="flex justify-content-center align-items-center col-2">
                    <Button label="Apply bucket" class="m-3 p-button-outlined p-button-success" icon="pi pi-angle-double-up" iconPos="left" @click="handleApplyBucketBtn" />
                </div>
            <Panel class="col-5">
                <template v-if="!$store.state.currentBucket.name" #header>
                    Bucket Preview
                </template>
                <template v-else #header>
                    Bucket Preview: {{ $store.state.currentBucket.name }}
                </template>
                <div class="flex flex-wrap overflow-y-scroll">
                    <Button v-for="item in $store.state.currentBucket.items" :key="item" :label="item" disabled="true" class="py-1 px-2 m-1 p-button-help p-button-outlined p-button-rounded" />
                </div>
            </Panel>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import Fieldset from 'primevue/fieldset'
import { PLUS, PLUS_TEMPLATE_ITEM } from '../utils'
import { generateSentences, deselect_all_else } from '../utils'

export default {
    name: 'SentenceEditor',
    components: {
        Button,
        Panel,
        Fieldset,
    },
    data() {
        return {
            sentenceTemplate: [],
            insertIndex: null,
            isInsertion: false
        }
    },
    mounted() {
        this.sentenceTemplate = this.$store.getters.getTemplateFromCurrentTestItem
        this.$store.commit('setCurrentSentenceTemplate', this.sentenceTemplate)
    },
    methods: {
        handleGenerateBtn() {
            const sentences = generateSentences(this.sentenceTemplate)
            this.$store.commit('setGeneratedSentences', sentences)
            this.$router.push({
                name: 'validate-sentences', 
                params: { 
                    setid: this.$store.state.currentTestSet.id,
                    itemid: this.$store.state.currentTestItem.id
                }
            })
        },
        handleApplyBucketBtn() {
            if (this.insertIndex!=null && this.$store.state.currentBucket.is_selected) {
                    const templateItem = {
                    label : this.$store.state.currentBucket.name,
                    bucket : this.$store.state.currentBucket.items
                }
                this.sentenceTemplate[this.insertIndex] = templateItem
                if (this.isInsertion) {
                    this.sentenceTemplate.splice(this.insertIndex, 0, PLUS_TEMPLATE_ITEM())
                    this.sentenceTemplate.splice(this.insertIndex+2, 0, PLUS_TEMPLATE_ITEM())
                }
                this.$store.commit('setCurrentSentenceTemplate', this.sentenceTemplate)
                this.insertIndex = null
            }
        },
        handleBucketClick(index) {
            deselect_all_else(this.$store.state.buckets, index)
            if (this.$store.state.buckets[index].is_selected) {
                this.$store.commit('setCurrentBucket', this.$store.state.buckets[index])
            }
            else {
                this.$store.commit('clearCurrentBucket')
            }
        },
        handleItemClick(index) {
            deselect_all_else(this.sentenceTemplate, index)
            if (this.sentenceTemplate[index].is_selected) {
                this.insertIndex = index
                this.isInsertion = this.sentenceTemplate[index].label === PLUS
            }
            else {
                this.insertIndex = null
                this.isInsertion = false
            }
        }
    }
}
</script>