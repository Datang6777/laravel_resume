//�жϸ߶� ��������һ��
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
 <input type="radio" id="man" value="man" name="radtype" checked="checked">��
 </label>
 <label for="woman" class="radioList">
 <span class="coin"></span>
 <input type="radio"  id="woman" value="woman" name="radtype" checked="">Ů
 </label>
 <br/>
 <label for="man2" class="radioList">
 <span class="coin"></span>
 <input type="radio" id="man2" value="man2" name="radtype2" checked="checked">��2
 </label>
 <label for="woman2" class="radioList">
 <span class="coin"></span>
 <input type="radio"  id="woman2" value="woman2" name="radtype2" checked="">Ů2
 </label>
 <br/>

 <label for="keeplogin" class="checkList" onclick="showCheck(this)">
 <span class="coin"></span>
 <input type="checkbox" name="keeplogin" id="keeplogin" title="ͬ��">�´��Զ���¼
 </label>
 <br/>


 </form>
 */
//��ѡ��
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

//��ѡ��
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

//����
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

//���Ƹ�����Ϣ����
$.divselect("#divselect01","#inputselect01");
$.divselect("#divselect02","#inputselect02");
//��ʼ��������
$.divselect("#divselect03","#inputselect03");
//�༭����  ӦƸ���
$.divselect("#divselect04","#inputselect04");
//�༭���� ��������
$.divselect("#divselect05","#inputselect05");
//�༭���� �����̶�
$.divselect("#divselect06","#inputselect06");

//�༭���� ê����ʽ����
$('.vitae-bar>li').bind('mouseenter', function () {
    $(this).addClass('on').siblings().removeClass('on');
});


//�༭���� ׷��һ��
function addRow( row ){
    $(row).after( $(row).clone(true));
}
//�༭���� ɾ��һ��
function delRow( row,rows  ){
    if( $(rows).size() == "1" ){
        alert("�����ٱ���һ��");
    }else{
        confirm("ȷ��ɾ��һ����")
        $(row).remove();
    }
}

//Ԥ������ ��ʦ����
function viewBox(){
    $("#showview-box").click(function(){

        $("#view-box .cont").slideDown();
    });
    $("#closeview-box").click(function(){
        $("#view-box .cont").slideUp();
    });
}
viewBox();


 

