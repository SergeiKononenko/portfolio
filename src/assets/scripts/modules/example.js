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
  props: {
    works: Array,
    currentIndex: Number
  },
data(){
  return{
    prevButtonWorks: [],
    nextButtonWorks: []
  };
},

created() {
  this.prevButtonWorks = this.transformWorksArrForBtn('prev');
  this.prevButtonWorks = this.transformWorksArrForBtn('next');
},

  methods: {
    transformWorksArrForBtn(btnDirection){
       const worksArray = [ ...this.works];
       const lastItem = worksArray[worksArray.length - 1];

      switch (btnDirection){
        case 'prev':{
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;
        }
        case 'next':{
          worksArray.push(worksArray[0]);
          worksArray.shift();
 
          break;}
      }
      return worksArray;
    },
    slide(direction) {
      this.$emit("slide", direction);
    
  }}
  
};

new Vue({
  el: "#slider-component",
  components: {
    info, display, btns },
  data() {
    return {
     works: [],
     currentIndex: 0
   };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
watch:{
  currentIndex(value){
    this.makeInfinitesliding(value);
  } 
},

  created() {
    this.works = require("../../data/works.json");
  
  },
  methods: {
    handleSlide(direction) {
        switch(direction){
          case "next" :
           this.currentIndex = this.currentIndex + 1
        break;

          case "prev" :
           this.currentIndex = this.currentIndex - 1
        break;
        }
       console.log(this.currentIndex)
      }
    },
    makeInfinitesliding(value){
      const worksAmountMinusOne = this.works.length - 1;
       if( value > worksAmountMinusOne){this.currentIndex = 0;
       }
       if( value < 0  ){this.currentIndex =  worksAmountMinusOne;
      }
    },

   
  template: "#slider-root"
});