<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;

class FirstController extends Controller
{
    public function first()
    {
        $mobile = Cookie::get('jrmobile');

        $sql = "select times from jr_user where mobile =$mobile";
        $timerow = DB::select($sql);
        $times = $timerow[0]->times;
        return view('first', compact('mobile', 'times'));
    }
    //会员中心页面
    public function member(Request $request)
    {
        $act= $request->input('act');

        if(!empty($act) && $act == 'tijiao')
        {
            $rid = $request->input('rid');
            if(!empty($rid))
            {
                date_default_timezone_set('PRC');
                $date = date('Y-m-d H:i:s');
                $tijiaosql = "update jr_re set state = 2,tijiaotime = '$date' where rid = $rid";
                $num = DB::update($tijiaosql);
            }else{
                echo '<script>alert("提交失败");</script>';
            }

        }

        $mobile = Cookie::get('jrmobile');
        //查询已提交简历
        $sql = "select rid,currenttime,title from jr_re where mobile = $mobile and state = 2 order by rid desc limit 30";
        $row = DB::select($sql);
        //查询已修改简历
        $sql2 = "select rid,currenttime,title from jr_re where mobile = $mobile and state = 3 order by rid desc limit 30";
        $row2 = DB::select($sql2);
        return view('member', compact('row', 'mobile', 'row2'));
    }

