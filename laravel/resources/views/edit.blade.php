@include('header')

<div class="user-vitae">

    <ul class="vitae-bar">
        <li class="on"><a href="#jyjl">��������</a></li>
        <li><a href="#gzsxjl">����ʵϰ����</a></li>
        <li><a href="#itnl">IT����</a></li>
        <li><a href="#yynl">��������</a></li>
        <li><a href="#qtqk">�������</a></li>
        <li><a href="#jtbj">��ͥ����</a></li>
        <li><a href="#bmxx">������Ϣ</a></li>
    </ul>
    <div class="clear"></div>

    <h3 class="vitae-title"><?php echo $row[0]->title;?></h3>
    <form action="saveresume2" method="post" enctype="multipart/form-data" class="vitae-from">
        <input type="hidden" name="rid" value='<?php echo $row[0]->rid;?>'>
        <input type="hidden" name="title" value='<?php echo $row[0]->title;?>'>
        <h4>������Ϣ</h4>
        <div class="vitae-line"></div>

        <div class="vitae-box vitae-box02">
            <!-- ������Ϣ begin -->
            <div class="jbxx-left">

                <ul class="row3">
                    <li class="col-1">
                        <label for="username">����</label>
                        <input type="text" name="username" id="username" value='<?php  echo  $row[0]->username;?>'>
                    </li>

                    <li class="col-2">
                        <label for="yplb">ӦƸ���</label>
                        <div class="divselect" id="divselect04">
                            <cite><?php  echo  $row[0]->yplb;?></cite>
                            <ul>
                                <li><a selectid="ӦƸ���1">ӦƸ���1</a></li>
                                <li><a selectid="ӦƸ���2">ӦƸ���2</a></li>
                                <li><a selectid="ӦƸ���3">ӦƸ���3</a></li>
                                <li><a selectid="ӦƸ���4">ӦƸ���4</a></li>
                                <li><a selectid="ӦƸ���5">ӦƸ���5</a></li>
                            </ul>
                        </div>
                        <input name="yplb" type="hidden" value="" id="inputselect04">
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row3">
                    <li class="col-1">
                        <label for="xb">�Ա�</label>
                        <input type="text" name="xb" id="xb"  value='<?php  echo  $row[0]->xb;?>'>
                    </li>

                    <li class="col-2">
                        <label for="brithdate">��������</label>
                        <input type="text" name="brithdate" id="brithdate"  value='<?php  echo  $row[0]->birthdate;?>'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row3">
                    <li class="col-1">
                        <label for="zzlx">֤������</label>
                        <input type="text" name="zzlx" id="zzlx" value='<?php  echo  $row[0]->zzlx;?>'>
                    </li>

                    <li class="col-2">
                        <label for="zzno">֤������</label>
                        <input type="text" name="zzno" id="zzno" value='<?php  echo  $row[0]->zzno;?>'>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div><!-- ���end  �Ҳ�begin -->

            <div class="jbxx-right">
                <div class="myphoto"><img src="<?php  echo  $row[0]->touxiang;?>" alt="" title=""/></div>
                <input type="file" name="touxiang" value="">
                <button type="submit" class="up-btn">����޸�</button>
            </div><!-- �Ҳ�end -->
            <div class="vitae-line"></div>


            <ul class="row3">
                <li class="col-1">
                    <label for="gj">����</label>
                    <input type="text" name="gj" id="gj" value='<?php  echo  $row[0]->gj;?>'>
                </li>
                <li class="col-2">
                    <label for="mz">����</label>
                    <input type="text" name="mz" id="mz" value='<?php  echo  $row[0]->mz;?>'>
                </li>
                <li class="col-3">
                    <label for="zzmm">������ò</label>
                    <input type="text" name="zzmm" id="zzmm" value='<?php  echo  $row[0]->zzmm;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row3">
                <li class="col-1">
                    <label for="sg">���</label>
                    <input type="text" name="sg" id="sg" value='<?php  echo  $row[0]->sg;?>'>
                </li>

                <li class="col-2">
                    <label for="tz">����</label>
                    <input type="text" name="tz" id="tz" value='<?php  echo  $row[0]->tz;?>'>
                </li>

                <li class="col-3">
                    <label for="hyzk">����״��</label>
                    <input type="text" name="hyzk" id="hyzk" value='<?php  echo  $row[0]->hyzk;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row3">
                <li class="col-1">
                    <label for="dqhj">��ǰ����</label>
                    <input type="text" name="dqhj" id="dqhj" value='<?php  echo  $row[0]->dqhj;?>'>
                </li>

                <li class="col-2">
                    <label for="hjlx">��������</label>
                    <input type="text" name="hjlx" id="hjlx" value='<?php echo $row[0]->hjlx;?>'>
                </li>

                <li class="col-3">
                    <label for="jtzz">��ͥסַ</label>
                    <input type="text" name="jtzz" id="jtzz" value='<?php echo $row[0]->jtzz;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="bysj">��ҵʱ��</label>
                    <input type="text" name="bysj" id="bysj" value='<?php echo $row[0]->bysj;?>'>
                </li>

                <li class="col-2">
                    <label for="syd">��Դ��</label>
                    <input type="text" name="syd" id="syd" value='<?php echo $row[0]->syd;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="dzxx">��������</label>
                    <input type="text" name="dzxx" id="dzxx" value='<?php echo $row[0]->dzxx;?>'>
                </li>

                <li class="col-2">
                    <label for="sjhm">�ֻ�����</label>
                    <input type="text" name="sjhm" id="sjhm" value='<?php echo $row[0]->sjhm;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="jjlxr">������ϵ��</label>
                    <input type="text" name="jjlxr" id="jjlxr" value='<?php echo $row[0]->jjlxr;?>'>
                </li>

                <li class="col-2">
                    <label for="jjlxrsj">������ϵ���ֻ�</label>
                    <input type="text" name="jjlxrsj" id="jjlxrsj" value='<?php echo $row[0]->jjlxrsj;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>
            <!-- ������Ϣend   ��������begin -->

            <h4 id="jyjl" name="jyjl">��������</h4>
            <div class="vitae-line"></div>
        <?php
        foreach ($xuexirow as $key=>$v)
        {
            echo ' <div class="row-edu rowEdu">
                <ul class="row4">
                    <li class="col-1">
                        <label for="kssj">��ֹʱ��</label>
                        <input type="text" name="kssj" id="kssj" value='.$xuexirow[$key]->kssj.'>
                    </li>

                    <li class="col-2">
                        <label for="tzsj">��</label>
                        <input type="text" name="tzsj" id="tzsj" value='.$xuexirow[$key]->tzsj.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="jjlxr">ѧУ</label>
                        <input type="text" name="xuexiao" id="jjlxr" value='.$xuexirow[$key]->xuexiao.'>
                    </li>

                    <li class="col-2">
                        <label for="jjlxrsj">רҵ</label>
                        <input type="text" name="zhuanye" id="jjlxrsj" value='.$xuexirow[$key]->zhuanye.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xl">ѧ��</label>
                        <input type="text" name="xl" id="xl" value='.$xuexirow[$key]->xl.'>
                    </li>

                    <li class="col-2">
                        <label for="xllx">ѧ������</label>
                        <input type="text" name="xllx" id="xllx" value='.$xuexirow[$key]->xllx.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xy">ѧԺ</label>
                        <input type="text" name="xy" id="xy" value='.$xuexirow[$key]->xy.'>
                    </li>

                    <li class="col-2">
                        <label for="zy">����רҵ���</label>
                        <input type="text" name="zy" id="zy" value='.$xuexirow[$key]->zy.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xw">ѧλ</label>
                        <input type="text" name="xw" id="xw" value='.$xuexirow[$key]->xw.'>
                    </li>

                    <li class="col-2">
                        <label for="pm">�꼶����</label>
                        <input type="text" name="pm" id="pm" value='.$xuexirow[$key]->pm.'>
                    </li>
                    <div class="clear"></div>
<!--                    <div class="view"><p>�꼶����:</p><p>���ʶ�����</p></div><!--�Ҳ���� -->
                </ul>
                <div class="vitae-line"></div>

                <div class="row5">
                    <label for="zxkc">���޿γ̼��ɼ�</label>
                    <textarea name="zxkc" id="zxkc" value='.$xuexirow[$key]->zxkc.'></textarea>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>
            </div>';
        }
        ?>

        <!-- ��������end   ����ʵϰ����begin -->

            <h4 id="gzsxjl" name="gzsxjl">����ʵϰ����</h4>
            <div class="vitae-line"></div>
            <?php
            foreach ($gongzuorow as $key=>$v)
            {
                echo '  <div class="row-edu rowWork">
                <ul class="row4">
                    <li class="col-1">
                        <label for="kssj">��ֹʱ��</label>
                        <input type="text" name="gzkssj" id="kssj" value='.$gongzuorow[$key]->gzkssj.'>
                    </li>

                    <li class="col-2">
                        <label for="tzsj">��</label>
                        <input type="text" name="gztzsj" id="tzsj" value='.$gongzuorow[$key]->gztzsj.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <div class="row1">
                    <label for="dw">����/ʵϰ��λ</label>
                    <input type="text" name="gzdw" id="gzdw" value='.$gongzuorow[$key]->gzdw.'>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xl">��������</label>
                        <div class="divselect" id="divselect05">
                            <cite>'.$gongzuorow[$key]->gzxz.'</cite>
                            <ul>
                                <li><a selectid="��������1">��������1</a></li>
                                <li><a selectid="��������2">��������2</a></li>
                                <li><a selectid="��������3">��������3</a></li>
                                <li><a selectid="��������4">��������4</a></li>
                                <li><a selectid="��������5">��������5</a></li>
                            </ul>
                        </div>
                        <input name="gzxz" type="hidden" value="" id="inputselect05">
                    </li>

                    <li class="col-2">
                        <label for="drzw">����ְ��</label>
                        <input type="text" name="gzdrzw" id="drzw" value='.$gongzuorow[$key]->gzdrzw.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <div class="row1">
                    <label for="lzyy">��ְԭ��</label>
                    <input type="text" name="gzlzyy" id="gzlzyy" value='.$gongzuorow[$key]->gzlzyy.'>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>

                <div class="row5 row5a">
                    <label for="gzzz">��Ҫ����ְ��</label>
                    <textarea name="gzzz" id="gzzz" value='.$gongzuorow[$key]->gzzz.'></textarea>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>

                <ul class="row3">
                    <li class="col-1">
                        <label for="zmr">֤����</label>
                        <input type="text" name="zmr" id="zmr" value='.$gongzuorow[$key]->zmr.'>
                    </li>

                    <li class="col-2">
                        <label for="dwzw">��λ��ְ��</label>
                        <input type="text" name="gzdwzw" id="gzdwzw" value='.$gongzuorow[$key]->gzdwzw.'>
                    </li>

                    <li class="col-3">
                        <label for="lxdh">��ϵ�绰</label>
                        <input type="text" name="gzlxdh" id="lxdh" value='.$gongzuorow[$key]->gzlxdh.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>
            </div>';
            }
            ?>

            <div class="vitae-line"></div>
            <!-- ����ʵϰ����end  IT����begin -->

            <h4 id="itnl" name="itnl">IT����</h4>
            <div class="vitae-line"></div>
            <ul class="row2">
                <li class="col-1">
                    <label for="it">IT����</label>
                    <input type="text" name="it" id="it" value='<?php echo $row[0]->it;?>'>
                </li>

                <li class="col-2">
                    <label for="jnlb">�������</label>
                    <input type="text" name="jnlb" id="jnlb" value='<?php echo $row[0]->jnlb;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="sysj">ʹ��ʱ��</label>
                    <input type="text" name="sysj" id="sysj" value='<?php echo $row[0]->sysj;?>'>
                </li>

                <li class="col-2">
                    <label for="slcd">�����̶�</label>
                    <div class="divselect" id="divselect06">
                        <cite><?php  echo  $row[0]->slcd;?></cite>
                        <ul>
                            <li><a selectid="�����̶�1">�����̶�1</a></li>
                            <li><a selectid="�����̶�2">�����̶�2</a></li>
                            <li><a selectid="�����̶�3">�����̶�3</a></li>
                            <li><a selectid="�����̶�4">�����̶�4</a></li>
                            <li><a selectid="�����̶�5">�����̶�5</a></li>
                        </ul>
                    </div>
                    <input name="slcd" type="hidden" value="" id="inputselect06">
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>
            <!-- IT����end  ��������begin -->

            <h4 id="yynl" name="yynl">��������</h4>
            <div class="vitae-line"></div>

            <ul class="row2 row2a">
                <li class="col-1">
                    <label for="yydjks">Ӣ��ȼ�����</label>
                    <input type="text" name="yydjks" id="yydjks" value='<?php echo $row[0]->yydjks;?>'>
                </li>

                <li class="col-2">
                    <label for="kscj">Ӣ��ȼ����Գɼ�</label>
                    <input type="text" name="kscj" id="kscj" value='<?php echo $row[0]->kscj;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2 row2a">
                <li class="col-1">
                    <label for="kysp">Ӣ�����ˮƽ</label>
                    <input type="text" name="kysp" id="kysp" value='<?php echo $row[0]->kysp;?>'>
                </li>

                <li class="col-2">
                    <label for="qtwy">�����������������ˮƽ</label>
                    <input type="text" name="qtwy" id="qtwy" value='<?php echo $row[0]->qtwy;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="fyqk">�����������</label>
                <input type="text" name="fyqk" id="fyqk" value='<?php echo $row[0]->fyqk;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>
            <!-- ��������end  �������begin -->

            <h4 id="qtqk" name="qtqk">�������</h4>
            <div class="vitae-line"></div>

            <div class="row1 row1a">
                <label for="zgzs">����רҵ�����ʸ�֤��</label>
                <input type="text" name="zgzs" id="zgzs" value='<?php echo $row[0]->zgzs;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="shhd">���</label>
                <input type="text" name="shhd" id="shhd" value='<?php echo $row[0]->shhd;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="xmjy">��Ŀ����</label>
                <textarea name="xmjy" id="xmjy" value='<?php echo $row[0]->xmjy;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="yjcg">�о��ɹ�</label>
                <input type="text" name="yjcg" id="yjcg" value='<?php echo $row[0]->yjcg;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="jcqk">�������</label>
                <input type="text" name="jcqk" id="jcqk" value='<?php echo $row[0]->jcqk;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>
            <!-- �������end  ��ͥ����begin -->

            <h4 id="jtbj" name="jtbj">��ͥ����</h4>
            <div class="vitae-line"></div>

            <div class="row1 row1a">
                <label for="zgyh">�Ƿ��������ܹ����й�����</label>
                <input type="text" name="zgyh" id="zgyh" value='<?php echo $row[0]->zgyh;?>' >
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="fname">��������</label>
                    <input type="text" name="fname" id="fname" value='<?php echo $row[0]->fname;?>'>
                </li>

                <li class="col-2">
                    <label for="fjnlb">�������</label>
                    <input type="text" name="fjnlb" id="fjnlb" value='<?php echo $row[0]->fjnlb;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="fdw">������λ</label>
                    <input type="text" name="fdw" id="fdw" value='<?php echo $row[0]->fdw;?>'>
                </li>
                <li class="col-2">
                    <label for="fzyzw">ְҵְ��</label>
                    <input type="text" name="fzyzw" id="fzyzw" value='<?php echo $row[0]->fzyzw;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="mname">ĸ������</label>
                    <input type="text" name="mname" id="mname" value='<?php echo $row[0]->mnane;?>'>
                </li>

                <li class="col-2">
                    <label for="mjnlb">�������</label>
                    <input type="text" name="mjnlb" id="mjnlb" value='<?php echo $row[0]->mjnlb;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="mdw">������λ</label>
                    <input type="text" name="mdw" id="mdw" value='<?php echo $row[0]->mdw;?>'>
                </li>

                <li class="col-2">
                    <label for="mzyzw">ְҵְ��</label>
                    <input type="text" name="mzyzw" id="mzyzw" value='<?php echo $row[0]->mzyzw;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="qtcy">������ͥ��Ա����Ҫ����ϵ</label>
                <textarea name="qtcy" id="qtcy" value='<?php echo $row[0]->qtcy;?>' ></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>
            <!-- ��ͥ����end  ������Ϣbegin -->

            <h4 id="bmxx" name="bmxx">������Ϣ</h4>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="grpj">��������</label>
                <textarea name="grpj" id="grpj" value='<?php echo $row[0]->grpj;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="tcah">�س�����</label>
                <textarea name="tcah" id="tcah" value='<?php echo $row[0]->tcah;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="zygh">��δ��ӦƸ�ɹ������δ����ְҵ�滮��ʲô����400�����ڣ�</label>
                <textarea name="zygh" id="zygh" value='<?php echo $row[0]->zygh;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="bsdd">���Եص�</label>
                    <input type="text" name="bsdd" id="bsdd" value='<?php echo $row[0]->bsdd;?>'>
                </li>

                <li class="col-2">
                    <label for="qwyx">������н</label>
                    <input type="text" name="qwyx" id="qwyx" value='<?php echo $row[0]->qwyx;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>
            <!-- ������Ϣend  �ϴ���Ƭbegin -->

            <h4 id="sczp" name="sczp">�ϴ���Ƭ</h4>
            <div class="vitae-line"></div>

            <div class="row6">
                <label for="zygh">��׼֤����</label>
                <div class="morephoto">
                    <img src="<?php  echo  $row[0]->zhengjianzhao;?>" alt="" title=""/>
                    <input type="file" name="zhengjianzhao" value="">
                </div>
                <p>���50kb��ֻ����jpeg��jpg��bmp����gif��ʽ</p>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row6">
                <label for="zygh">�����˽���������</label>
                <div class="morephoto"><img src="<?php  echo  $row[0]->gerenzhao;?>" alt="" title=""/>  <input type="file" name="gerenzhao" value=""></div>
                <p>���50kb��ֻ����jpeg��jpg��bmp����gif��ʽ</p>
                <div class="clear"></div>
            </div>
            <div class="row-btna">
                <button type="submit" class="vitae-btn">ȷ���޸�</button>
            </div>
        </div><!-- vitae-box01 end -->
    </form>
</div><!-- user-vitae end -->
<div class="clear"></div>





@include('footer')

