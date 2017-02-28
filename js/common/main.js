/**
 * Created by Administrator1 on 2017/2/27.
 */
requirejs.config({
    /*注意这里使用绝对路径*/
    baseUrl:"/",
    paths:{
        //第三方库的路径配置
        jquery:"lib/jquery/jquery.min",
        bootstrap:"lib/bootstrap/js/bootstrap.min",
        jqueryCookie:"lib/jquery-cookie/jquery.cookie",
        nprogress:"lib/nprogress/nprogress",

        //自己写的路径配置
        //首页
        index:"js/index",

        common:"js/common/common",

        //user
        userList:"js/user/list",
        userProfile:"js/user/profile",

        //home
        homeLogin:"js/home/login",
        homeRepass:"js/home/repass",
        homeSettings:"js/home/settings",

        //teacher
        teacherAdd:"js/teacher/add",
        teacherList:"js/teacher/list",

        //course
        courseAdd:"js/course/add",
        courseCategory:"js/course/category",
        courseCategory_add:"js/course/category_add",
        courseCourse_topic:"js/course/course_topic",
        courseList:"js/course/list",
        courseStep1:"js/course/step1",
        courseStep2:"js/course/step2",
        courseStep3:"js/course/step3"
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
});
//优先加载进度条，其它js延后
require(["nprogress"],function(nprogress){
    nprogress.start();
})
//所有的页面都需要先加载这些js
require(["jquery","bootstrap","common"]);
//这里获取页面的pathname，然后加载对应的js模块
(function(window){
    var pathname = window.location.pathname;
    /*
    * 判断登录状态
    *1.登录页
    * 1.1没有SESSID,不管用
    * 1.2.有SESSID,跳转到首页
    *
    * 2.其它页
    * 1.1没有SESSID,跳转到登录页面
    * 1.2.有SESSID,不用管
    * */
    require(["jquery","jqueryCookie"],function(){
        var ssisID = $.cookie("PHPSESSID");
        if(pathname === "/html/home/login.html" && ssisID){
            location.href = "/";
        }else if(pathname !=="/html/home/login.html" && !ssisID ){
            location.href = "/html/home/login.html";
        }
        switch(pathname){
            //首页
            case "/":
                require(["index"]);
                break;
            //user
            case "/html/user/list.html":
                require(["userList"]);
                break;
            case "/html/user/profile.html":
                require(["userProfile"]);
                break;

            //home
            case "/html/home/login.html":
                require(["homeLogin"]);
                break;
            case "/html/home/repass.html":
                require(["homeReprass"]);
                break;
            case "/html/home/settings.html":
                require(["homeSettings"]);
                break;

            //teacher
            case "/html/teacher/add.html":
                require(["teacherAdd"]);
                break;
            case "/html/teacher/list.html":
                require(["teacherList"]);
                break;

            //course
            case "/html/course/add.html":
                require(["courseAdd"]);
                break;
            case "/html/course/category.html":
                require(["courseCategory"]);
                break;
            case "/html/course/category_add.html":
                require(["courseCategory_add"]);
                break;
            case "/html/course/course_topic.html":
                require(["courseCourse_topic"]);
                break;
            case "/html/course/list.html":
                require(["courseList"]);
                break;
            case "/html/course/step1.html":
                require(["courseStep1"]);
                break;
            case "/html/course/step2.html":
                require(["courseStep2"]);
                break;
            case "/html/course/step3.html":
                require(["courseStep3"]);
                break;
        }
    });

})(window);