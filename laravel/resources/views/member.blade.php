@include('header')
<div class="main">
    <div class="user-center">
        <input type="hidden" name="mobile" value="{{$mobile}}">
        <h3 class="ins-tips-1"><p>尊敬的用户：完善您的个人信息可免费获得3次简历修改机会！</p><a id ="wanshan" href="##" title="点击完善您的个人信息">点击完善</a></h3>
        <input type="hidden" id="mobile" name="mobile" value="">
        <div class="clear"></div>

        <div class="u-center-box">

            <h3>已提交简历</h3>
            <table class="ins-table">
                <tr>
                    <th class="width-220">提交时间</th>
                    <th>简历名称</th>
                    <th class="width-280">简历管理</th>
                </tr>
                <?php
                foreach ($row as $r2) {
                    echo '<tr><td>'.$r2->currenttime.'</td>
                    <td>'.$r2->title.'</td>
                    <td><a class="btn-1" href="detail?rid='.$r2->rid.'" title="点击预览您的简历">预览</a></td>
                    </tr>';
                }
                ?>
            </table>
            <div class="clear"></div>
            <?php
            if(!empty($row2)){
                echo '<h3>已修改好简历</h3>
              <table class="ins-table">
                <tr>
                    <th class="width-220">创建时间</th>
                    <th>简历名称</th>
                    <th class="width-420">简历管理</th>
                </tr>';
            }
            ?>
            <?php

            foreach ($row2 as $w2) {
                echo '<tr><td>'.$w2->currenttime.'</td><td>'.$w2->title.'</td><td><a class="btn-4" href="detail?act=mem&rid='.$w2->rid.'" title="点击预览您的简历">预览</a><a href="tedit?rid='.$w2->rid.'" style="width:150px;" class="btn-3" id="pizhu" title="批注">查看点评，并修改</a></tr>';}
            ?>

            </table>
            <div class="clear"></div>
        </div>

    </div><!--user-center end -->
</div><!-- main end -->
<div class="clear"></div>
{{--<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>--}}
<script type="text/javascript">
    $("#wanshan").on("click" ,function()
    {
        var checkwanshan = 'checkwanshan';
        var mobile = '<?php echo $mobile;?>';
        $.ajax({
            type: "POST",
            url: "reg.php",
            data: {'mobile': mobile, 'act':checkwanshan},
            success: function (res) {
                if (res == 1) {
                    self.location='wanshan.php?mobile='+mobile;
                } else if (res == 2) {
                    alert("个人信息已经完善！");
                    return false;
                }
            }
        });
    });
</script>




















@include('footer');