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
<!--banner ��ʼ-->
<div class="banner">
    <div class="ban-bg">
        <h2 class="ban-tit">��ͼ����</h2>
        <p class="ban-des">���������������滮ר��</p>
        <div class="login-box">
            <div class="login-bg"></div>
            <div class="login">
                <!--                <form class="form2-login">-->
                <div class="text"><label for="username">�˺�</label><input type="text" name="username" id="username" placeholder="�����������˺�"></div>
                <div class="text"><label for="password">����</label><input type="password" name="password" id="password" placeholder="��������������"></div>
                <div class="forgetpd"><a href="forgetPass.php">��������</a></div>
                <div class="toregist" id="toRegist">����ע��</div>
                <div class="clear"></div>
                <div class="autologin">
                    <label for="keeplogin" class="checkList" onclick="showCheck(this)">
                        <span class="coin"></span>
                        <input type="checkbox" name="keeplogin" id="keeplogin" title="ͬ��">�´��Զ���¼
                    </label>
                </div>
                <div id="login" class="login-btn"><button type="submit"  class="btn">��¼</button></div>
                <div class="tishi">

                </div>
                <!--                </form>-->
            </div>
        </div>

    </div><!-- ��¼ end  -->
</div><!--  banner end  -->


<div class="inx-box01">
    <ul>
        <li>
            <a class="ico" href="#"><i class="ico-1"></i></a>
            <h2><a href="#" title="VIPʽ����">VIPʽ����</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">��Ƚ�¶<br />��������</a></p>

        </li>

        <li>
            <a class="ico" href="#"><i class="ico-2"></i></a>
            <h2><a href="#" title="ȫ��ģ�����껷��">ȫ��ģ�����껷��</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">�����м���ģ��<br />����ѡ��</a></p>

        </li>

        <li>
            <a class="ico" href="#"><i class="ico-3"></i></a>
            <h2><a href="#" title="ȫ��ʦ�Ŷ�">ȫ��ʦ�Ŷ�</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">��ʱ����<br />��ʾ�����޸����</a></p>

        </li>

        <li>
            <a class="ico" href="#"><i class="ico-4"></i></a>
            <h2><a href="#" title="�����������">�����������</a></h2>
            <div class="line"><div class="line-on"></div></div>
            <p><a href="#">ʵʱ֪ͨ<br />һ�о���������</a></p>

        </li>
        <div class="clear"></div>
    </ul>
</div>
<div class="clear"></div>

<div class="yzm-tishi">

</div>

<!--�ײ� ��ʼ-->
@include('footer')
<!-- ע�� -->
<div class="regist-pop" id="registPopup">
    <div class="title">
        <h3 data-title="ע��">ע��</h3>
        <span>X</span>
    </div>
    <div class="cont">
        <form action="" method="post" class="form-regist">
            <div class="text">
                <label for="tel">�ֻ�����</label>
                <input type="text" name="tel" id="tel" placeholder="��д�����ڵ�¼">
            </div>
            <div class="text">
                <label for="password">����</label>
                <input type="password" name="password" id="pass" placeholder="��������������">
            </div>
            <div class="text">
                <label for="repassword">ȷ������</label>
                <input type="password" name="repassword" id="repassword" placeholder="���ٴ�������������">
            </div>
            <div class="text">
                <label for="verify">��֤��</label>
                <input type="text" name="verify" id="verify" placeholder="��������֤��">
                <!--<img src="images/temp/pic_1.jpg" alt="��֤��" title="��һ��" class="verifypic" id="verifypic" />-->
                <img width='65' height='35' style="margin-top:4px;margin-left:18px;" id='capt' src='captche.php' onclick='this.src="captche.php?"+Math.random()'>
            </div>
            <div class="text">
                <label for="repassword">������</label>
                <input type="text" name="code" id="code" placeholder="�����������">
                <input id="getcode"  class="getcode" type="button"  value="���������"/>
                <!--                <a class="getcode" id="getcode">��ȡ������</a>-->
            </div>
            <div class="regist-btn"><button type="submit" id="register" class="btn">ע��</button></div>
        </form>
    </div>
    <div  class="yzm-tishi">

    </div>
</div><!-- ע�� end -->
<div id="mask_shadow"></div>


