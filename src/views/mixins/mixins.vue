<template>
  <div class="minxin">
    minxin组件
  </div>
</template>
<script>
import consoleMixin from '@/mixins/console-mixin'

export default {
  name: 'minxin',
  data () {
    return {
      message: '组件msg'
    }
  },
  mixins: [consoleMixin],
  mounted () {
    console.log('组件内---' + this.message)
  }
}
</script>
<style lang="scss" scoped>
.minxin {

}
</style>
