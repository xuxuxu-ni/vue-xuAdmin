const defaultConfig = {
  width: '100%',
  height: 600,
  path: './static/markdown/lib/',
  // theme: 'dark',
  previewTheme: 'default',
  editorTheme: 'pastel-on-dark',
  // markdown: '默认填充内容', // 默认填充内容
  lineWrapping: true, // 编辑框不换行
  codeFold: true, // 代码折叠
  placeholder: '请输入...',
  syncScrolling: true,
  saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
  searchReplace: true,
  watch: true, // 实时预览
  // htmlDecode: "style,script,iframe|on*",      // 开启 HTML 标签解析，为了安全性，默认不开启
  toolbar: true, // 工具栏
  previewCodeHighlight: true, // 预览 HTML 的代码块高亮，默认开启
  emoji: true,
  taskList: true,
  tocm: true, // Using [TOCM]
  tex: true, // 开启科学公式TeX语言支持，默认关闭
  flowChart: true, // 开启流程图支持，默认关闭
  sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
  // dialogLockScreen: false,      // 设置弹出层对话框不锁屏，全局通用，默认为true
  // dialogShowMask: false,        // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
  // dialogDraggable: false,       // 设置弹出层对话框不可拖动，全局通用，默认为true
  // dialogMaskOpacity: 0.4,       // 设置透明遮罩层的透明度，全局通用，默认值为0.1
  // dialogMaskBgColor: "#000",    // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
  imageUpload: true,
  imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
  imageUploadURL: '../../assets/uploadImage'
  // onload: function() {
  //    // this.fullscreen();
  //    // this.unwatch();
  //    // this.watch().fullscreen();
  //    // this.setMarkdown("#PHP");
  //    // this.width("100%");
  //    // this.height(480);
  //    // this.resize("100%", 640);
  // },
}
const codeThemes = [
  {
    label: 'monokai',
    value: 'monokai.min.css'
  },
  {
    label: 'atelier-cave-dark',
    value: 'atelier-cave-dark.min.css'
  },
  {
    label: 'atelier-cave-light',
    value: 'atelier-cave-light.min.css'
  },
  {
    label: 'atelier-dune-dark',
    value: 'atelier-dune-dark.min.css'
  },
  {
    label: 'atelier-dune-light',
    value: 'atelier-dune-light.min.css'
  },
  {
    label: 'atelier-estuary-dark',
    value: 'atelier-estuary-dark.min.css'
  },
  {
    label: 'atelier-estuary-light',
    value: 'atelier-estuary-light.min.css'
  },
  {
    label: 'atelier-forest-dark',
    value: 'atelier-forest-dark.min.css'
  },
  {
    label: 'atelier-forest-light',
    value: 'atelier-forest-light.min.css'
  },
  {
    label: 'atelier-heath-dark',
    value: 'atelier-heath-dark.min.css'
  },
  {
    label: 'atelier-heath-light',
    value: 'atelier-heath-light.min.css'
  },
  {
    label: 'atelier-lakeside-dark',
    value: 'atelier-lakeside-dark.min.css'
  },
  {
    label: 'atelier-lakeside-light',
    value: 'atelier-lakeside-light.min.css'
  },
  {
    label: 'atelier-plateau-dark',
    value: 'atelier-plateau-dark.min.css'
  },
  {
    label: 'atelier-plateau-light',
    value: 'atelier-plateau-light.min.css'
  },
  {
    label: 'atelier-savanna-dark',
    value: 'atelier-savanna-dark.min.css'
  },
  {
    label: 'atelier-savanna-light',
    value: 'atelier-savanna-light.min.css'
  },
  {
    label: 'atelier-seaside-dark',
    value: 'atelier-seaside-dark.min.css'
  },
  {
    label: 'atelier-seaside-light',
    value: 'atelier-seaside-light.min.css'
  },
  {
    label: 'atelier-sulphurpool-dark',
    value: 'atelier-sulphurpool-dark.min.css'
  },
  {
    label: 'atelier-sulphurpool-light',
    value: 'atelier-sulphurpool-light.min.css'
  },
  {
    label: 'github',
    value: 'github.min.css'
  },
  {
    label: 'github-v2',
    value: 'github-v2.min.css'
  },
  {
    label: 'hemisu-dark',
    value: 'hemisu-dark.min.css'
  },
  {
    label: 'hemisu-light',
    value: 'hemisu-light.min.css'
  },
  {
    label: 'tomorrow',
    value: 'tomorrow.min.css'
  },
  {
    label: 'tomorrow-night',
    value: 'tomorrow-night.min.css'
  },
  {
    label: 'tomorrow-night-blue',
    value: 'tomorrow-night-blue.min.css'
  },
  {
    label: 'tomorrow-night-bright',
    value: 'tomorrow-night-bright.min.css'
  },
  {
    label: 'tomorrow-night-eighties',
    value: 'tomorrow-night-eighties.min.css'
  },
  {
    label: 'tranquil-heart',
    value: 'previewTheme-xu.css'
  },
  {
    label: 'vibrant-ink',
    value: 'vibrant-ink.min.css'
  },
  {
    label: 'pastel-on-dark-xu',
    value: 'pastel-on-dark-xu.css'
  }
]
export {
  defaultConfig,
  codeThemes
}
