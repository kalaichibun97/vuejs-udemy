const app = Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  computed: {
    result() {
      if (this.count < 37) {
        return 'Not there yet';
      } else if (this.count === 37) {
        return this.count;
      } else {
        return 'Too much!';
      }
    }
  },
  watch: {
    count() {
      const that = this;
      setTimeout(() => {
        that.count = 0;
      }, 5000)
    }
  },
  methods: {
    add(number) {
      this.count = this.count + number;
    },
  }
})

app.mount('#assignment');
