<style scoped>
    @import 'styles/common.css';
</style>
<style scoped>
    .layout{
        height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 20px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 160px;
        height: 30px;
        background: url(images/logo.png) no-repeat center;
        background-size: cover;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .row-content {
        height: 100%;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" class='row-content'>
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-person"></Icon>
                            账户管理
                        </template>
                        <MenuItem name="1-1">
                            <router-link to="/account/create" tag="div">创建账户</router-link>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <router-link to="/account/update" tag="div">修改密码</router-link>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="clipboard"></Icon>
                            订单管理
                        </template>
                        <MenuItem name="2-1">
                            <router-link to="/order/search" tag="div">订单查询</router-link>
                        </MenuItem>
                        <MenuItem name="2-2">
                            <router-link to="/order/export" tag="div">订单导出</router-link>
                        </MenuItem>
                        <MenuItem name="2-3">
                            <router-link to="/order/import" tag="div">订单导入</router-link>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </template>
                        <MenuItem name="3-1">
                            <router-link to="/user/search" tag="div">用户查询</router-link>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-world"></Icon>
                            网站管理
                        </template>
                        <MenuItem name="4-1">
                            <router-link to="/web/news" tag="div">新闻编辑</router-link>
                        </MenuItem>
                        <MenuItem name="4-2">
                            <router-link to="/web/video" tag="div">视频编辑</router-link>
                        </MenuItem>
                        <!-- <MenuItem name="4-3">
                            <router-link to="/web/comment" tag="div">用户评价</router-link>
                        </MenuItem> -->
                    </Submenu>
                </Menu>
            </Col>
            <Col :span="spanRight">
              <div class="layout-content">
                <div class="layout-content-main" style="background:#eee;">
                  <Card shadow>
                    <p slot="title">{{$route.meta.title}}</p>
                    <router-view></router-view>
                  </Card>
                </div>
              </div>
              <div class="layout-copy">
                  2011-2017 &copy; QMY
              </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 21
            }
        },
        computed: {
            // iconSize () {
            //     return this.spanLeft === 5 ? 14 : 24;
            // }
        },
        methods: {
            // toggleClick () {
            //     if (this.spanLeft === 5) {
            //         this.spanLeft = 2;
            //         this.spanRight = 22;
            //     } else {
            //         this.spanLeft = 5;
            //         this.spanRight = 19;
            //     }
            // }
        }
    }
</script>
