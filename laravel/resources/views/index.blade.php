@include('header')
<style type="text/css">
    .tishi{
        background: black;
        border: medium none;
        border-radius: 4px;
        cursor: pointer;
        font: 18px/42px "Microsoft YaHei";
        color:white;
        height: 22px;
        text-align: center;
        width: 285px;
    }
    .yzm-tishi{
        background: blcak;
        border: medium none;
        border-radius: 4px;
        cursor: pointer;
        font: 18px/42px "Microsoft YaHei";
        color:black;
        height: 22px;
        text-align: center;
        width: 300px;
    }

</style>
<!--banner 开始-->
<div class="banner">
    <div class="ban-bg">
        <h2 class="ban-tit">华图金融</h2>
        <p class="ban-des">你的银行网申简历规划专家</p>
        <div class="login-box">
            <div class="login-bg"></div>
            <div class="login">
                <!--                <form class="form2-login">-->
                <div class="text"><label for="username">账号</label><input type="text" name="username" id="username" placeholder="请输入您的账号"></div>
                <div class="text"><label for="password">密码</label><input type="password" name="password" id="password" placeholder="请输入您的密码"></div>
                <div class="forgetpd"><a href="forgetPass.php">忘记密码</a></div>
                <div class="toregist" id="toRegist">立即注册</div>
                <div class="clear"></div>
                <div class="autologin">
                    <label for="keeplogin" class="checkList" onclick="showCheck(this)">
                        <span class="coin"></span>
                        <input type="checkbox" name="keeplogin" id="keeplogin" title="同意">下次自动登录
                    </label>
                </div>
                <div id="login" class="login-btn"><button type="submit"  class="btn">登录</button></div>
                <div class="tishi">

                </div>
                <!--                </form>-->
            </div>
        </div>

    </div><!-- 登录 end  -->
</div><!--  banner end  -->


<div class="inx-box01">
    <ul>
        <li>
            <a class="ico" href="#"><i class="ico-1"></i></a>
            <h2><a href="#" title="VIP式服务">VIP式服务</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">深度揭露<br />简历问题</a></p>

        </li>

        <li>
            <a class="ico" href="#"><i class="ico-2"></i></a>
            <h2><a href="#" title="全真模拟网申环节">全真模拟网申环节</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">各大行简历模板<br />任性选择</a></p>

        </li>

        <li>
            <a class="ico" href="#"><i class="ico-3"></i></a>
            <h2><a href="#" title="全名师团队">全名师团队</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">随时在线<br />显示给出修改意见</a></p>

        </li>

        <li>
            <a class="ico" href="#"><i class="ico-4"></i></a>
            <h2><a href="#" title="简历处理进度">简历处理进度</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">实时通知<br />一切尽在你掌中</a></p>

        </li>
        <div class="clear"></div>
    </ul>
</div>
<div class="clear"></div>

<div class="yzm-tishi">

</div>

<!--底部 开始-->
@include('footer')
<!-- 注册 -->
<div class="regist-pop" id="registPopup">
    <div class="title">
        <h3 data-title="注册">注册</h3>
        <span>X</span>
    </div>
    <div class="cont">
        <form action="" method="post" class="form-regist">
            <div class="text">
                <label for="tel">手机号码</label>
                <input type="text" name="tel" id="tel" placeholder="填写可用于登录">
            </div>
            <div class="text">
                <label for="password">密码</label>
                <input type="password" name="password" id="pass" placeholder="请输入您的密码">
            </div>
            <meta name="_token" content="{{ csrf_token() }}"/>
            <div class="text">
                <label for="repassword">确认密码</label>
                <input type="password" name="repassword" id="repassword" placeholder="请再次输入您的密码">
            </div>
            <div class="text">
                <label for="verify">验证码</label>
                <input type="text" name="verify" id="verify" placeholder="请输入验证码">
                <!--<img src="images/temp/pic_1.jpg" alt="验证码" title="换一张" class="verifypic" id="verifypic" />-->
                <img width='65' height='35' style="margin-top:4px;margin-left:18px;" id='capt' src='captche.php' onclick='this.src="captche.php?"+Math.random()'>
            </div>
            <div class="text">
                <label for="repassword">检验码</label>
                <input type="text" name="code" id="code" placeholder="请输入检验码">
                <input id="getcode"  class="getcode" type="button"  value="点击发短信"/>
                <!--                <a class="getcode" id="getcode">获取检验码</a>-->
            </div>
            <div class="regist-btn"><button type="submit" id="register" class="btn">注册</button></div>
        </form>
    </div>
    <div  class="yzm-tishi">

    </div>
