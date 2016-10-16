Switch、CheckBox、Raido
=====
***
插件简介
-----
本插件主要是一些关于input标签的小组件，由于原生的checkbox,radio样式比较不美观
很多项目中会改造其样式，变得更美观一些。
其中checkBox和Radio直接是html,css代码，无需js调用
switch组件是可用js直接调用的。其js依赖于jquery,是扩展的一个query插件
在引用之前先引入jquery.js。

checkbox样式
----
![checkbox](https://github.com / summershanshan / ptSwitch / raw / master / img / checkbox.png)

radio样式
----
分为radio默认样式和radio新样式 </br>
![radio](https://github.com / summershanshan / ptSwitch / raw / master / img / radio.png)

switch样式
-----
![switch](https://github.com / summershanshan / ptSwitch / raw / master / img / switch.png)


Switch  js调用用法
------------------
1. 在html中写上input标签 <br>
      `<input type="checkbox" class="js-pt-user-switch" id="switch1" data-status="on" data-name="hello" data-disabled="true">`
2. 先引入jquery.js<br>
   `<script src="../...jquery.min.js">` <br>
   然后引入check.js<br>
   `<script src="../js/check.js"></script>`
3. 用jquery的形式调用函数$().ptSwitch(options,callback);<br>
<pre>
    <code>
        $(".container3").ptSwitch({`
            `targetInp:".js-pt-user-switch",`
             `onText:"开", `
             `offText:"关",`
             `size:"lg",  `
             `isCreateDom:"true"`
         `},hello);
    </code>
</pre>

参数详解：
----
   targetInp: 必填 需要创建开关的input标签选择器 <br>
   onText:    选填 开关处于打开状态的文字内容 默认为：ON <br>
   offText:   选填 开关处于打开状态的文字内容 默认为：OFF <br>
   size:      选填 开关的尺寸大小 分为三个 "sm","md","lg"(默认lg) <br>
   isCreateDom:选填  是否动态创建开关的dom结构 默认为false <br>
   callback:   选填  hello是回调函数

<pre>
    <code>
    `$(".container3").ptSwitch({` <br>
                `targetInp:".js-pt-user-switch",` <br>
                 `onText:"开", ` <br>
                 `offText:"关",` <br>
                 `size:"lg",  `  <br>
                 `isCreateDom:"true"` <br>
             `},hello); `

