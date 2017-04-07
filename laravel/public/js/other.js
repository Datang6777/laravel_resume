//判断高度 保持至少一屏
var body_h = $(window).height();
var main_h = $(".main").height();
var main_nowh = body_h -$(".ht-top-ins").height() - $(".footer").height()-60;
if( main_nowh > main_h ){
    $(".main").height( main_nowh );
}

/*
 DOME
 <form action="#">
 <label for="man" class="radioList">
 <span class="coin"></span>
 <input type="radio" id="man" value="man" name="radtype" checked="checked">男
 </label>
 <label for="woman" class="radioList">
 <span class="coin"></span>
 <input type="radio"  id="woman" value="woman" name="radtype" checked="">女
 </label>
 <br/>
 <label for="man2" class="radioList">
 <span class="coin"></span>
 <input type="radio" id="man2" value="man2" name="radtype2" checked="checked">男2
 </label>
 <label for="woman2" class="radioList">
 <span class="coin"></span>
 <input type="radio"  id="woman2" value="woman2" name="radtype2" checked="">女2
 </label>
 <br/>

 <label for="keeplogin" class="checkList" onclick="showCheck(this)">
 <span class="coin"></span>
 <input type="checkbox" name="keeplogin" id="keeplogin" title="同意">下次自动登录
 </label>
 <br/>


 </form>
 */
//单选框
var radio_parent=".radioList";
var radio_input=radio_parent+" input[type='radio']";
var checked_radio_css="radio_checked";
var disabled_radio_css="radio_disabled";
function showRadio(){
    if($(radio_parent).length){
        $(radio_parent).each( function() {
            $(this).removeClass(checked_radio_css)
        });
        $(radio_input+":checked").each( function() {
            $(this).parent(radio_parent).addClass(checked_radio_css);
        });
        $(radio_input+":disabled").each( function() {
            $(this).parent(radio_parent).addClass(disabled_radio_css);
        });
    }
}
$(function(){
    $(radio_parent).click(function() {
        showRadio();
    });
    showRadio();
})

//复选框
var check_parent=".checkList";
var check_input=check_parent+" input[type='checkbox']";
var checked_css="checkbox_checked";
var disabled_check_css="checkbox_disabled";
function showCheck(obj){
    console.log($(obj).find("input[type='checkbox']").get(0).checked);
    if($(obj).find("input[type='checkbox']").get(0).checked){
        $(obj).removeClass(disabled_check_css);
        $(obj).addClass(checked_css);
    }else{
        $(obj).removeClass(checked_css);
        $(obj).addClass(disabled_check_css);
    };
}

//下拉
jQuery.divselect = function(divselectid,inputselectid) {
    var ul = $(divselectid+" ul");
    var cite = $(divselectid+" cite");
    $(divselectid+" cite").mouseover(function(){
        $(this).siblings('ul').mouseover(function () {
            $(this).show();
        })
        if($(this).siblings('ul').css("display")=="none"){
            $(this).siblings('ul').slideDown("fast");
        }else{
            $(this).siblings('ul').slideUp("fast");
        }
    });
    $(divselectid+" ul li a").click(function(){
        var txt = $(this).text();
        $(this).parent().parent().siblings('cite').html(txt);
        var value = $(this).attr("selectid");
        $("input"+inputselectid).val(value);//dmm20151019
        $(divselectid+" ul").hide();
    });
    $(ul).bind('mouseleave',function(){
        $(ul).hide();
    })
    $(cite).bind('mouseleave',function(){
        $(ul).hide();
    })
};

//完善个人信息下拉
$.divselect("#divselect01","#inputselect01");
$.divselect("#divselect02","#inputselect02");
//开始创建简历
$.divselect("#divselect03","#inputselect03");
//编辑简历  应聘类别
$.divselect("#divselect04","#inputselect04");
//编辑简历 工作性质
$.divselect("#divselect05","#inputselect05");
//编辑简历 熟练程度
$.divselect("#divselect06","#inputselect06");

//编辑简历 锚点样式定焦
$('.vitae-bar>li').bind('mouseenter', function () {
    $(this).addClass('on').siblings().removeClass('on');
});


//编辑简历 追加一条
function addRow( row ){
    $(row).after( $(row).clone(true));
}
//编辑简历 删除一条
function delRow( row,rows  ){
    if( $(rows).size() == "1" ){
        alert("请至少保留一条");
    }else{
        confirm("确认删除一条？")
        $(row).remove();
    }
}

//预览简历 教师点评
function viewBox(){
    $("#showview-box").click(function(){

        $("#view-box .cont").slideDown();
    });
    $("#closeview-box").click(function(){
        $("#view-box .cont").slideUp();
    });
}
viewBox();


 

