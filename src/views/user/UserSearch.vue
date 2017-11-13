<style scoped lang="less">

</style>
<template>
    <div class="index">
      <Form :model="userForm" label-position='right' :label-width='60' inline>
        <FormItem label='用户名'>
          <Input v-model="userForm.userName" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label='手机号'>
          <Input v-model="userForm.telphone" placeholder="请输入手机号"></Input>
        </FormItem>
        <FormItem style="margin-left: -50px;">
          <Button type="primary" icon="ios-search">搜索</Button>
        </FormItem>
      </Form>
      <Table border :columns="userColumns" :data="userData"></Table>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          userForm: {
            userName: '',
            telphone: '',
          },
          userColumns: [
            {
              title: '用户名',
              align: 'center',
              key: 'userName'
            },
            {
              title: '联系方式',
              align: 'center',
              key: 'telphone'
            },
            {
              title: '昵称',
              align: 'center',
              key: 'nickName'
            },
            {
              title: '邮箱',
              align: 'center',
              key: 'email'
            },
            {
              title: '注册时间',
              align: 'center',
              key: 'createTime'
            }
          ],
          userData: [
            {
              userName: 'heicx_sudo',
              telphone: '139****9908',
              nickName: 'heicx',
              email: 'heicx_sudo@163.com',
              createTime: '2017-10-10'
            }
          ]
        }
      }
    }
</script>
