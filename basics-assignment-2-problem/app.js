const app = Vue.createApp({
  data() {
    return {
      keyDownOutput: '',
      enteredOutput: ''
    }
  },
  methods: {
    showAlert() {
      alert('Show alert');
    },
    onKeyDown(event) {
      this.keyDownOutput = event.target.value;
    },
    onEntered(event) {
      this.enteredOutput = event.target.value;
    }
  }
})

app.mount('#assignment');
