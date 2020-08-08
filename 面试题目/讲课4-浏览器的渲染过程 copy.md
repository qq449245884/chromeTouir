## 浏览器的渲染过程

![](./1.png)


要点如下：

* 根据 HTML 结构生成 DOM 树
* 根据 CSS 生成 CSSOM
* 将 DOM 和 CSSOM 整合形成 RenderTree
* 根据 RenderTree 开始渲染和展示
* 遇到`<script>`时，会执行并阻塞渲染