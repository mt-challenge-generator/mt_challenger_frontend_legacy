<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <router-view />
        <SentenceEditor />
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import SentenceEditor from '../components/SentenceEditor.vue'

export default {
    name: 'EditSentence',
    components: {
        Breadcrumb,
        SentenceEditor
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
            }]
		}
	}
}
</script>
