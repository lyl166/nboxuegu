/**
 * Created by Administrator1 on 2017/2/27.
 */
/*一般写需要跳转的功能*/
define(["jquery","jqueryCookie"],function($, undefined){

    $(".navs a").on("click",function(){
        $(this).next().slideToggle();
    });
   /* $.ajax({
        url:"/v6/login",
        type:"post",
        data:{
            tc_name:123456,
            tc_pass:123456
        },
        success:function(data){
            console.log("成功");
        },
        error:function(data){
            console.log("失败");
        }
    });*/
    $("#logout").on("click",function(){
        //console.log(123);
        $.post("/v6/logout",function(data){
            if(data.code == 200){
                location.href = "/html/home/login.html";
            }
        })
    });
//获取本地cookie用户信息，然后展示在左侧头像部分
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie("userInfo"));
    }catch(e){
        userInfo = { };
    }

    $(".aside .profile h4").html(userInfo.tc_name ? userInfo.tc_name:"1235");
    $(".aside .profile img").attr("src",userInfo.tc_avatar ? userInfo.tc_avatar : "/img/default.png");

    /*
    * 根据页面路径定位左侧导航
    * 1.获取当前页面的pathname
    * 2.然后获取所有的a，remove掉active class ，
    * 再使用pathname获取到应该被选中的a，给它添加active class
    * 3.最后获取a标签所有的父ul标签，让他们展示出来，如果不展示，是看不到的
    * */
    var pathname = window.location.pathname;
    $(".navs a").removeClass("active").filter('[href="'+ pathname +'"]').addClass("active")
        .parents("ul").show();
})