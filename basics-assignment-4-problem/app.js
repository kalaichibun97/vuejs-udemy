const app = Vue.createApp({
  data() {
    return {
      userInputClasses: '',
      isShow: true,
      backgroundColorInput: '',
    }
  },
  computed: {
    preClasses() {
      return {
        user1: this.userInputClasses === 'user1',
        user2: this.userInputClasses === 'user2',
        visible: this.isShow,
        hidden: !this.isShow
      }
    }
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    }
  }
})

app.mount('#assignment');
