@include('header')
<div class="main">
    <div class="creat-done">
        <h3 class="ins-tips-1"><p>欢迎您!<span><?php echo $mobile; ?></span>在学员中心完善信息可获3次免费简历修改机会</p><a class="btn-1" href="member" title="点击进入">学员中心</a></h3>
        <div class="clear"></div>
        <h4 class="ins-tips-2">剩余简历修改次数：<span><?php echo $times;?>次</span></h4>
        <h4 class="ins-tips-2">免费修改机会已用尽?<a href="#" title="">点此购买</a></h4>

        <div class="creat-done-box">
            <table class="ins-table">
                <tr>
                    <th class="width-220">创建时间</th>
                    <th>简历名称</th>
                    <th class="width-250">简历管理</th>
                    <th class="width-230">简历提交</th>
                </tr>

                <?php
                foreach ($row as $r2) {
                    echo '<tr><td>'.$r2->currenttime.'</td>
                    <td>'.$r2->title.'</td>
                    <input type="hidden" id="rid" value="'.$r2->rid.'">
                    <td><a class="btn-1" href="edit?rid='.$r2->rid.'" title="点击编辑您的简历">编辑</a><a class="btn-1" href="detail?rid='.$r2->rid.'" title="点击预览您的简历">预览</a><a class="btn-1" onclick="return del('.$r2->rid.')" title="点击删除该简历">删除</a></td>
                    <td><a id="tijiao" class="btn-2" href="#">提交</a></td> </tr>';
                }

                ?>


            </table>
            <div class="clear"></div>
        </div>

    </div><!--creat-done end -->
</div><!-- main end -->
<div class="clear"></div>

<script type="text/javascript" src ="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript">
    $("#tijiao").on("click", function () {
        var rid = $('#rid').val();

        var checktimes= 'checktimes';
        var tijiao = 'tijiao';
        $.ajax({
            type: "POST",
            url: "tijiao",
            //dataType: 'jsonp',

            data: {'act':checktimes},
            success: function (res) {
                if (res == -1) {
                    alert('您的服务次数已经用完，感谢支持');
                    return false;
                }else{
                    alert('我们将在3-5个工作日内完成您的简历修改，修改完成给您下发短信,请您随时关注简历修改动态.');
                    location.href='member?rid='+rid + '&act='+tijiao;
                }
            }
        });
    });

</script>
<script type="text/javascript">
    var shan= 'shan';
    function del(rid){
        if(confirm("确认要删除？"))
        {
            $.ajax({
                type:"POST",
                {{--url:"{{ action('FirstController@delete')}}",--}}
                url:"delete",
                data:{'rid':rid,'act':shan},
                success:function(res)
                {
                    if(res == 1)
                    {
                        alert("删除成功");
                        location.reload();
                    }else if(res ==2){
                        alert("删除失败");
                        return false;
                    }
                }
            })
        }else{

        }
    }


</script>
@include('footer')