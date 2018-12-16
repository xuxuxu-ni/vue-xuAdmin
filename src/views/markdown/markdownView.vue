<template>
  <div>
    <markdown :onchange="change" :initData="initData"></markdown>
  </div>
</template>

<script>
import Markdown from '../../components/markdown/markdown-editor'
export default {
  name: 'markdownView',
  data () {
    return {
      initData: '# vue-xuAdmin\n' +
        '## 初\n' +
        '### 始\n' +
        '#### 值',
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
