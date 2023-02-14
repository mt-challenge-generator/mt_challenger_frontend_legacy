<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
    integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm"
    crossorigin="anonymous"
  />
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="input1">TestSet</label>
        <input
          id="input1"
          v-model="form.TestSet"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="input2">Phenomenon</label>
        <input
          id="input2"
          v-model="form.Phenomenon"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="input2">Source sentence</label>
        <input
          id="input2"
          v-model="form.Source_sentence"
          type="text"
          class="form-control"
        />
      </div>
      <div v-for="(field, index) in form.positiveRegexes" :key="index">
        <div class="form-group">
          <label :for="`positiveRegex${index}`"
            >Positive Regex {{ index + 1 }}</label
          >
          <input
            :id="`positiveRegex${index}`"
            v-model="field.value"
            type="text"
            class="form-control"
          />
          <button @click.prevent="removePositiveRegex(index)" type="button">
            <i class="fas fa-minus">-</i>
          </button>
        </div>
        <button @click.prevent="addPositiveRegex">
          <i class="fas fa-plus">+</i>
        </button>
      </div>

      <div v-for="(field, index) in form.negativeRegexes" :key="index">
        <div class="form-group">
          <label :for="`negativeRegex${index}`"
            >Negative Regex {{ index + 1 }}</label
          >
          <input
            :id="`negativeRegex${index}`"
            v-model="field.value"
            type="text"
            class="form-control"
          />
        </div>
        <button @click.prevent="removeNegativeRegex(index)" type="button">
          <i class="fas fa-minus">-</i>
        </button>
      </div>
      <button @click.prevent="addNegativeRegex">
        <i class="fas fa-plus">+</i>
      </button>
      <br /><br />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      form: {
        TestSet: "",
        Phenomenon: "",
        Source_sentence: "",
        positiveRegexes: [{ value: "" }],
        negativeRegexes: [{ value: "" }],
      },
    };
  },
  methods: {
    addPositiveRegex() {
      this.form.positiveRegexes.push({ value: "" });
    },
    removePositiveRegex(index: number) {
      if (this.form.positiveRegexes.length > 1) {
        this.form.positiveRegexes.splice(index, 1);
      }
    },
    addNegativeRegex() {
      this.form.negativeRegexes.push({ value: "" });
    },
    removeNegativeRegex(index: number) {
      if (this.form.negativeRegexes.length > 1) {
        this.form.negativeRegexes.splice(index, 1);
      }
    },
    async submitForm() {
      try {
        const response = await axios.post("/api/submit-form", this.form);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style>
form {
  padding: 50px;
}
.fa-plus-circle,
.fa-minus-circle {
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
