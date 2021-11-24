<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <router-view />
        <TestSets />
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import TestSets from '../components/TestSets.vue'

export default {
    name: 'SelectTestSet',
    components: {
        Breadcrumb, 
        TestSets
    },
    data() {
		return {
            
            home: {icon: 'pi pi-home', to: '/generator'},
			items: [{
                label: 'Select Test Set',
                to: '/generator'
            },
            {
                label: 'Select Sentence',
                to: '/generator/select-sentence'
            }]
		}
	},
    methods: {
        handleNextBtn() {
            this.$router.push({name: 'select-sentence'})
        },
        handleSelectBtn(id) {
            // TO DO: get list of sentences by test set id
            console.log('test set id', id)
            this.$router.push({name: 'select-sentence', params: { setid: id}})
        }
    }
}
</script>
