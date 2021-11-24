<template>
    <div>
        This is the generator page.
        <Button label="Get started" class="p-button-rounded" icon="pi pi-chevron-right" iconPos="right" @click="handleGetStartedBtn" />
    </div>
</template>

<script>
import Button from 'primevue/button'

export default {
    name: 'Generator',
    components: {
        Button
    },
    data() {
		return {
		}
	},
    methods: {
        handleGetStartedBtn() {
            this.$router.push({name: 'select-test-set'})
        }
    }
}
</script>
