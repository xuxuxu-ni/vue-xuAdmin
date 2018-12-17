let initData = '# vue-xuAdmin 初始值\n' +
  '\n' +
  '### 多语言代码高亮 Codes\n' +
  '\n' +
  '#### 行内代码 Inline code\n' +
  '\n' +
  '执行命令：`npm install marked`\n' +
  '\n' +
  '#### 缩进风格\n' +
  '\n' +
  '即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。\n' +
  '\n' +
  '    <?php\n' +
  '        echo "Hello world!";\n' +
  '    ?>\n' +
  '    \n' +
  '预格式化文本：\n' +
  '\n' +
  '    | First Header  | Second Header |\n' +
  '    | ------------- | ------------- |\n' +
  '    | Content Cell  | Content Cell  |\n' +
  '    | Content Cell  | Content Cell  |\n' +
  '#### java代码\n' +
  '\n' +
  '```java\n' +
  'public class HelloWorld {\n' +
  '    public static void main(String[] args) {\n' +
  '        System.out.println("Hello World");\n' +
  '    }\n' +
  '}\n' +
  '```\n' +
  '#### JS代码　\n' +
  '\n' +
  '```javascript\n' +
  'function test(){\n' +
  '\tconsole.log("Hello world!");\n' +
  '}\n' +
  ' \n' +
  '(function(){\n' +
  '    var box = function(){\n' +
  '        return box.fn.init();\n' +
  '    };\n' +
  '\n' +
  '    box.prototype = box.fn = {\n' +
  '        init : function(){\n' +
  '            console.log(\'box.init()\');\n' +
  '\n' +
  '\t\t\treturn this;\n' +
  '        },\n' +
  '\n' +
  '\t\tadd : function(str){\n' +
  '\t\t\talert("add", str);\n' +
  '\n' +
  '\t\t\treturn this;\n' +
  '\t\t},\n' +
  '\n' +
  '\t\tremove : function(str){\n' +
  '\t\t\talert("remove", str);\n' +
  '\n' +
  '\t\t\treturn this;\n' +
  '\t\t}\n' +
  '    };\n' +
  '    \n' +
  '    box.fn.init.prototype = box.fn;\n' +
  '    \n' +
  '    window.box =box;\n' +
  '})();\n' +
  '\n' +
  'var testBox = box();\n' +
  'testBox.add("jQuery").remove("jQuery");\n' +
  '```\n' +
  '\n' +
  '#### HTML代码 HTML codes\n' +
  '\n' +
  '```html\n' +
  '<!DOCTYPE html>\n' +
  '<html>\n' +
  '    <head>\n' +
  '        <mate charest="utf-8" />\n' +
  '        <title>Hello world!</title>\n' +
  '    </head>\n' +
  '    <body>\n' +
  '        <h1>Hello world!</h1>\n' +
  '    </body>\n' +
  '</html>\n' +
  '```\n### 列表 Lists\n' +
  '\n' +
  '#### 无序列表（减号）Unordered Lists (-)\n' +
  '                \n' +
  '- 列表一\n' +
  '- 列表二\n' +
  '- 列表三\n' +
  '     \n' +
  '#### 无序列表（星号）Unordered Lists (*)\n' +
  '\n' +
  '* 列表一\n' +
  '* 列表二\n' +
  '* 列表三\n' +
  '\n' +
  '#### 无序列表（加号和嵌套）Unordered Lists (+)\n' +
  '                \n' +
  '+ 列表一\n' +
  '+ 列表二\n' +
  '    + 列表二-1\n' +
  '    + 列表二-2\n' +
  '    + 列表二-3\n' +
  '+ 列表三\n' +
  '    * 列表一\n' +
  '    * 列表二\n' +
  '    * 列表三\n' +
  '\n' +
  '#### 有序列表 Ordered Lists (-)\n' +
  '                \n' +
  '1. 第一行\n' +
  '2. 第二行\n' +
  '3. 第三行\n' +
  '\n' +
  '#### GFM task list\n' +
  '\n' +
  '- [x] GFM task list 1\n' +
  '- [x] GFM task list 2\n' +
  '- [ ] GFM task list 3\n' +
  '    - [ ] GFM task list 3-1\n' +
  '    - [ ] GFM task list 3-2\n' +
  '    - [ ] GFM task list 3-3\n' +
  '- [ ] GFM task list 4\n' +
  '    - [ ] GFM task list 4-1\n' +
  '    - [ ] GFM task list 4-2\n' +
  '                \n' +
  '----### 绘制表格 Tables\n' +
  '\n' +
  '| 项目        | 价格   |  数量  |\n' +
  '| --------   | -----:  | :----:  |\n' +
  '| 计算机      | $1600   |   5     |\n' +
  '| 手机        |   $12   |   12   |\n' +
  '| 管线        |    $1    |  234  |\n' +
  '                    \n' +
  '\n' +
  '| Function name | Description                    |\n' +
  '| ------------- | ------------------------------ |\n' +
  '| `help()`      | Display the help window.       |\n' +
  '| `destroy()`   | **Destroy your computer!**     |\n' +
  '\n' +
  '| Left-Aligned  | Center Aligned  | Right Aligned |\n' +
  '| :------------ |:---------------:| -----:|\n' +
  '| col 3 is      | some wordy text | $1600 |\n' +
  '| col 2 is      | centered        |   $12 |\n' +
  '| zebra stripes | are neat        |    $1 |\n' +
  '\n' +
  '\n' +
  '            \n' +
  '### 科学公式 TeX(KaTeX)\n' +
  '                    \n' +
  '$$E=mc^2$$\n' +
  '\n' +
  '行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。\n' +
  '\n' +
  '$$\\(\\sqrt{3x-1}+(1+x)^2\\)$$\n' +
  '                    \n' +
  '$$\\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$\n多行公式：\n' +
  '\n' +
  '```math\n' +
  '\\displaystyle\n' +
  '\\left( \\sum\\_{k=1}^n a\\_k b\\_k \\right)^2\n' +
  '\\leq\n' +
  '\\left( \\sum\\_{k=1}^n a\\_k^2 \\right)\n' +
  '\\left( \\sum\\_{k=1}^n b\\_k^2 \\right)\n' +
  '```\n```katex\n' +
  '\\displaystyle \n' +
  '    \\frac{1}{\n' +
  '        \\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\n' +
  '        \\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {\n' +
  '        1+\\frac{e^{-6\\pi}}\n' +
  '        {1+\\frac{e^{-8\\pi}}\n' +
  '         {1+\\cdots} }\n' +
  '        } \n' +
  '    }\n' +
  '```' +
  '\n### 绘制流程图 Flowchart\n' +
  '\n' +
  '```flow\n' +
  'st=>start: 用户登陆\n' +
  'op=>operation: 登陆操作\n' +
  'cond=>condition: 登陆成功 Yes or No?\n' +
  'e=>end: 进入后台\n' +
  '\n' +
  'st->op->cond\n' +
  'cond(yes)->e\n' +
  'cond(no)->op\n' +
  '```\n' +
  '                    \n' +
  '### 绘制序列图 Sequence Diagram\n' +
  '                    \n' +
  '```seq\n' +
  'Andrew->China: Says Hello \n' +
  'Note right of China: China thinks\\nabout it \n' +
  'China-->Andrew: How are you? \n' +
  'Andrew->>China: I am good thanks!\n' +
  '```\n' +
  '\n' +
  '### End'

export default initData