    //简历详情页面
    public function detail(Request $request)
    {
        $rid = $request->input('rid');
        $mobile = Cookie::get('jrmobile');

        $sql = "select * from jr_re where mobile = $mobile and rid =$rid";
        $row = DB::select($sql);

//搜索学习经历
        $xuexisql = "select * from jr_xuexi where rid=$rid";

        $xuexirow = DB::select($xuexisql);

//搜索工作经历
        $gongzuosql = "select * from jr_gongzuo where rid=$rid";

        $gongzuorow = DB::select($gongzuosql);
        return view('detail', compact('row', 'xuexirow', 'gongzuorow'));
    }
    //创建简历选模板页面
    public function createresume()
    {
        $mobile = Cookie::get('jrmobile');
        $timerow = DB::select('select times from jr_user where mobile = ' . $mobile . '');
        $times = $timerow[0]->times;
        return view('createresume', compact('mobile', 'times'));
    }
   //简历表单页面
    public function resume(Request $request)
    {
        //这块你可以封装
        $mobile = Cookie::get('jrmobile');
        $muban = $request->input('muban');
        $name = $request->input('name');
        return view('resume', compact('muban', 'name', 'mobile'));
    }
    //保存简历
    public function saveresume(Request $request)
    {
        $mobile = Cookie::get('jrmobile');

//学习经历
        $kssj = $request->input('kssj');
        $tzsj = $request->input('tzsj');
        $xuexiao = $request->input('xuexiao');
        $zhuanye = $request->input('zhuanye');
        $xl = $request->input('xl');
        $xllx = $request->input('xllx');
        $xy = $request->input('xy');
        $zy = $request->input('zy');
        $xw = $request->input('xw');
        $pm = $request->input('pm');
        $zxkc = $request->input('zxkc');

//工作经历
        $gzkssj = $request->input('gzkssj');
        $gztzsj = $request->input('gztzsj');
        $gzdw = $request->input('gzdw');
        $gzxz = $request->input('gzxz');
        $gzdrzw = $request->input('gzdrzw');
        $gzlzyy = $request->input('gzlzyy');
        $gzzz = $request->input('gzzz');
        $zmr = $request->input('zmr');
        $gzdwzw = $request->input('gzdwzw');
        $gzlxdh = $request->input('gzlxdh');


        $mobile = Input::get('mobile');
        $title = Input::get('title');

        $username = Input::get('username');
        $yplb = Input::get('yplb');
        $xb = Input::get('xb');
        $birthdate = Input::get('brithdate');
        $zzlx = Input::get('zzlx');
        $zzno = Input::get('zzno');
        $gj = Input::get('gj');
        $mz = Input::get('mz');
        $zzmm = Input::get('zzmm');
        $sg = Input::get('sg');
        $tz = Input::get('tz');
        $dqhj = Input::get('dqhj');
        $hyzk = Input::get('hyzk');
        $hjlx = Input::get('hjlx');
        $jtzz = Input::get('jtzz');
        $bysj = Input::get('bysj');
        $syd = Input::get('syd');
        $dzxx = Input::get('dzxx');
        $sjhm = Input::get('sjhm');
        $jjlxr = Input::get('jjlxr');
        $jjlxrsj = Input::get('jjlxrsj');

        $it = Input::get('it');
        $jnlb = Input::get('jnlb');
        $sysj = Input::get('sysj');
        $slcd = Input::get('slcd');
        $yydjks = Input::get('yydjks');
        $kscj = Input::get('kscj');
        $kysp = Input::get('kysp');
        $qtwy = Input::get('qtwy');
        $fyqk = Input::get('fyqk');
        $zgzs = Input::get('zgzs');
        $shhd = Input::get('shhd');
        $xmjy = Input::get('xmjy');
        $yjcg = Input::get('yjcg');
        $jcqk = Input::get('jcqk');
        $zgyh = Input::get('zgyh');
        $fname = Input::get('fname');
        $fjnlb = Input::get('fjnlb');
        $fdw = Input::get('fdw');
        $fzyzw = Input::get('fzyzw');
        $mname = Input::get('mname');
        $mjnlb = Input::get('mjnlb');
        $mdw = Input::get('mdw');
        $mzyzw = Input::get('mzyzw');
        $qtcy = Input::get('qtcy');
        $grpj = Input::get('grpj');
        $tcah = Input::get('tcah');
        $zygh = Input::get('zygh');
        $bsdd = Input::get('bsdd');
        $qwyx = Input::get('qwyx');
//error_reporting(0);
        if ((($_FILES["touxiang"]["type"] == "image/jpg") || ($_FILES["touxiang"]["type"] == "image/gif") || ($_FILES["touxiang"]["type"] == "image/jpeg") || ($_FILES["touxiang"]["type"] == "image/bmp") || ($_FILES["zhengjianzhao"]["type"] == "image/jpg") || ($_FILES["zhengjianzhao"]["type"] == "image/gif") || ($_FILES["zhengjianzhao"]["type"] == "image/jpeg") || ($_FILES["zhengjianzhao"]["type"] == "image/bmp") || ($_FILES["gerenzhao"]["type"] == "image/jpg") || ($_FILES["gerenzhao"]["type"] == "image/gif") || ($_FILES["gerenzhao"]["type"] == "image/jpeg") || ($_FILES["gerenzhao"]["type"] == "image/bmp")) && ($_FILES["zhengjianzhao"]["size"] < 70000) && ($_FILES["gerenzhao"]["size"] < 70000) && ($_FILES["touxiang"]["size"] < 70000)) {
            if ($_FILES["touxiang"]["error"] > 0) {
                echo "Return Code: " . $_FILES["touxiang"]["error"] . "<br />";
            } else {
                $dir = 'uploadsc';
                if (!is_dir($dir)) {
                    mkdir($dir);
                } else {
                }
                $touxiang = "uploadsc/" . date('Ymd_His_') . rand(10000, 99999) . $_FILES["touxiang"]["name"];
                $zhengjianzhao = "uploadsc/" . date('Ymd_His_') . rand(10000, 99999) . $_FILES["zhengjianzhao"]["name"];
                $gerenzhao = "uploadsc/" . date('Ymd_His_') . rand(10000, 99999) . $_FILES["gerenzhao"]["name"];

                @move_uploaded_file($_FILES["touxiang"]["tmp_name"], $touxiang);
                @move_uploaded_file($_FILES["zhengjianzhao"]["tmp_name"], $zhengjianzhao);
                @move_uploaded_file($_FILES["gerenzhao"]["tmp_name"], $gerenzhao);
//
                $sql = "insert into jr_re (rid,mobile,title,username,yplb,xb,birthdate,zzlx,zzno,touxiang,gj,mz,zzmm,sg,tz,hyzk,dqhj,hjlx,jtzz,bysj,syd,dzxx,sjhm,jjlxr,jjlxrsj,it,jnlb,sysj,slcd,yydjks,kscj,kysp,qtwy,fyqk,zgzs,shhd,xmjy,yjcg,jcqk,zgyh,fname,fjnlb,fdw,fzyzw,mnane,mjnlb,mdw,mzyzw,qtcy,grpj,tcah,zygh,bsdd,qwyx,zhengjianzhao,gerenzhao,currenttime,state) VALUES ('','$mobile','$title','$username','$yplb','$xb','$birthdate','$zzlx','$zzno','$touxiang','$gj','$mz','$zzmm','$sg','$tz','$hyzk','$dqhj','$hjlx','$jtzz','$bysj','$syd','$dzxx','$sjhm','$jjlxr','$jjlxrsj','$it','$jnlb','$sysj','$slcd','$yydjks','$kscj','$kysp','$qtwy','$fyqk','$zgzs','$shhd','$xmjy','$yjcg','$jcqk','$zgyh','$fname','$fjnlb','$fdw','$fzyzw','$mname','$mjnlb','$mdw','$mzyzw','$qtcy','$grpj','$tcah','$zygh','$bsdd','$qwyx','$zhengjianzhao','$gerenzhao',CURRENT_TIMESTAMP,1)";


                DB::insert($sql);
                $sql2 = "select rid from jr_re where mobile= $mobile order by rid desc limit 1";
                $rencentrid = DB::select($sql2);
                $rid = $rencentrid[0]->rid;

               // 插入学习经历和生活经历


                foreach($kssj  as $key =>$val) {
                    $sql3 = "insert into jr_xuexi values('','" . $mobile . "','" . $rid . "','" . $kssj[$key] . "','" . $tzsj[$key] . "','" . $xuexiao[$key] . "','" . $zhuanye[$key] . "','" . $xl[$key] . "','" . $xllx[$key] . "','" . $xy[$key] . "','" . $zy[$key] . "','" . $xy[$key] . "','" . $pm[$key] . "','" . $zxkc[$key] . "')";
                     DB::insert($sql3);
                }


                foreach($gzkssj  as $key =>$val) {
                    $sql4 = "insert into jr_gongzuo values('','" . $mobile . "','" . $rid . "','" . $gzkssj[$key] . "','" . $gztzsj[$key] . "','" . $gzdw[$key] . "','" . $gzxz[$key] . "','" . $gzdrzw[$key] . "','" . $gzlzyy[$key] . "','" . $gzzz[$key] . "','" . $zmr[$key] . "','" . $gzdwzw[$key] . "','" . $gzlxdh[$key] . "')";
                    DB::insert($sql4);
                }

                echo '提交成功';

                echo '<script type="text/javascript">
location.href="wancheng";</script>';
            }
        } else {
            echo "<script charset=\"gb2312\"  type=\"text/javascript\" >alert('请确保图片格式为jpg,png,bmp,gif,图片大小小于56kb,头像，证件照和个人照,生活照都上传！');
window.history.go(-1);
</script>";
            die;
        }


    }
    //简历中心页面，学员简历保存跳转到这个页面
    public function wancheng()
    {
        $mobile = Cookie::get('jrmobile');
        //查询次数
        $timerow = DB::select('select times from jr_user where mobile = ' . $mobile . '');
        $times = $timerow[0]->times;
        //查询简历
        $sql = "select rid,currenttime,title from jr_re where mobile = $mobile and state = 1 order by rid desc limit 30";
        $row = DB::select($sql);

        return view('wancheng', compact('row', 'mobile','times'));
    }
    public function edit(Request $request)
    {
        $rid = $request->input('rid');

        $mobile = Cookie::get('jrmobile');

        $sql = "select * from jr_re where mobile = $mobile and rid =$rid";
        $row = DB::select($sql);

//搜索学习经历
        $xuexisql = "select * from jr_xuexi where rid=$rid";

        $xuexirow = DB::select($xuexisql);

//搜索工作经历
        $gongzuosql = "select * from jr_gongzuo where rid=$rid";

        $gongzuorow = DB::select($gongzuosql);
        return view('edit', compact('row', 'xuexirow', 'gongzuorow'));

    }
    public function saveresume2(Request $request)
    {

        $rid = $request->input('rid');

        //将用户原来的简历状态改为-2不显示，为用户重新创建简历
        $sql2 = "update jr_re set state = -2 where rid =$rid";

        $num = DB::update($sql2);
        if($num == 1)
        {
            $mobile = Cookie::get('jrmobile');

//学习经历
            $kssj = $request->input('kssj');
            $tzsj = $request->input('tzsj');
            $xuexiao = $request->input('xuexiao');
            $zhuanye = $request->input('zhuanye');
            $xl = $request->input('xl');
            $xllx = $request->input('xllx');
            $xy = $request->input('xy');
            $zy = $request->input('zy');
            $xw = $request->input('xw');
            $pm = $request->input('pm');
            $zxkc = $request->input('zxkc');

//工作经历
            $gzkssj = $request->input('gzkssj');
            $gztzsj = $request->input('gztzsj');
            $gzdw = $request->input('gzdw');
            $gzxz = $request->input('gzxz');
            $gzdrzw = $request->input('gzdrzw');
            $gzlzyy = $request->input('gzlzyy');
            $gzzz = $request->input('gzzz');
            $zmr = $request->input('zmr');
            $gzdwzw = $request->input('gzdwzw');
            $gzlxdh = $request->input('gzlxdh');


            $mobile = Input::get('mobile');
            $title = Input::get('title');

            $username = Input::get('username');
            $yplb = Input::get('yplb');
            $xb = Input::get('xb');
            $birthdate = Input::get('brithdate');
            $zzlx = Input::get('zzlx');
            $zzno = Input::get('zzno');
            $gj = Input::get('gj');
            $mz = Input::get('mz');
            $zzmm = Input::get('zzmm');
            $sg = Input::get('sg');
            $tz = Input::get('tz');
            $dqhj = Input::get('dqhj');
            $hyzk = Input::get('hyzk');
            $hjlx = Input::get('hjlx');
            $jtzz = Input::get('jtzz');
            $bysj = Input::get('bysj');
            $syd = Input::get('syd');
            $dzxx = Input::get('dzxx');
            $sjhm = Input::get('sjhm');
            $jjlxr = Input::get('jjlxr');
            $jjlxrsj = Input::get('jjlxrsj');

            $it = Input::get('it');
            $jnlb = Input::get('jnlb');
            $sysj = Input::get('sysj');
            $slcd = Input::get('slcd');
            $yydjks = Input::get('yydjks');
            $kscj = Input::get('kscj');
            $kysp = Input::get('kysp');
            $qtwy = Input::get('qtwy');
            $fyqk = Input::get('fyqk');
            $zgzs = Input::get('zgzs');
            $shhd = Input::get('shhd');
            $xmjy = Input::get('xmjy');
            $yjcg = Input::get('yjcg');
            $jcqk = Input::get('jcqk');
            $zgyh = Input::get('zgyh');
            $fname = Input::get('fname');
            $fjnlb = Input::get('fjnlb');
            $fdw = Input::get('fdw');
            $fzyzw = Input::get('fzyzw');
            $mname = Input::get('mname');
            $mjnlb = Input::get('mjnlb');
            $mdw = Input::get('mdw');
            $mzyzw = Input::get('mzyzw');
            $qtcy = Input::get('qtcy');
            $grpj = Input::get('grpj');
            $tcah = Input::get('tcah');
            $zygh = Input::get('zygh');
            $bsdd = Input::get('bsdd');
            $qwyx = Input::get('qwyx');
//error_reporting(0);
            if ((($_FILES["touxiang"]["type"] == "image/jpg") || ($_FILES["touxiang"]["type"] == "image/gif") || ($_FILES["touxiang"]["type"] == "image/jpeg") || ($_FILES["touxiang"]["type"] == "image/bmp") || ($_FILES["zhengjianzhao"]["type"] == "image/jpg") || ($_FILES["zhengjianzhao"]["type"] == "image/gif") || ($_FILES["zhengjianzhao"]["type"] == "image/jpeg") || ($_FILES["zhengjianzhao"]["type"] == "image/bmp") || ($_FILES["gerenzhao"]["type"] == "image/jpg") || ($_FILES["gerenzhao"]["type"] == "image/gif") || ($_FILES["gerenzhao"]["type"] == "image/jpeg") || ($_FILES["gerenzhao"]["type"] == "image/bmp")) && ($_FILES["zhengjianzhao"]["size"] < 70000) && ($_FILES["gerenzhao"]["size"] < 70000) && ($_FILES["touxiang"]["size"] < 70000)) {
                if ($_FILES["touxiang"]["error"] > 0) {
                    echo "Return Code: " . $_FILES["touxiang"]["error"] . "<br />";
                } else {
                    $dir = 'uploadsc';
                    if (!is_dir($dir)) {
                        mkdir($dir);
                    } else {
                    }
                    $touxiang = "uploadsc/" . date('Ymd_His_') . rand(10000, 99999) . $_FILES["touxiang"]["name"];
                    $zhengjianzhao = "uploadsc/" . date('Ymd_His_') . rand(10000, 99999) . $_FILES["zhengjianzhao"]["name"];
                    $gerenzhao = "uploadsc/" . date('Ymd_His_') . rand(10000, 99999) . $_FILES["gerenzhao"]["name"];

                    @move_uploaded_file($_FILES["touxiang"]["tmp_name"], $touxiang);
                    @move_uploaded_file($_FILES["zhengjianzhao"]["tmp_name"], $zhengjianzhao);
                    @move_uploaded_file($_FILES["gerenzhao"]["tmp_name"], $gerenzhao);
//
                    $sql = "insert into jr_re (rid,mobile,title,username,yplb,xb,birthdate,zzlx,zzno,touxiang,gj,mz,zzmm,sg,tz,hyzk,dqhj,hjlx,jtzz,bysj,syd,dzxx,sjhm,jjlxr,jjlxrsj,it,jnlb,sysj,slcd,yydjks,kscj,kysp,qtwy,fyqk,zgzs,shhd,xmjy,yjcg,jcqk,zgyh,fname,fjnlb,fdw,fzyzw,mnane,mjnlb,mdw,mzyzw,qtcy,grpj,tcah,zygh,bsdd,qwyx,zhengjianzhao,gerenzhao,currenttime,state) VALUES ('','$mobile','$title','$username','$yplb','$xb','$birthdate','$zzlx','$zzno','$touxiang','$gj','$mz','$zzmm','$sg','$tz','$hyzk','$dqhj','$hjlx','$jtzz','$bysj','$syd','$dzxx','$sjhm','$jjlxr','$jjlxrsj','$it','$jnlb','$sysj','$slcd','$yydjks','$kscj','$kysp','$qtwy','$fyqk','$zgzs','$shhd','$xmjy','$yjcg','$jcqk','$zgyh','$fname','$fjnlb','$fdw','$fzyzw','$mname','$mjnlb','$mdw','$mzyzw','$qtcy','$grpj','$tcah','$zygh','$bsdd','$qwyx','$zhengjianzhao','$gerenzhao',CURRENT_TIMESTAMP,1)";


                    DB::insert($sql);
                    $sql2 = "select rid from jr_re where mobile= $mobile order by rid desc limit 1";
                    $rencentrid = DB::select($sql2);
                    $rid = $rencentrid[0]->rid;

                    // 插入学习经历和生活经历


                    foreach($kssj  as $key =>$val) {
                        $sql3 = "insert into jr_xuexi values('','" . $mobile . "','" . $rid . "','" . $kssj[$key] . "','" . $tzsj[$key] . "','" . $xuexiao[$key] . "','" . $zhuanye[$key] . "','" . $xl[$key] . "','" . $xllx[$key] . "','" . $xy[$key] . "','" . $zy[$key] . "','" . $xy[$key] . "','" . $pm[$key] . "','" . $zxkc[$key] . "')";
                        DB::insert($sql3);
                    }


                    foreach($gzkssj  as $key =>$val) {
                        $sql4 = "insert into jr_gongzuo values('','" . $mobile . "','" . $rid . "','" . $gzkssj[$key] . "','" . $gztzsj[$key] . "','" . $gzdw[$key] . "','" . $gzxz[$key] . "','" . $gzdrzw[$key] . "','" . $gzlzyy[$key] . "','" . $gzzz[$key] . "','" . $zmr[$key] . "','" . $gzdwzw[$key] . "','" . $gzlxdh[$key] . "')";
                        DB::insert($sql4);
                    }

                    echo '提交成功';
                    echo '<script type="text/javascript">
location.href="wancheng";</script>';
                }
            } else {
                echo "<script charset=\"gb2312\"  type=\"text/javascript\" >alert('请确保图片格式为jpg,png,bmp,gif,图片大小小于56kb,头像，证件照和个人照,生活照都上传！');
window.history.go(-1);
</script>";
                die;
            }
        }else{
            echo '修改失败';
        }

    }
    //删除简历
    public function delete(Request $request)
    {
        $rid = $request->input('rid');
        //将简历状态修改为-1，即不显示
        $sql = "update jr_re set state = -1 where rid =$rid";
        $num = DB::update($sql);
        if($num==1)
        {
            echo 1;
        }else{
            echo 2;
        }
    }
    public function tijiao(){
        $mobile = Cookie::get('jrmobile');
        $sql = "select times from jr_user where mobile =$mobile";
        $row = DB::select($sql);
        if($row[0]->times == 0)
        {
            echo -1;//次数用完
        }else{
            $times = $row[0]->times;
            $deltimes = --$times;
            $deltimessql = "update  jr_user set times = $deltimes where mobile=$mobile";
            DB::update($deltimessql);
            echo 2;
        }
    }
    public function tedit(Request $request)
    {
        $rid = $request->input('rid');

        $mobile = Cookie::get('jrmobile');

        $sql = "select * from jr_re where mobile = $mobile and rid =$rid";
        $row = DB::select($sql);

//搜索学习经历
        $xuexisql = "select * from jr_xuexi where rid=$rid";

        $xuexirow = DB::select($xuexisql);

//搜索工作经历
        $gongzuosql = "select * from jr_gongzuo where rid=$rid";

        $gongzuorow = DB::select($gongzuosql);


        //查询修改意见
        $suggsql = "select * from jr_dp where rid = $rid";
        $suggrow = DB::select($suggsql);
        return view('tedit', compact('row', 'xuexirow', 'gongzuorow','suggrow'));
    }

