/**
 * Created by ptmind on 2016/10/11.
 */
"use strict";
/**
 * 【功能说明】：开关
 * 【使用说明】：请按照以下步骤配置
 *      1. 在对应的input元素上增加自定义属性：data-name data-status data-disabled
 *      2. 在需要开关的逻辑处添加： $(".container3").ptSwitch(options,callback);
 * 【参数详解】:options={
 *                  targetInp:".js-pt-user-switch", //必填项需要创建开关的input标签选择器
 *                  onText:"ON",    //选填 开关处于打开状态的文字内容 默认为：ON
 *                  offText:"OFF",  //选填 开关处于打开状态的文字内容 默认为：OFF
 *                  size:"lg",      //选填 开关的尺寸大小 分为三个 "sm","md","lg"(默认lg)
 *                  isCreateDom     //选填  是否动态创建开关的dom结构 默认为false
 *                  }
 */
(function($){
    var dataStatus={on:"on",off:"off"},
        callbackArr={},
        init=true,
        defaultOptions={
            targetInp:null,
            onText:"ON",
            offText:"OFF",
            size:"lg",
            isCreateDom:false
        };
    function bind(){
        $(document).on("click",".js-pt-switch",switchClick);
    }
    function unbind(){
        $(document).off("click",".js-pt-switch",switchClick);
    }
    //滑动按钮切换 回调函数触发
    function switchClick(e){
        var target=e.currentTarget,
            self=$(target),
            type=self.attr("data-status"),
            isDisabled = self.attr("data-disabled")==="true"?true:false,
            name=self.attr("data-name");
        if(!isDisabled){
            type=(type===dataStatus.on?dataStatus.off:dataStatus.on);
        }
        self.attr("data-status",type);
        //   触发回调
        if(callbackArr[name] && callbackArr[name] instanceof Function && !isDisabled){
            callbackArr[name](name,type,self);
        }
    }
    //创建DOM函数
    function createDom(input,onText,offText,size){
        var self=input,
            type=self.attr("data-status"),
            id=self.attr("id"),
            name=self.attr("data-name"),
            dataDisabled=self.attr("data-disabled")===undefined?false:self.attr("data-disabled");
        return '<div class="pt-switch-wrap">'
                + input[0].outerHTML
                + '<div class="pt-switch js-pt-switch '+size+'" data-status="'+type+'" data-disabled="'+dataDisabled+'" data-name="'+name+'">'
                +   '<div class="switchLine">'
                +        '<span class="switchLine-on">'+onText+'</span>'
                +         '<span class="switchLine-off">'+offText+'</span>'
                +   '</div>'
                +   '<span class="switchButton"></span>'
                + '</div>'
                +'</div>'
    }
    //最终暴露的调用函数
    function ptSwitch(options,callback){
        options=$.extend({},defaultOptions,options);
        var $input=$(options.targetInp);
        if(init){
            unbind();
            bind();
            init=false; 
        }
        $input.each(function(i,ele){
            var that=$(this);
            //暂存回调函数
            callbackArr[that.attr("data-name")]=callback;
            if(options.isCreateDom){
                that.after(createDom(that,options.onText,options.offText,options.size)); //$().after()函数在被选元素后面插入元素
                that.remove(); //$().remove()函数删除被选元素及其所有子节点
            }
        })
    }
    $.fn.ptSwitch=ptSwitch;
})(jQuery);