</div><!-- 注册 end -->
<div id="mask_shadow"></div>


<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/other.js"></script>
<script type="text/javascript" src="js/popup.js"></script>
<script>
    //弹出窗口--注册
    $(function () {
        $('#registPopup').popup({});
    });

</script>
<script type="text/javascript">

    $("#getcode").on("click", function () {

        var mobile = $('#tel').val();
        var password = $('#pass').val();

        var repassword = $('#repassword').val();

        var capt = $('#verify').val();

        var sjs = Math.random();
        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/g.test(mobile)) {
            $(".yzm-tishi").html('<span>请您输入正确的手机号噢！</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(password === repassword)
        {

        }else{
            $(".yzm-tishi").html('<span>两次密码必须一致</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        var reg=/^[A-Za-z0-9]+$/;

        if(!reg.test(password)||password.length<6||password.length>15){
            $(".yzm-tishi").html('<span>密码为6-15位的数字和字母的组合</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(capt==''){
            alert('请输入图片验证码!');return false;
        }
        var duanxin = 'duanxin';
        var token = $('#token').val();
        $.ajax({
            type: "POST",
            url: "{{ action('RegController@duanxin') }}",

            //dataType: 'jsonp',
            data: {'_token': token ,'mobile': mobile, 'sjs': sjs, 'password': password,'repassword':repassword,'capt':capt,'act':duanxin},
            success: function (res) {

                if (res == -11) {
                    $(".yzm-tishi").html('<span>非法请求</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -1) {
                    $(".yzm-tishi").html('<span>请您输入正确的手机号噢！</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -2) {
                    $(".yzm-tishi").html('<span>两次输入的密码必须一致！</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -3) {
                    $(".yzm-tishi").html('<span>密码长度6到16位字母和数字</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -4) {
                    $(".yzm-tishi").html('<span>图形验证码不正确</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -5) {
                    $(".yzm-tishi").html('<span>该手机号已经注册过，可以直接登录</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == 11) {
                    $(".yzm-tishi").html('<span>图形验证码错误，请刷新后输入</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -6) {
                    $(".yzm-tishi").html('<span>短信发送成功，请查收！</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    hqyzm();
                    return false;
                } else if (res == -7) {
                    $(".yzm-tishi").html('<span>短信发送失败！</span>');
                    $(".yzm-tishi span").fadeOut(5000);

                    return false;
                } else if (res == -15) {
                    $(".yzm-tishi").html('<span>该手机已经注册过！请直接登录哦！</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }
            }
        });


    });
    $("#register").on("click", function () {

        var mobile = $('#tel').val();
        var password = $('#pass').val();
        var repassword = $('#repassword').val();
        var capt = $('#verify').val();
        var dx = $('#code').val();

        var sjs = Math.random();
        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/g.test(mobile)) {
            $(".yzm-tishi").html('<span>请您输入正确的手机号噢！</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(password === repassword)
        {

        }else{
            $(".yzm-tishi").html('<span>两次密码必须一致</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        var reg=/^[A-Za-z0-9]+$/;

        if(!reg.test(password)||password.length<6||password.length>15){
            $(".yzm-tishi").html('<span>密码必须为6-15位的数字和字母的组合</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(capt==''){
            alert('请输入图片验证码!');return false;
        }
        if(dx==''){
            alert('请输入短信验证码!');return false;
        }
        var regis = 'regis';
        var token = $('#token').val();
        $.ajax({
            type: "POST",
            url: "{{ action('RegController@regis') }}",
            //dataType: 'jsonp',
            data: {'token':token,'mobile': mobile, 'sjs': sjs, 'password': password,'repassword':repassword,'capt':capt,'act':regis,'dx':dx},
            success: function (res) {
                if (res == -11) {
                    $(".yzm-tishi").html('<span>非法请求</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -1) {
                    $(".yzm-tishi").html('<span>请您输入正确的手机号噢！</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -2) {
                    $(".yzm-tishi").html('<span>两次输入的密码必须一致！</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -3) {
                    $(".yzm-tishi").html('<span>密码长度6到16位</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -4) {
                    $(".yzm-tishi").html('<span>图形验证码不正确</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -5) {
                    $(".yzm-tishi").html('<span>该手机号已经注册过，可以直接登录</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -6) {
                    $(".yzm-tishi").html('<span>短信验证码不正确</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -7) {
                    $(".yzm-tishi").html('<span>注册成功</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    location.reload();
                } else if (res == -8) {
                    $(".yzm-tishi").html('<span>注册失败</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }
            }
        });


    });
    $("#login").on("click", function () {

        var mobile = $('#username').val();
        var password = $('#password').val();
        var token = $('#token').val();
        var keeplogin = $('#keeplogin').val();
//        var sjs = Math.random();
        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/g.test(mobile)) {
            $(".tishi").html('<span>请您输入正确的手机号噢！</span>');
            $(".tishi span").fadeOut(5000);
            return false;
        }

        var reg=/^[A-Za-z0-9]+$/;

        if(!reg.test(password)||password.length<6||password.length>15){
            $(".tishi").html('<span>密码为6-15位的数字和字母的组合</span>');
            $(".tishi span").fadeOut(5000);
            return false;
        }
        var loginis = 'loginis';
        $.ajax({
            type: "POST",
            url: "{{ action('RegController@loginis') }}",
//            dataType: 'jsonp',
            data: {'mobile': mobile, 'password': password,'keeplogin':keeplogin,'act':loginis},
            success: function (res) {

                if (res == 1) {
                    $(".tishi").html('<span>登录成功</span>');
                    $(".tishi span").fadeOut(5000);
                    self.location='first';
                } else if (res == -1) {
                    $(".tishi").html('<span>请您输入正确的手机号噢！</span>');
                    $(".tishi span").fadeOut(5000);
                    return false;
                }else if (res == -3) {
                    $(".tishi").html('<span>密码长度6到16位</span>');
                    $(".tishi span").fadeOut(5000);
                    return false;
                }else if (res == -4) {
                    $(".tishi").html('<span>登录失败请重试</span>');
                    $(".tishi span").fadeOut(5000);
                    return false;
                }
            }
        });


    });
    function hqyzm() {

        var a = $("#getcode").attr("disabled", true);
        console.log(a);
        var SysSecond;
        var InterValObj;

        SysSecond = 60; //这里获取倒计时的起始时间
        InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行

        //将时间减去1秒，计算天、时、分、秒
        function SetRemainTime() {
            if (SysSecond > 0) {
                SysSecond = SysSecond - 1;
                var second = Math.floor(SysSecond % 60);             // 计算秒
                var minite = Math.floor((SysSecond / 60) % 60);      //计算分
                var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时
                var day = Math.floor((SysSecond / 3600) / 24);        //计算天

                $("#getcode").val(second + "秒");
            } else {
                //剩余时间小于或等于0的时候，就停止间隔函数
                window.clearInterval(InterValObj);
                //这里可以添加倒计时时间为0后需要执行的事件
                $("#getcode").val("点击发短信");
                $("#getcode").attr("disabled", false);
            }
        }
    }
</script>
