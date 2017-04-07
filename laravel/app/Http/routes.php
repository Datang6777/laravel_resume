<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('basic1',function(){
    return 'Hello world';
});
Route::post('basic2',function(){
   return 'basic2';
});
//多请求路由
Route::match(['get','post'],'hello',function(){
    return 'hello';
});
Route::any('binbin',function(){
    return 'datang';
});
Route::get('user/{id}',function($id){
    return 'User-id-' .$id;
});
Route::get('user/{name?}',function($name= null){
    return 'User-name-'.$name;
});
//Route::get('member/info','MemberController@info');
Route::get('member/info2',['uses'=>'MemberController@info']);

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
Route::resource('badmin','BadminController');
Route::get('basic1',function(){
    return 'Hello wen';
});
Route::post('basic2',function(){
   return 'hello wenda';
});
Route::match(['get','post'],'fuhe',function(){
    return '多请求';
});
Route::any('fuhe2',function(){
   return 'fuhe2';
});
//路由参数
//Route::get('user/{id}',function($id){
//    return 'User-'.$id;
//});
Route::get('user/{name}',function($name = 'sean'){
    return 'User-name'.$name;
})->where('name','[A-Za-z]+');

//路由别名
Route::get('user/member-center',['as'=>'center',function(){
    return 'member-center';
}]);
//路由群组
Route::group(['prefix'=>'member'],function(){
    Route::get('user/center',['as'=>'center',function(){
        return 'center';
    }]);
    Route::any('fuhe2',function(){
        return 'fuhe2';
    });
});

//路由中输出视图
Route::get('view',function(){
    return view('welcome');
});

Route::any('test1',['uses'=>'StudentController@test1']);
Route::any('reg/duanxin',['uses'=>'RegController@duanxin']);
Route::any('reg/regis',['uses'=>'RegController@regis']);
Route::any('reg/loginis',['uses'=>'RegController@loginis']);
Route::get('first',function(){
    return view('first');
});
Route::any('first','FirstController@first');
//学员中心
Route::any('member','FirstController@member');
//简历中心
Route::any('wancheng','FirstController@wancheng');
//简历详情页
Route::any('detail','FirstController@detail');
//创建简历，下载模板
Route::any('createresume','FirstController@createresume');
//开始写简历
Route::any('resume','FirstController@resume');
//初次保存简历
Route::any('saveresume','FirstController@saveresume');
//简历编辑页面
Route::any('edit','FirstController@edit');
//编辑页面保存简历
Route::any('saveresume2','FirstController@saveresume2');
//简历删页面
Route::any('delete','FirstController@delete');
//简历提交给老师修改页面
Route::any('tijiao','FirstController@tijiao');
//学生查看老师意见页面
Route::any('tedit','FirstController@tedit');
//老师查看学生简历页面
Route::any('teacher','FirstController@teacher');