    //老师查看学生简历页面
    public  function teacher(Request $request)
    {
        $p = $request->input('p');

        if(empty($p) or $p == 1) {
            $page = 1;

        }else{
           $page = $p;
        }

//获取总条数
        $page_size =15;
        $show_Page = 3;

        $total_sql = "select count(*)  as a  from jr_re";
        $totalrow = DB::select($total_sql);
        $total = $totalrow[0]->a;

//计算页数
        $total_pages = ceil($total / $page_size);

// 显示数据 +分页条
        $page_banner = "";
//计算偏移量
        $pageoffset = ($show_Page - 1) / 2;

        if ($page > 1) {
            $page_banner .= "<a class='btn-3' id='shouye' class='shouye' href='" . $_SERVER['PHP_SELF'] . "?p=1'>首页</a>";
            $page_banner .= "<a class='btn-3' href='" . $_SERVER['PHP_SELF'] . "?p=" . ($page - 1) . "'>上一页</a>";
        } else {
            $page_banner .= "<span style='margin-left: 300px;' class='btn-3'>首页</span>";
            $page_banner .= "<span class='btn-3'><上一页</span>";
        }
//初始化数据
        $start = 1;
        $end = $total_pages;
        if ($total_pages > $show_Page) {
            if ($page > $pageoffset + 1) {
                $page_banner .= "....";
            }
            if ($page > $pageoffset) {
                $start = $page - $pageoffset;
                $end = $total_pages > $page + $pageoffset ? $page + $pageoffset : $total_pages;
            } else {
                $start = 1;
                $end = $total_pages > $show_Page ? $show_Page : $total_pages;
            }
            if ($page + $pageoffset > $total_pages) {
                $start = $start - ($page + $pageoffset - $end);
            }
        }

// 3 显示数据d
        for ($i = $start; $i <= $end; $i++) {
            $page_banner .= "<a class='btn-2' href='teacher?p=" . $i . "'>{$i}</a>";
        }
//尾部省略
        if ($total_pages > $show_Page && $total_pages > $page + $pageoffset) {
            $page_banner .= "....";
        }
        if ($page < $total_pages) {
            $page_banner .= "<a class='btn-3' href='teacher?p=" . ($page + 1) . "'>下一页></a>";
            $page_banner .= "<a class='btn-3' href='teacher?p=" . $total_pages . "'>尾页></a>";
        } else {
            $page_banner .= "<span  id='wei' class='btn-3'>尾页</a></span>";
            $page_banner .= "<span class='btn-3'>下一页</a></span>";
        }
        $page_banner .= "共{$total_pages}页,";

//查询提交未修改的简历

      $sql2 = 'select tijiaotime,rid,title,mobile from jr_re where state = 2 order by tijiaotime asc limit  ' . (($page - 1) * $show_Page) . ' ,' . $show_Page . '';

        $row = DB::select($sql2);
        return view('teacher', compact('row', 'mobile','times','page_banner'));
    }
}
 
