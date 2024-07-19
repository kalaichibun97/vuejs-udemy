const app = Vue.createApp({
  data() {
    return {
      name: '',
      age: 27
    }
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    }
  }
})

app.mount('#assignment');
