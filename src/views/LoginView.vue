<template>
  <div class="login-main">
    <div class="form">
      <label for="emailAddress">Email</label>
      <input id="emailAddress" v-model="emailAddress"/>
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password">
      <button class="login-button" v-on:click="onClickLogin">Login</button>
    </div>
  </div>
</template>

<script>
import { apis } from '@/main'

export default {
  name: 'LoginView',
  data() {
    return {
      emailAddress: '',
      password: ''
    }
  },
  methods: {
    onClickLogin() {
      apis.user.login({
        email: this.emailAddress,
        password: this.password
      })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>

.login-main {
  display: flex;
  justify-content: center;

  .form {
    width: 300px;
    display: flex;
    flex-direction: column;

    * {
      margin-bottom: 10px;
    }

    input {
      font-size: 20px;
      padding: 5px;
    }

    .login-button {
      height: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

</style>