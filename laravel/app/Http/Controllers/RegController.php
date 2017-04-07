<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Auth\Access\Response;

class RegController extends Controller
{
    public function duanxin()
    {
        $mobile = Input::get('mobile');
        $password = Input::get('password');
        $repassword = Input::get('repassword');
        $capt = Input::get('capt');
        $result = preg_match('/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/', $mobile);
        if (!$result) {
            echo -1;
            exit;
        }
        $row = DB::select('select mobile from `jr_user` where mobile = ?', array($mobile));
        if (!empty($row[0]->mobile)) {
            echo -5;//该手机号已经注册过
            exit;
        }

        if ($password !== $repassword) {
            echo -2;
            exit;
        }
        $result2 = strlen($password);
        if ($result2 < 6 or $result2 > 16) {
            echo -3;
            exit;
        }

        if (empty($capt) || md5($capt) != Cookie::get('yzm_code')) {
            echo -4;//验证码不正确;
            exit;
        }
        $yzm = mt_rand(100000, 999999);
        //写入cookie
//    setcookie('jrmobile',$mobile,time()+3600*24*15,'/','huatu.com');
//    setcookie('jryzm',$yzm,time()+3600*24*15,'/','huatu.com');
        setcookie('jrmobile', $mobile, time() + 3600 * 24 * 15, '/');
        setcookie('jryzm', $yzm, time() + 3600 * 24 * 15, '/');
        Session::put('jrmobile', $mobile);
        Session::put('jryzm', $yzm);
//        $_SESSION['jrmobile'] = $mobile;
//        $_SESSION['jryzm'] = $yzm;
        $content = $yzm;
        //  file_get_contents("http://bm.huatu.com/zt/duanxin/ruiyuanhua.php?content=".$content."&mobile=".$mobile."");
        echo -6;
        exit;
    }

    public function regis()
    {
        $mobile = Input::get('mobile');
        $password = Input::get('password');
        $repassword = Input::get('repassword');
        $capt = Input::get('capt');
        $dx = Input::get('dx');
        $result = preg_match('/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/', $mobile);
        if (!$result) {
            echo -1;
            exit;
        }
        $row = DB::select('select mobile from `jr_user` where mobile = ?', array($mobile));
        if (!empty($row[0]->mobile)) {
            echo -5;//该手机号已经注册过
            exit;
        }
        if ($password !== $repassword) {
            echo -2;
            exit;
        }
        $result2 = strlen($password);
        if ($result2 < 6 or $result2 > 16) {
            echo -3;
            exit;
        }

        if (empty($capt) || md5($capt) != Cookie::get('yzm_code')) {
            echo -4;//验证码不正确;
            exit;
        }
        if (empty($dx) || $dx != Cookie::get('jryzm')) {
            echo -6;//短信验证码不正确
            exit;
        }
        $password = md5($password);
        $sql = "insert into jr_user (mobile,password,times) VALUES($mobile,'$password',0)";
        $rows2 = DB::insert($sql);
        if ($rows2 == 'boolean true') {
            echo -7;//注册成功
        } else {
            echo -8;//注册失败
        }


    }

    public function loginis()
    {
        $mobile = Input::get('mobile');
        $password = Input::get('password');
        $keeplogin = Input::get('keeplogin');

        $result = preg_match('/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8}|17[0-9]{9})$/', $mobile);
        if (!$result) {
            echo -1;
            exit;
        }
        $result2 = strlen($password);
        if ($result2 < 6 or $result2 > 16) {
            echo -3;
            exit;
        }
        $password1 = $password;
        $password = md5($password);
        $sql = 'select mobile,password from jr_user where mobile = "' . $mobile . '" limit 1';
        $row = DB::select($sql);

        if ($row[0]->password == $password) {
            //如果用户设置了自动登录保存用户名和密码

            setcookie('jrmobile', $mobile, time() + 3600 * 2, '/');
            Session::put('jrmobile', $mobile);

            echo 1;//成功登录
            exit;
        } else {
            echo -4;//登录失败
            exit;
        }
    }


}