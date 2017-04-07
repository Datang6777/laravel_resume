@include('header')

<div class="user-vitae">

    <ul class="vitae-bar">
        <li class="on"><a href="#jyjl">教育经历</a></li>
        <li><a href="#gzsxjl">工作实习经历</a></li>
        <li><a href="#itnl">IT技能</a></li>
        <li><a href="#yynl">语言能力</a></li>
        <li><a href="#qtqk">其他情况</a></li>
        <li><a href="#jtbj">家庭背景</a></li>
        <li><a href="#bmxx">报名信息</a></li>
    </ul>
    <div class="clear"></div>

    <h3 class="vitae-title"><?php echo $row[0]->title;?></h3>
    <form action="saveresume2" method="post" enctype="multipart/form-data" class="vitae-from">
        <input type="hidden" name="rid" value='<?php echo $row[0]->rid;?>'>
        <input type="hidden" name="title" value='<?php echo $row[0]->title;?>'>
        <h4>基本信息</h4>
        <div class="vitae-line"></div>

        <div class="vitae-box vitae-box02">
            <!-- 基本信息 begin -->
            <div class="jbxx-left">

                <ul class="row3">
                    <li class="col-1">
                        <label for="username">姓名</label>
                        <input type="text" name="username" id="username" value='<?php  echo  $row[0]->username;?>'>
                    </li>

                    <li class="col-2">
                        <label for="yplb">应聘类别</label>
                        <div class="divselect" id="divselect04">
                            <cite><?php  echo  $row[0]->yplb;?></cite>
                            <ul>
                                <li><a selectid="应聘类别1">应聘类别1</a></li>
                                <li><a selectid="应聘类别2">应聘类别2</a></li>
                                <li><a selectid="应聘类别3">应聘类别3</a></li>
                                <li><a selectid="应聘类别4">应聘类别4</a></li>
                                <li><a selectid="应聘类别5">应聘类别5</a></li>
                            </ul>
                        </div>
                        <input name="yplb" type="hidden" value="" id="inputselect04">
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row3">
                    <li class="col-1">
                        <label for="xb">性别</label>
                        <input type="text" name="xb" id="xb"  value='<?php  echo  $row[0]->xb;?>'>
                    </li>

                    <li class="col-2">
                        <label for="brithdate">出生日期</label>
                        <input type="text" name="brithdate" id="brithdate"  value='<?php  echo  $row[0]->birthdate;?>'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row3">
                    <li class="col-1">
                        <label for="zzlx">证件类型</label>
                        <input type="text" name="zzlx" id="zzlx" value='<?php  echo  $row[0]->zzlx;?>'>
                    </li>

                    <li class="col-2">
                        <label for="zzno">证件号码</label>
                        <input type="text" name="zzno" id="zzno" value='<?php  echo  $row[0]->zzno;?>'>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div><!-- 左侧end  右侧begin -->

            <div class="jbxx-right">
                <div class="myphoto"><img src="<?php  echo  $row[0]->touxiang;?>" alt="" title=""/></div>
                <input type="file" name="touxiang" value="">
                <button type="submit" class="up-btn">点击修改</button>
            </div><!-- 右侧end -->
            <div class="vitae-line"></div>


            <ul class="row3">
                <li class="col-1">
                    <label for="gj">国籍</label>
                    <input type="text" name="gj" id="gj" value='<?php  echo  $row[0]->gj;?>'>
                </li>
                <li class="col-2">
                    <label for="mz">民族</label>
                    <input type="text" name="mz" id="mz" value='<?php  echo  $row[0]->mz;?>'>
                </li>
                <li class="col-3">
                    <label for="zzmm">政治面貌</label>
                    <input type="text" name="zzmm" id="zzmm" value='<?php  echo  $row[0]->zzmm;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row3">
                <li class="col-1">
                    <label for="sg">身高</label>
                    <input type="text" name="sg" id="sg" value='<?php  echo  $row[0]->sg;?>'>
                </li>

                <li class="col-2">
                    <label for="tz">体重</label>
                    <input type="text" name="tz" id="tz" value='<?php  echo  $row[0]->tz;?>'>
                </li>

                <li class="col-3">
                    <label for="hyzk">婚姻状况</label>
                    <input type="text" name="hyzk" id="hyzk" value='<?php  echo  $row[0]->hyzk;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row3">
                <li class="col-1">
                    <label for="dqhj">当前户籍</label>
                    <input type="text" name="dqhj" id="dqhj" value='<?php  echo  $row[0]->dqhj;?>'>
                </li>

                <li class="col-2">
                    <label for="hjlx">户籍类型</label>
                    <input type="text" name="hjlx" id="hjlx" value='<?php echo $row[0]->hjlx;?>'>
                </li>

                <li class="col-3">
                    <label for="jtzz">家庭住址</label>
                    <input type="text" name="jtzz" id="jtzz" value='<?php echo $row[0]->jtzz;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="bysj">毕业时间</label>
                    <input type="text" name="bysj" id="bysj" value='<?php echo $row[0]->bysj;?>'>
                </li>

                <li class="col-2">
                    <label for="syd">生源地</label>
                    <input type="text" name="syd" id="syd" value='<?php echo $row[0]->syd;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="dzxx">电子信箱</label>
                    <input type="text" name="dzxx" id="dzxx" value='<?php echo $row[0]->dzxx;?>'>
                </li>

                <li class="col-2">
                    <label for="sjhm">手机号码</label>
                    <input type="text" name="sjhm" id="sjhm" value='<?php echo $row[0]->sjhm;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="jjlxr">紧急联系人</label>
                    <input type="text" name="jjlxr" id="jjlxr" value='<?php echo $row[0]->jjlxr;?>'>
                </li>

                <li class="col-2">
                    <label for="jjlxrsj">紧急联系人手机</label>
                    <input type="text" name="jjlxrsj" id="jjlxrsj" value='<?php echo $row[0]->jjlxrsj;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>
            <!-- 基本信息end   教育经历begin -->

            <h4 id="jyjl" name="jyjl">教育经历</h4>
            <div class="vitae-line"></div>
        <?php
        foreach ($xuexirow as $key=>$v)
        {
            echo ' <div class="row-edu rowEdu">
                <ul class="row4">
                    <li class="col-1">
                        <label for="kssj">起止时间</label>
                        <input type="text" name="kssj" id="kssj" value='.$xuexirow[$key]->kssj.'>
                    </li>

                    <li class="col-2">
                        <label for="tzsj">至</label>
                        <input type="text" name="tzsj" id="tzsj" value='.$xuexirow[$key]->tzsj.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="jjlxr">学校</label>
                        <input type="text" name="xuexiao" id="jjlxr" value='.$xuexirow[$key]->xuexiao.'>
                    </li>

                    <li class="col-2">
                        <label for="jjlxrsj">专业</label>
                        <input type="text" name="zhuanye" id="jjlxrsj" value='.$xuexirow[$key]->zhuanye.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xl">学历</label>
                        <input type="text" name="xl" id="xl" value='.$xuexirow[$key]->xl.'>
                    </li>

                    <li class="col-2">
                        <label for="xllx">学历类型</label>
                        <input type="text" name="xllx" id="xllx" value='.$xuexirow[$key]->xllx.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xy">学院</label>
                        <input type="text" name="xy" id="xy" value='.$xuexirow[$key]->xy.'>
                    </li>

                    <li class="col-2">
                        <label for="zy">主修专业类别</label>
                        <input type="text" name="zy" id="zy" value='.$xuexirow[$key]->zy.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xw">学位</label>
                        <input type="text" name="xw" id="xw" value='.$xuexirow[$key]->xw.'>
                    </li>

                    <li class="col-2">
                        <label for="pm">年级排名</label>
                        <input type="text" name="pm" id="pm" value='.$xuexirow[$key]->pm.'>
                    </li>
                    <div class="clear"></div>
<!--                    <div class="view"><p>年级排名:</p><p>可适度美化</p></div><!--右侧点评 -->
                </ul>
                <div class="vitae-line"></div>

                <div class="row5">
                    <label for="zxkc">主修课程及成绩</label>
                    <textarea name="zxkc" id="zxkc" value='.$xuexirow[$key]->zxkc.'></textarea>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>
            </div>';
        }
        ?>

        <!-- 教育经历end   工作实习经历begin -->

            <h4 id="gzsxjl" name="gzsxjl">工作实习经历</h4>
            <div class="vitae-line"></div>
            <?php
            foreach ($gongzuorow as $key=>$v)
            {
                echo '  <div class="row-edu rowWork">
                <ul class="row4">
                    <li class="col-1">
                        <label for="kssj">起止时间</label>
                        <input type="text" name="gzkssj" id="kssj" value='.$gongzuorow[$key]->gzkssj.'>
                    </li>

                    <li class="col-2">
                        <label for="tzsj">至</label>
                        <input type="text" name="gztzsj" id="tzsj" value='.$gongzuorow[$key]->gztzsj.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <div class="row1">
                    <label for="dw">工作/实习单位</label>
                    <input type="text" name="gzdw" id="gzdw" value='.$gongzuorow[$key]->gzdw.'>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>

                <ul class="row2">
                    <li class="col-1">
                        <label for="xl">工作性质</label>
                        <div class="divselect" id="divselect05">
                            <cite>'.$gongzuorow[$key]->gzxz.'</cite>
                            <ul>
                                <li><a selectid="工作性质1">工作性质1</a></li>
                                <li><a selectid="工作性质2">工作性质2</a></li>
                                <li><a selectid="工作性质3">工作性质3</a></li>
                                <li><a selectid="工作性质4">工作性质4</a></li>
                                <li><a selectid="工作性质5">工作性质5</a></li>
                            </ul>
                        </div>
                        <input name="gzxz" type="hidden" value="" id="inputselect05">
                    </li>

                    <li class="col-2">
                        <label for="drzw">担任职务</label>
                        <input type="text" name="gzdrzw" id="drzw" value='.$gongzuorow[$key]->gzdrzw.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>

                <div class="row1">
                    <label for="lzyy">离职原因</label>
                    <input type="text" name="gzlzyy" id="gzlzyy" value='.$gongzuorow[$key]->gzlzyy.'>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>

                <div class="row5 row5a">
                    <label for="gzzz">主要工作职责</label>
                    <textarea name="gzzz" id="gzzz" value='.$gongzuorow[$key]->gzzz.'></textarea>
                    <div class="clear"></div>
                </div>
                <div class="vitae-line"></div>

                <ul class="row3">
                    <li class="col-1">
                        <label for="zmr">证明人</label>
                        <input type="text" name="zmr" id="zmr" value='.$gongzuorow[$key]->zmr.'>
                    </li>

                    <li class="col-2">
                        <label for="dwzw">单位及职务</label>
                        <input type="text" name="gzdwzw" id="gzdwzw" value='.$gongzuorow[$key]->gzdwzw.'>
                    </li>

                    <li class="col-3">
                        <label for="lxdh">联系电话</label>
                        <input type="text" name="gzlxdh" id="lxdh" value='.$gongzuorow[$key]->gzlxdh.'>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="vitae-line"></div>
            </div>';
            }
            ?>

            <div class="vitae-line"></div>
            <!-- 工作实习经历end  IT技能begin -->

            <h4 id="itnl" name="itnl">IT技能</h4>
            <div class="vitae-line"></div>
            <ul class="row2">
                <li class="col-1">
                    <label for="it">IT技能</label>
                    <input type="text" name="it" id="it" value='<?php echo $row[0]->it;?>'>
                </li>

                <li class="col-2">
                    <label for="jnlb">技能类别</label>
                    <input type="text" name="jnlb" id="jnlb" value='<?php echo $row[0]->jnlb;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="sysj">使用时间</label>
                    <input type="text" name="sysj" id="sysj" value='<?php echo $row[0]->sysj;?>'>
                </li>

                <li class="col-2">
                    <label for="slcd">熟练程度</label>
                    <div class="divselect" id="divselect06">
                        <cite><?php  echo  $row[0]->slcd;?></cite>
                        <ul>
                            <li><a selectid="熟练程度1">熟练程度1</a></li>
                            <li><a selectid="熟练程度2">熟练程度2</a></li>
                            <li><a selectid="熟练程度3">熟练程度3</a></li>
                            <li><a selectid="熟练程度4">熟练程度4</a></li>
                            <li><a selectid="熟练程度5">熟练程度5</a></li>
                        </ul>
                    </div>
                    <input name="slcd" type="hidden" value="" id="inputselect06">
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>
            <!-- IT技能end  语言能力begin -->

            <h4 id="yynl" name="yynl">语言能力</h4>
            <div class="vitae-line"></div>

            <ul class="row2 row2a">
                <li class="col-1">
                    <label for="yydjks">英语等级考试</label>
                    <input type="text" name="yydjks" id="yydjks" value='<?php echo $row[0]->yydjks;?>'>
                </li>

                <li class="col-2">
                    <label for="kscj">英语等级考试成绩</label>
                    <input type="text" name="kscj" id="kscj" value='<?php echo $row[0]->kscj;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2 row2a">
                <li class="col-1">
                    <label for="kysp">英语口语水平</label>
                    <input type="text" name="kysp" id="kysp" value='<?php echo $row[0]->kysp;?>'>
                </li>

                <li class="col-2">
                    <label for="qtwy">其他外语掌握情况及水平</label>
                    <input type="text" name="qtwy" id="qtwy" value='<?php echo $row[0]->qtwy;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="fyqk">方言掌握情况</label>
                <input type="text" name="fyqk" id="fyqk" value='<?php echo $row[0]->fyqk;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>
            <!-- 语言能力end  其他情况begin -->

            <h4 id="qtqk" name="qtqk">其他情况</h4>
            <div class="vitae-line"></div>

            <div class="row1 row1a">
                <label for="zgzs">所获专业技术资格证书</label>
                <input type="text" name="zgzs" id="zgzs" value='<?php echo $row[0]->zgzs;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="shhd">社会活动</label>
                <input type="text" name="shhd" id="shhd" value='<?php echo $row[0]->shhd;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="xmjy">项目经验</label>
                <textarea name="xmjy" id="xmjy" value='<?php echo $row[0]->xmjy;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="yjcg">研究成果</label>
                <input type="text" name="yjcg" id="yjcg" value='<?php echo $row[0]->yjcg;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row1">
                <label for="jcqk">奖惩情况</label>
                <input type="text" name="jcqk" id="jcqk" value='<?php echo $row[0]->jcqk;?>'>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>
            <!-- 其他情况end  家庭背景begin -->

            <h4 id="jtbj" name="jtbj">家庭背景</h4>
            <div class="vitae-line"></div>

            <div class="row1 row1a">
                <label for="zgyh">是否有亲属受雇于中国银行</label>
                <input type="text" name="zgyh" id="zgyh" value='<?php echo $row[0]->zgyh;?>' >
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="fname">父亲姓名</label>
                    <input type="text" name="fname" id="fname" value='<?php echo $row[0]->fname;?>'>
                </li>

                <li class="col-2">
                    <label for="fjnlb">技能类别</label>
                    <input type="text" name="fjnlb" id="fjnlb" value='<?php echo $row[0]->fjnlb;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="fdw">工作单位</label>
                    <input type="text" name="fdw" id="fdw" value='<?php echo $row[0]->fdw;?>'>
                </li>
                <li class="col-2">
                    <label for="fzyzw">职业职务</label>
                    <input type="text" name="fzyzw" id="fzyzw" value='<?php echo $row[0]->fzyzw;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="mname">母亲姓名</label>
                    <input type="text" name="mname" id="mname" value='<?php echo $row[0]->mnane;?>'>
                </li>

                <li class="col-2">
                    <label for="mjnlb">技能类别</label>
                    <input type="text" name="mjnlb" id="mjnlb" value='<?php echo $row[0]->mjnlb;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="mdw">工作单位</label>
                    <input type="text" name="mdw" id="mdw" value='<?php echo $row[0]->mdw;?>'>
                </li>

                <li class="col-2">
                    <label for="mzyzw">职业职务</label>
                    <input type="text" name="mzyzw" id="mzyzw" value='<?php echo $row[0]->mzyzw;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="qtcy">其他家庭成员及主要社会关系</label>
                <textarea name="qtcy" id="qtcy" value='<?php echo $row[0]->qtcy;?>' ></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>
            <!-- 家庭背景end  报名信息begin -->

            <h4 id="bmxx" name="bmxx">报名信息</h4>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="grpj">个人评价</label>
                <textarea name="grpj" id="grpj" value='<?php echo $row[0]->grpj;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="tcah">特长爱好</label>
                <textarea name="tcah" id="tcah" value='<?php echo $row[0]->tcah;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row5">
                <label for="zygh">如未来应聘成功，你对未来的职业规划是什么？（400字以内）</label>
                <textarea name="zygh" id="zygh" value='<?php echo $row[0]->zygh;?>'></textarea>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <ul class="row2">
                <li class="col-1">
                    <label for="bsdd">笔试地点</label>
                    <input type="text" name="bsdd" id="bsdd" value='<?php echo $row[0]->bsdd;?>'>
                </li>

                <li class="col-2">
                    <label for="qwyx">期望月薪</label>
                    <input type="text" name="qwyx" id="qwyx" value='<?php echo $row[0]->qwyx;?>'>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="vitae-line"></div>
            <!-- 报名信息end  上传照片begin -->

            <h4 id="sczp" name="sczp">上传照片</h4>
            <div class="vitae-line"></div>

            <div class="row6">
                <label for="zygh">标准证件照</label>
                <div class="morephoto">
                    <img src="<?php  echo  $row[0]->zhengjianzhao;?>" alt="" title=""/>
                    <input type="file" name="zhengjianzhao" value="">
                </div>
                <p>最大50kb，只能是jpeg、jpg、bmp、或gif格式</p>
                <div class="clear"></div>
            </div>
            <div class="vitae-line"></div>

            <div class="row6">
                <label for="zygh">五寸个人近期生活照</label>
                <div class="morephoto"><img src="<?php  echo  $row[0]->gerenzhao;?>" alt="" title=""/>  <input type="file" name="gerenzhao" value=""></div>
                <p>最大50kb，只能是jpeg、jpg、bmp、或gif格式</p>
                <div class="clear"></div>
            </div>
            <div class="row-btna">
                <button type="submit" class="vitae-btn">确认修改</button>
            </div>
        </div><!-- vitae-box01 end -->
    </form>
</div><!-- user-vitae end -->
<div class="clear"></div>





@include('footer')

