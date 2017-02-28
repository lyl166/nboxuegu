/**
 * Created by Administrator1 on 2017/2/27.
 */
define(["jquery","jqueryCookie","nprogress"],function($, undefined, nprogress){
    /*
    * 1.先监听form表单的提交事件
    * 2.事件回调中return false阻止默认的提交
    * 3.事件回调中通过ajax的方式发送表单数据
    * 4.如果返回结果中的code为200，证明登录成功，跳转到首页
    * */
    $("#form-login").on("submit",function(){
        $.ajax({
                url:"/v6/login",
                type:"post",
                data:$(this).serialize(),
                success:function(data){
                    console.log(data);
                    if(data.code == 200){
                        $.cookie("userInfo",JSON.stringify(data.result),{path:"/"});
                        location.href="/";
                    }
                }
            });
        return false;
    });

    /*
    * 展示用户的历史登录状态
    *1.获取userInfo这个cookie值
    * 2.把cookie字符串转换为对象
    *3.设置登录页的img-src为对象中的tc_avatar属性值，如果没有设置一个默认头像地址
    * */
    var userInfo =  null;
    try{
        userInfo = JSON.parse($.cookie("userInfo"));
    }catch(e){
        userInfo = {};
    }
    $(".login .avatar img").attr("src",userInfo.tc_avatar ? userInfo.tc_avatar : "/img/default.png")

    //当前页面加载完后调用
    nprogress.done();
})
