Switch、checkBox、Raido
=======================
插件简介
-------
1. 本插件主要是一些关于input标签的小组件，由于原生的checkbox,radio样式比较不美观
 很多项目中会改造其样式，变得更美观一些。
2. 其中checkBox和Radio直接是html,css代码，无需js调用
3. switch组件是可用js直接调用的。其js依赖于jquery,是扩展的一个query插件
注意在引用check.js之前需先引入jquery.js。
4. 参考ptengine项目的switch写的，做了一下api扩充。
5. 插件目前还算简陋 有待改进 欢迎各位大牛不吝指导

checkbox样式
------------
![checkbox](https://github.com/summershanshan/ptSwitch/raw/master/img/checkbox.png)

radio样式
---------
分为radio默认样式和radio新样式 </br>
![radio](https://github.com/summershanshan/ptSwitch/raw/master/img/radio.png)

switch样式
----------
![switch](https://github.com/summershanshan/ptSwitch/raw/master/img/switch.png)


Switch  js调用用法
------------------
1. 在html中写上input标签
   ```
    <input type="checkbox" class="js-pt-user-switch" id="switch1" data-status="on" data-name="hello" data-disabled="true">
   ```
2. 先引入jquery.js
    ```
     <script src="../...jquery.min.js">
    ```
   然后引入check.js
   ```
   <script src="../js/check.js"></script>
   ```
3. 用jquery的形式调用函数$().ptSwitch(options,callback);<br>
<pre>
    <code>
        $(".container3").ptSwitch({
             targetInp:".js-pt-user-switch",
             onText:"开",
             offText:"关",
             size:"lg",
             isCreateDom:"true"
         },hello);
    </code>
</pre>

参数详解：
-------
   targetInp: 必填 需要创建开关的input标签选择器 <br>
   onText:    选填 开关处于打开状态的文字内容 默认为：ON <br>
   offText:   选填 开关处于打开状态的文字内容 默认为：OFF <br>
   size:      选填 开关的尺寸大小 分为三个 "sm","md","lg"(默认lg) <br>
   isCreateDom:选填  是否动态创建开关的dom结构 默认为false <br>
   callback:   选填  hello是回调函数
