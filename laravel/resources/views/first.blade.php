@include('header')
<div class="main">
    <div class="welcom">

        <h3 class="ins-tips-1"><p>欢迎您!{{$mobile}}<span></span>在学员中心完善信息可获3次免费简历修改机会</p><a class="btn-1" href="member" title="点击进入">学员中心</a><a class="btn-1" href="wancheng" title="点击进入">简历中心</a></h3>
        <div class="clear"></div>
        <h4 class="ins-tips-2">剩余简历修改次数：<span>{{$times}}次</span></h4>
        <h4 class="ins-tips-2">免费修改机会已用尽?<a href="wxzhifu.php" title="">点此购买</a></h4>

        <div class="welcom-box">
            <div class="fl">
                <a class="flbtn" href="createresume" title="">创建简历</a>
                <p>您还没有简历 点击请创建</p>
            </div>
            <div class="fr">
                <a class="frbtn" href="yangben.php" title="">简历样本</a>
                <p>还是不会写?点击下载简历样本</p>
            </div>
            <div class="clear"></div>
        </div>
    </div><!-- welcom end -->
</div><!-- main end -->
<div class="clear"></div>

<!--底部 开始-->
@include('footer')