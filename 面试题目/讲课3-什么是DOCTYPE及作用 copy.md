## 什么是 DOCTYPE 及作用


DTD （document type definition，文档类型定义）是一系列的语法规则，用来定义XML或(X)HTML 的文件类型。浏览器会使用它来判断文档类型，决定使用何种协议来解析，以及切换浏览器模式

DOCTYPE 是用来声明文档类型和 DTD 规范的，一个主要的用途便是文件的合法性验证。如果文件代码不合法，那么浏览器解析时便会出一些差错。



## 常见的 DOCTYPE 有哪些

HTML5
`<!DOCTYPE html>`

HTML 4.01 Strict 该 DTD 包含所有 HTML 元素和属性，但不包括展示性和弃用的元素 (比如 font)

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0.1//EN" "http://www.w3.org/TR/html4/strict.dtd">`


HTML 4.01 Transitional  该 DTD 包含所有 HTML 元素和属性，包括展示性和弃用的元素 (比如 font)

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0.1//EN" "http://www.w3.org/TR/html4/loose.dtd">`