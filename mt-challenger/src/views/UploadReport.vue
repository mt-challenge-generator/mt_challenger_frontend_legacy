<template>
    <div class="container">
      <div class="col-md-12">
        <h3>Upload Report!</h3>
        <form class="form-horizontal" enctype="multipart/form-data">
          <div class="form-group">
            <div class="input-group">
              <label class="control-label col-sm-2" for="btnEngine"
                >Engine:
              </label>
              <div class="input-group">
                <input type="text" class="form-control" id="btnEngine" />
                <div class="input-group-btn">
                  <select class="form-control" v-model="selected">
                    <option
                      v-for="item in items"
                      :value="item.val"
                      :key="item.id"
                    >
                      {{ item.val }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <label class="control-label col-sm-2" for="selectDirection"
                >Language direction:</label
              >
  
              <select class="selectpicker form-control" v-model="selectDirection">
                <option>DE-&gt;EN</option>
  
                <option>EN-&gt;DE</option>
  
                <option>EN-&gt;ID</option>
  
                <option>PT-&gt;EN</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <label class="control-label col-sm-2" for="engineType"
                >Type of engine:</label
              >
              <input
                type="text"
                class="form-control"
                v-model="engineType"
                placeholder="Use ',' to separate multiple types"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <label class="control-label col-sm-2" for="filename"
                >Report file:</label
              >
              <input type="text" id="filename" class="form-control" />
              <span class="input-group-btn">
                <label class="btn btn-default" type="button" id="browse">
                  Browse
                  <input
                    type="file"
                    @change="handleFileUpload"
                    style="display: none"
                  />
                </label>
              </span>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <label class="control-label col-sm-2" for="template"
                >Template id:</label
              >
              <input
                type="text"
                class="form-control"
                id="template"
                placeholder="Important! Please add template id manually if it wasn't inferred from the file name!"
              />
  
              <div class="checkbox">
                <label
                  ><input type="checkbox" value="" id="oldReport" />old
                  report</label
                >
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <label class="control-label col-sm-2" for="comment">Comment:</label>
  
              <input
                type="text"
                class="form-control"
                id="comment"
                placeholder=""
              />
            </div>
          </div>
        </form>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-9" style="padding: 0">
            <button style="margin-left: -10" class="btn btn-default btn-warning">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "app",
    setup() {
      function handleFileUpload(event: Event) {
        console.log(event);
      }
  
      return {
        selected: "",
        input: "",
        items: {
          1: { id: 1, val: "item1" },
          2: { id: 2, val: "item2" },
          3: { id: 3, val: "item3" },
        },
        selectDirection: "DE->EN",
        engineType: "",
        file: "",
        handleFileUpload,
      };
    },
  
    /*
    data() {
      return {
        selected: "",
        input: "",
        items: {
          1: { id: 1, val: "item1" },
          2: { id: 2, val: "item2" },
          3: { id: 3, val: "item3" },
        },
        selectDirection: "DE->EN",
        engineType: "",
        file: '',
      };
    },
  
    methods: {
     upload(){
  
     },
  
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },
    },
    */
  };
  </script>
  