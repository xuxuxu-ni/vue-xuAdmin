<template>
  <div>
    <markdown :onchange="change" :initData="initData"></markdown>
  </div>
</template>

<script>
import Markdown from '../../components/markdown/markdown-editor'
import initData from '../../markData.js'
export default {
  name: 'markdownView',
  data () {
    return {
      initData: initData,
    }
  },
  components: {Markdown},
  methods: {
    change () {
      console.log(arguments)
    }
  }
}
</script>

<style scoped>

</style>
