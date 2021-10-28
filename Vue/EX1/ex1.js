new Vue({
  el: "#exercise",
  data: {
    result: 0,
    ComputeResult: "",
  },
  methods: {
    computeOperation() {
      if(this.ComputeResult === "add"){
        this.result = parseInt(this.number1) + parseInt(this.number2)
      }else if(this.ComputeResult === 'multiply'){
        this.result = this.number1 * this.number2
      }
    
    },
  },
});
