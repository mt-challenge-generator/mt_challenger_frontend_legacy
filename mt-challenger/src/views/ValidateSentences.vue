<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <router-view />
        <GeneratedSentences />
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import GeneratedSentences from '../components/GeneratedSentences.vue'

export default {
    name: 'ValidateSentences',
    components: {
        Breadcrumb,
        GeneratedSentences
    },
    data() {
		return {
            home: {icon: 'pi pi-home', to: {name: 'generator'}},
			items: [{
                label: 'Select Test Set',
                to: {name: 'select-test-set'}
            },
            {
                label: 'Select Sentence',
                to: {name: 'select-sentence', params: { setid: this.$store.state.currentTestSet.id}}
            },
            {
                label: 'Edit Sentence',
                to: {name: 'edit-sentence', 
                    params: { 
                        setid: this.$store.state.currentTestSet.id,
                        itemid: this.$store.state.currentTestItem.id
                    }
                }
            },
            {
                label: 'Validate Sentences',
                to: {name: 'validate-sentences', 
                    params: { 
                        setid: this.$store.state.currentTestSet.id,
                        itemid: this.$store.state.currentTestItem.id
                    }
                }
            }]
		}
	},
    methods: {
        handleSaveBtn() {
            // TO DO
        }
    }
}
</script>
