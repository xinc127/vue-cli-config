<template>
  <div>
    <p>news 组件</p>
    <cube-input type="file" v-model="file"></cube-input>
    <cube-button type="submit" @click="uploadFile">上传文件</cube-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      file: null
    }
  },
  mounted () {
    this.$api.article.articleList().then(res => {
      console.log(res)
    })
  },
  methods: {
    async uploadFile (e) {
      const formData = new FormData()
      formData.append('file', this.file)
      await this.$api.uploadFile(formData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
