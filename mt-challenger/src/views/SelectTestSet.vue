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
    name: 'SelectTestSet',
    components: {
        Breadcrumb,
        Button
    },
    data() {
		return {
            home: {icon: 'pi pi-home', to: '/generator'},
			items: [{
                label: 'Select Test Set',
                to: '/generator/select-test-set'
            }]
		}
	},
    methods: {
        handleNextBtn() {
            this.$router.push({name: 'select-sentence'})
        }
    }
}
</script>
