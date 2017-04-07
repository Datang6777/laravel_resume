@include('header')

<div class="main">
    <div class="creat-start">
        <h3 class="ins-tips-1"><p>欢迎您!<span> {{$mobile}}</span>在学员中心完善信息可获3次免费简历修改机会</p><a class="btn-1" href="member" title="点击进入">学员中心</a><a class="btn-1" href="wancheng?" title="点击进入">简历中心</a></h3>
        <div class="clear"></div>
        <h4 class="ins-tips-2">剩余简历修改次数：<span>{{$times}}次</span></h4>
        <h4 class="ins-tips-2">免费修改机会已用尽?<a href="#" title="">点此购买</a></h4>

        <div class="creat-box">
            <h3>创建简历</h3>
            <div class="ins-from">
                <div class="text"><label for="name">简历名称</label><input type="text" name="name" id="name" placeholder="请输入简历名称"></div>
                <div class="clear"></div>
                <div class="temp">
                    <label for="inputselect03">简历模版</label>
                    <div class="divselect" id="divselect03">
                        <cite>请选择简历模版</cite>
                        <ul>
                            <li><a selectid="中国工商银行网申模版">中国工商银行网申模版</a></li>
                            <li><a selectid="中国建设银行网申模板">中国建设银行网申模板</a></li>
                            <li><a selectid="中国交通银行网申模版">中国交通银行网申模版</a></li>
                            <li><a selectid="中国农业银行网申模版">中国农业银行网申模版</a></li>
                            <li><a selectid="中国银行网申模版">中国银行网申模版</a></li>
                        </ul>
                    </div>
                    <input name="temp" type="hidden" value="" id="inputselect03">
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
                <div id="create" class="btn-box"><button type="submit" class="btn">开始创建</button></div>
            </div>
        </div>
    </div><!-- creat-start end -->
</div><!-- main end -->
<div class="clear"></div>
<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript">
    $("#create").on("click",function(){

        var name = $("#name").val();

        var muban = $("#inputselect03").val();
        if(name==''){
            alert('请输入简历名称!');return false;
        }
        if(muban==''){
            alert('请输入模板名称!');return false;
        }
        location.href='resume?muban='+muban+'&name='+name;
    })
</script>
@include('footer')
