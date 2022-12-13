<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div class="container">
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px">
        <form class="needs-validation" novalidate>
          <div class="form-group">
            <div class="form-group">
              <label for="">Test Set</label>
              <select
                class="form-control form-control-sm"
                required
                v-model="data.Testset"
              >
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
            <div class="form-group">
              <label for="">Phenomenon</label>
              <select
                class="form-control form-control-sm"
                required
                v-model="data.Phenomenon"
              >
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <div class="form-group">
              <label for="source-sentence">Source Sentence</label>
              <input
                type="text"
                class="form-control"
                id="source-sentence"
                v-model="data.sentence"
                placeholder="Source Sentence"
                required
              />
            </div>
            <div
              class="form-group"
              v-for="(input, index) in data.positive_rules"
              :key="`positive_ruleInput-${index}`"
            >
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="input.positive_rule"
                />
                <div class="form-group">
                  <a href=""></a
                  ><i class="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div
              class="form-group"
              v-for="(input, index) in data.positive_rules"
              :key="`positive_ruleInput-${index}`"
            >
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="input.positive_rule"
                />
                <div class="form-group">
                  <a href=""></a
                  ><i class="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-info">Submit</button>
        </form>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      data: {
        Testset: "",
        Phenomenon: "",
        sentence: "",
        positive_rules: [{ positive_rule: "" }],
        negative_rules: [{ negative_rule: "" }],
      },
    };
  },
};
</script>
