<template>
  <div class="Login">
    <h3>用户登录</h3>
    <cube-input
      v-model="username"
      placeholder="请输入用户名"
      :clearable="true"
    ></cube-input>
    <cube-input
      v-model="password"
      placeholder="请输入密码"
      :clearable="true"
      type="password"
      :maxlength="18"
      :autofocus="true"
      :eye="{ open: false }"
    ></cube-input>
    <cube-button
      type="submit"
      @click="loginFunc"
    >登录</cube-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    loginFunc() {
      if (!this.username || !this.password) {
        this.$createToast({
          txt: '请输入用户名或密码！',
          type: 'warn',
        }).show()
        return
      }
      this.$createToast({
        txt: '登录成功！',
        type: 'correct',
      }).show()
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
<style lang="scss" scoped>
.Login {
  // background-color: pink;
  padding: 10px;
  h3 {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .cube-input {
    margin-bottom: 10px;
  }
}
</style>
