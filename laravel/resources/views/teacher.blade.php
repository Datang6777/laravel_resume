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
                    <th class="width-220">�û�</th>
                    <th class="width-180">�ύʱ��</th>
                    <th class="width-180">��������</th>
                    <th class="width-250">��������</th>
                    <!--                 <th class="width-230">����</th>-->
                </tr>
                <?php
                foreach ($row as $r2) {
                    echo '<tr><td>'.$r2->mobile.'</td><td>'.$r2->tijiaotime.'</td>
                    <td>'.$r2->title.'</td>
                    <input type="hidden" id="rid" value="'.$r2->rid.'">
                    <td><a class="btn-3" href="txiugai?rid='.$r2->rid.'" title="���Ԥ�����ļ���">Ԥ������ע</a></td>
<!--   <a href="dpde.php" class="btn-3" id="pizhu" title="��ע">�鿴�޸�</a>
            <td><a id="fasong" class="btn-3" href="#">����ѧԱ</a></td> -->
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