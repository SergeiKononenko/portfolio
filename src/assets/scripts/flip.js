import Vue from "vue";


const authBtn = {
  
  template: "#auth-btn"
};

const sideA = {
  template: "#side-a"
};

const sideB = {
  template: "#side-b",
};


new Vue({
    el: "#welcome-page-component",
    components: {
      authBtn,
      sideA,
      sideB,
      
    },
    data() {
        return {
          activeSide: "sideA"
        };
      },
      methods: {
        handleSideChange() {
          this.activeSide = this.activeSide === "sideA" ? "sideB" : "sideA";
        },
        outOfForm(e) {
          if (
            e.target.classList.contains("welcome-page") &&
            this.activeSide === "sideB"
          ) {
            this.handleSideChange();
          }
        }
      },

    template: "#welcome-page"
  });


