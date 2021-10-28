new Vue({
  el: "#exercise",
  data: {
    htmlAverage: 0,
    topic: "",
    score: "",
    result: "",
    scores: [
      { name: "a", topic: "HTML", result: 30 },
      { name: "b", topic: "JAVA", result: 40 },
      { name: "c", topic: "JS", result: 51 },
    ],
  },
  methods: {
    updateHtmlAverage() {
      let Topic = 0;
      let number = 0;

      for (let score of this.scores) {
        if (score.topic === "HTML") {
          TotalOfHtml += parseInt(score.result);
          number += 1;
        }
      }
      this.htmlAverage = TotalOfHtml / number
      console.log(this.htmlAverage)
      return this.htmlAverage

    },
    addScore() {
      this.scores.push({
        name: this.name,
        topic: this.topic,
        result: this.result,
      })
      this.name = ""
      this.topic = ""
      this.result = 0
      this.updateHtmlAverage();

    },
  },
  mounted() {
    this.updateHtmlAverage()

  },
});
