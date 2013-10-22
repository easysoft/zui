# 规范 #
----------


## 1. 前端代码规范 ##

### 1.1 关键规范 ###

1. - html文档中缩进使用两个空格，不使用tab，Javascript文档中缩进使用4个空格；
2. - 标签属性名使用全部小写形式，id和name属性值使用驼峰命名方式，类名（class属性值）使用小写，多个单词间使用“-”分隔，其他没有规定的情况下所有代码尽可能采用小写形式；
3. - html文档类型使用html5，不使用xhtml，书写形式尽可能符合html5规范；
4. - 在html及css中优先使用双引号，在Javascript及其他服务器语言中优先使用单引号。
4. - 文档使用UTF-8 (no BOM)存储，文档中也加入 <meta charset="utf-8">；
5. - 尽量忽略（Omit）协议：如 background: url(http://www.zui.com/images/example); 应该写background: url(//www.zui.com/images/example);以方便http与https协议切换，除非必须使用某个协议；
6. - 在保证可读性及与规范不冲突的情况下，尽可能使用语法允许的缩写形式，以减少网络传输中的字节数。


## 2. 框架规范 ##

### 2.1 代码文件结构 ###

    zui/
    ├── src/						// 源码
    │   ├── fonts/					// 字体文件
    │   ├── js/						// js框架
    │   └── less/					// 样式
    ├── dist/						// 可用版本
    │   ├── css/
    │   ├── js/
    │   └── fonts/
    ├── examples/					// 一些例子
    ├── asserts/
    │  	└── js/
    ├── _layouts/					// 文档模版
    └── _includes/					// 文档内容