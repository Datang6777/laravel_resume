<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;

class MemberController extends Controller
{

    public function index()
    {
        $mobile = Cookie::get('jrmobile');
        $sql = "select rid,currenttime,title from jr_re where mobile = $mobile and state = 2 order by rid desc limit 30";
        $row = DB::select($sql);
        return view('member', compact('row','mobile'));
    }

















//    public function info($id)
//    {
//       return  Member::getMember();
//      //  return view('member/info');
//          //return view('info');
//    }
//    public function query4(){
//        DB::table('student')->insert([
//            ['id'=>1001,'name'=>'name1'],
//            ['id'=>1001,'name'=>'name1'],
//            ['id'=>1001,'name'=>'name1'],
//            ['id'=>1001,'name'=>'name1'],
//        ]);
//
//    }
//    public function test1(){
//        $num = DB::table('student')
//            ->where('id',12)
//            ->update(['age'=>30]);
//    }
}