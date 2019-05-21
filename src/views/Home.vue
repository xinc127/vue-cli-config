<template>
  <div class="home">
    home 组件
    <button @click="getMsg">getMsg</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '这是一条msg',
    }
  },
  methods: {
    getMsg() {
      console.log(this.msg)
    },
  },
}
</script>
