<?php

namespace  App\Http\Controllers;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
class StudentController extends Controller
{
    public function test1()
    {
        $mobile = Session::get('jrmobile');
        $mobile = Cookie::get('jrmobile');
        var_dump($mobile);exit;
//        $results = DB::select('select * from user where id = ?', [1]);
//        var_dump($results);exit;
//        $zhicheng = '广东';
//        $zhicheng2 = $zhicheng.date("Y-m-d H-i-s");
//        var_dump($zhicheng2);
    }


}