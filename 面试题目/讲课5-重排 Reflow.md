## 重排 Reflow

定义

DOM 结构中的各个元素都有自己的盒子(模型)，这些都需要浏览器根据各种样式来计算并根据计算结果将元素放到它该出现的位置，这个过程称之为 reflow

触发 Reflow 

* 当你增加、删除、修改 DOM 结点时，会导致 Reflow 或 Repaint
* 当你移动 DOM 的位置，或是搞个动画的时候
* 当你修改 CSS 样式的时候
* 当你 Resize 窗口的时候 (移动端没有这个问题)，或是滚动的时候
* 当你修改网页的默认字体时候 


## 重绘

定义

当各种盒子的位置，大小及其他属性，例如颜色，字体大小等都确定下来后，浏览器于是便把这些元素都按照各自的特性绘制了一遍，于是页面内容出现了，这个过程称之为repaint


触发 Repaint 

DOM 改动
CSS 改动



