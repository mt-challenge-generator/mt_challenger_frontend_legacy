<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <router-view />
        <div class="flex justify-content-end">
            <Button label="Save" class="p-button-success m-3" icon="pi pi-save" iconPos="left" @click="handleNextBtn" />
        </div>
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'

export default {
    name: 'ValidateSentences',
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
            },
            {
                label: 'Validate Sentences',
                to: '/generator/validate-sentences'
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
