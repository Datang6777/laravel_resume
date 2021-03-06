<?php
/**
 * Created by PhpStorm.
 * User: 27500
 * Date: 2017/3/22
 * Time: 11:54
 */
// 账号管理系统
class BadminController extends FormController
{

    public function __construct()
    {
        $this->model = '\Badmin';
        $this->fields_all = [
            'id' => [
                'show' => '序号',
            ],
            'nickname' => [
                'show' => '昵称',
                'search' => "nickname like CONCAT('%', ?, '%')"
            ],
            'username' => [
                'show' => '用户名',
            ],
            'email' => [
                'show' => '邮箱',
            ],
            'password' => [
                'show' => '密码',
            ],
            'created_at' => [
                'show' => '创建时间',
            ],
            'updated_at' => [
                'show' => '更新时间',
            ],
        ];

        $this->fields_show = ['id' ,'nickname', 'username', 'email', 'created_at'];
        $this->fields_edit = ['nickname', 'username'];
        $this->fields_create = ['nickname', 'username', 'email', 'password'];
        parent::__construct();
    }

}