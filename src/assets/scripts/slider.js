import Vue from "vue";

const info = {
  template: "#slider-info",
  props: {
    work: Object
  }
 
};

const display = {
  template: "#slider-display",
  props: {
    work: Object
  }
};

const btns = {
  template: "#slider-btns",

  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    }
  }
  
};

new Vue({
  el: "#slider-component",
  components: {
    info,
    display,
    btns
  },
  data: {
    works: [],
    currentWork: {},
    
  },
  
  created() {
    this.works = require("../../data/works.json");
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      console.log(direction);
      
    }
  },
  template: "#slider-root"
});