<script>

export default {
  name: "App",
  data() {
    return {
      user: {
        name: "John Doe",
        age: 30
      },
    }
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name,
        age: +age
      }
    }
  }
}
</script>

<template>
  <div>
    <active-user :username="user.name" :age="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<style>
html {
  font-family: Arial, sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
