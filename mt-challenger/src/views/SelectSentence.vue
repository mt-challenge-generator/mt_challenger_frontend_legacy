<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <router-view />
        <TestItems />
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import TestItems from '../components/TestItems.vue'

export default {
    name: 'SelectSentence',
    components: {
        Breadcrumb,
        TestItems
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
            }]
		}
	}
}
</script>