<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/other.js"></script>
<script type="text/javascript" src="js/popup.js"></script>
<script>
    //��������--ע��
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
            $(".yzm-tishi").html('<span>����������ȷ���ֻ����ޣ�</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(password === repassword)
        {

        }else{
            $(".yzm-tishi").html('<span>�����������һ��</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        var reg=/^[A-Za-z0-9]+$/;

        if(!reg.test(password)||password.length<6||password.length>15){
            $(".yzm-tishi").html('<span>����Ϊ6-15λ�����ֺ���ĸ�����</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(capt==''){
            alert('������ͼƬ��֤��!');return false;
        }
        var duanxin = 'duanxin';
        $.ajax({
            type: "POST",
            url: "reg.php",
            //dataType: 'jsonp',
            data: {'mobile': mobile, 'sjs': sjs, 'password': password,'repassword':repassword,'capt':capt,'act':duanxin},
            success: function (res) {

                if (res == -11) {
                    $(".yzm-tishi").html('<span>�Ƿ�����</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -1) {
                    $(".yzm-tishi").html('<span>����������ȷ���ֻ����ޣ�</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -2) {
                    $(".yzm-tishi").html('<span>����������������һ�£�</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -3) {
                    $(".yzm-tishi").html('<span>���볤��6��16λ��ĸ������</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -4) {
                    $(".yzm-tishi").html('<span>ͼ����֤�벻��ȷ</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -5) {
                    $(".yzm-tishi").html('<span>���ֻ����Ѿ�ע���������ֱ�ӵ�¼</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == 11) {
                    $(".yzm-tishi").html('<span>ͼ����֤�������ˢ�º�����</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -6) {
                    $(".yzm-tishi").html('<span>���ŷ��ͳɹ�������գ�</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    hqyzm();
                    return false;
                } else if (res == -7) {
                    $(".yzm-tishi").html('<span>���ŷ���ʧ�ܣ�</span>');
                    $(".yzm-tishi span").fadeOut(5000);

                    return false;
                } else if (res == -15) {
                    $(".yzm-tishi").html('<span>���ֻ��Ѿ�ע�������ֱ�ӵ�¼Ŷ��</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }
            }
        });


    });
    $("#register").on("click", function () {

        var mobile = $('#tel').val();
        var password = $('#pass').val();
        console.log(password);
        var repassword = $('#repassword').val();
        console.log(repassword);
        var capt = $('#verify').val();
        var dx = $('#code').val();

        var sjs = Math.random();
        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/g.test(mobile)) {
            $(".yzm-tishi").html('<span>����������ȷ���ֻ����ޣ�</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(password === repassword)
        {

        }else{
            $(".yzm-tishi").html('<span>�����������һ��</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        var reg=/^[A-Za-z0-9]+$/;

        if(!reg.test(password)||password.length<6||password.length>15){
            $(".yzm-tishi").html('<span>�������Ϊ6-15λ�����ֺ���ĸ�����</span>');
            $(".yzm-tishi span").fadeOut(5000);
            return false;
        }
        if(capt==''){
            alert('������ͼƬ��֤��!');return false;
        }
        if(dx==''){
            alert('�����������֤��!');return false;
        }
        var regis = 'regis';
        $.ajax({
            type: "POST",
            url: "reg.php",
            //dataType: 'jsonp',
            data: {'mobile': mobile, 'sjs': sjs, 'password': password,'repassword':repassword,'capt':capt,'act':regis,'dx':dx},
            success: function (res) {
                if (res == -11) {
                    $(".yzm-tishi").html('<span>�Ƿ�����</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -1) {
                    $(".yzm-tishi").html('<span>����������ȷ���ֻ����ޣ�</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                } else if (res == -2) {
                    $(".yzm-tishi").html('<span>����������������һ�£�</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -3) {
                    $(".yzm-tishi").html('<span>���볤��6��16λ</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -4) {
                    $(".yzm-tishi").html('<span>ͼ����֤�벻��ȷ</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -5) {
                    $(".yzm-tishi").html('<span>���ֻ����Ѿ�ע���������ֱ�ӵ�¼</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -6) {
                    $(".yzm-tishi").html('<span>������֤�벻��ȷ</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    return false;
                }else if (res == -7) {
                    $(".yzm-tishi").html('<span>ע��ɹ�</span>');
                    $(".yzm-tishi span").fadeOut(5000);
                    window.history.go('index.php');

                } else if (res == -8) {
                    $(".yzm-tishi").html('<span>ע��ʧ��</span>');
                    $(".yzm-tishi span").fadeOut(5000);
//
                    return false;
                }
            }
        });


    });
    $("#login").on("click", function () {

        var mobile = $('#username').val();
        var password = $('#password').val();

        var keeplogin = $('#keeplogin').val();
//        var sjs = Math.random();
        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/g.test(mobile)) {
            $(".tishi").html('<span>����������ȷ���ֻ����ޣ�</span>');
            $(".tishi span").fadeOut(5000);
            return false;
        }

        var reg=/^[A-Za-z0-9]+$/;

        if(!reg.test(password)||password.length<6||password.length>15){
            $(".tishi").html('<span>����Ϊ6-15λ�����ֺ���ĸ�����</span>');
            $(".tishi span").fadeOut(5000);
            return false;
        }
        var loginis = 'loginis';
        $.ajax({
            type: "POST",
            url: "reg.php",
//            dataType: 'jsonp',
            data: {'mobile': mobile, 'password': password,'keeplogin':keeplogin,'act':loginis},
            success: function (res) {

                if (res == 1) {
                    $(".tishi").html('<span>��¼�ɹ�</span>');
                    $(".tishi span").fadeOut(5000);
                    self.location='first.php?mobile='+mobile;
                } else if (res == -1) {
                    $(".tishi").html('<span>����������ȷ���ֻ����ޣ�</span>');
                    $(".tishi span").fadeOut(5000);
                    return false;
                }else if (res == -3) {
                    $(".tishi").html('<span>���볤��6��16λ</span>');
                    $(".tishi span").fadeOut(5000);
                    return false;
                }else if (res == -4) {
                    $(".tishi").html('<span>��¼ʧ��������</span>');
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

        SysSecond = 60; //�����ȡ����ʱ����ʼʱ��
        InterValObj = window.setInterval(SetRemainTime, 1000); //���������1��ִ��

        //��ʱ���ȥ1�룬�����졢ʱ���֡���
        function SetRemainTime() {
            if (SysSecond > 0) {
                SysSecond = SysSecond - 1;
                var second = Math.floor(SysSecond % 60);             // ������
                var minite = Math.floor((SysSecond / 60) % 60);      //�����
                var hour = Math.floor((SysSecond / 3600) % 24);      //����Сʱ
                var day = Math.floor((SysSecond / 3600) / 24);        //������

                $("#getcode").val(second + "��");
            } else {
                //ʣ��ʱ��С�ڻ����0��ʱ�򣬾�ֹͣ�������
                window.clearInterval(InterValObj);
                //���������ӵ���ʱʱ��Ϊ0����Ҫִ�е��¼�
                $("#getcode").val("���������");
                $("#getcode").attr("disabled", false);
            }
        }
    }
</script>
