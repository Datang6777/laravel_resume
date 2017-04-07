@include('header')
<style type="text/css">
    .btn-3{
        display: inline-block;
        background: #ff7701;
        height: 28px;
        width: 80px;
        border-radius: 14px;
        color: #fff;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
    }
    .btn-2{
        display: inline-block;
        background: #ff7701;
        height: 28px;
        width: 40px;
        border-radius: 14px;
        color: #fff;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
    }
    #btn-3{
        display: inline-block;
        background: #ff7701;
        height: 28px;
        width: 120px;
        border-radius: 14px;
        color: #fff;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
    }
</style>
<div class="main">
    <div class="creat-done">


        <div class="creat-done-box">
            <table class="ins-table">
                <tr>
                    <th class="width-220">用户</th>
                    <th class="width-180">提交时间</th>
                    <th class="width-180">简历名称</th>
                    <th class="width-250">简历管理</th>
                    <!--                 <th class="width-230">操作</th>-->
                </tr>
                <?php
                foreach ($row as $r2) {
                    echo '<tr><td>'.$r2->mobile.'</td><td>'.$r2->tijiaotime.'</td>
                    <td>'.$r2->title.'</td>
                    <input type="hidden" id="rid" value="'.$r2->rid.'">
                    <td><a class="btn-3" href="txiugai?rid='.$r2->rid.'" title="点击预览您的简历">预览并批注</a></td>
<!--   <a href="dpde.php" class="btn-3" id="pizhu" title="批注">查看修改</a>
            <td><a id="fasong" class="btn-3" href="#">发给学员</a></td> -->
                    </tr>';
                }
                ?>
            </table>
            <div class="clear"></div>
        </div>

    </div><!--creat-done end -->
     <?php echo $page_banner?>
</div><!-- main end -->
<div class="clear"></div>

@include('footer')