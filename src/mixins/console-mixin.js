export default {
  data: {
    message: 'hello-mixin'
  },
  mounted () {
    console.log('mixin内---' + this.message)
  }
}
