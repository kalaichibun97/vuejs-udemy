const app = Vue.createApp({
  data() {
    return {
      enteredVal: '',
      tasks: [],
      isShowTask: true,
    }
  },
  computed: {

  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredVal);
      this.enteredVal = '';
    },

    toggleShowTask() {
      this.isShowTask =!this.isShowTask;
    }
  }
})

app.mount('#assignment');
