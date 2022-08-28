Vue.createApp({
  data() {
    return {
      inputGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoalValue);
      this.inputGoalValue = "";
    },
    removeGoal(index){

        this.goals.splice(index, 1);
    }
  },
}).mount("#section2");
