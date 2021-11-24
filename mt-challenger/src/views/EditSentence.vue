<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <router-view />
        <div class="flex justify-content-end">
            <Button label="Next" class="m-3" icon="pi pi-chevron-right" iconPos="right" @click="handleNextBtn" />
        </div>
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'

export default {
    name: 'EditSentence',
    components: {
        Breadcrumb,
        Button
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
            },
            {
                label: 'Edit Sentence',
                to: '/generator/edit-sentence'
            }]
		}
	},
    methods: {
        handleNextBtn() {
            this.$router.push({name: 'validate-sentences'})
        }
    }
}
</script>
