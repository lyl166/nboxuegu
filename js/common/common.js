/**
 * Created by Administrator1 on 2017/2/27.
 */
define(["jquery"],function($){
    $(".navs a").on("click",function(){
        $(this).next().slideToggle();
    });
    $.ajax({
        url:"/v6/login",
        type:"post",
        data:{
            tc_name:123456,
            tc_pass:123456
        },
        success:function(){
            console.log("成功");
        },
        error:function(){
            console.log("失败");
        }
    })
})