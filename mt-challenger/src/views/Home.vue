<template>
  <div>
    This is the home page.
    <router-link to="generator">Click here</router-link> to go to the challenge
    generator.
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore(key);
  },
});
</script>
