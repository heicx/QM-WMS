<style scoped lang="less">

</style>
<template>
    <div class="index">
        <Form :model="userForm" label-position='right' :label-width='60' inline>
            <FormItem label="用户名" prop="userName">
                <Input type="text" v-model="userForm.userName"></Input>
            </FormItem>
            <FormItem style="margin-left: -50px;">
            <Button type="primary" icon="ios-search">搜索</Button>
            </FormItem>
        </Form>
        <Table border :columns="userColumns" :data="userData"></Table>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            userForm: {
                userName: '',
                roleName: '',
                status: '',
                createTime: ''
            },
            userColumns: [
            {
                title: '用户名',
                align: 'center',
                key: 'userName'
            },
            {
                title: '角色',
                align: 'center',
                key: 'roleName'
            },
            {
                title: '账户状态',
                align: 'center',
                key: 'status'
            },
            {
                title: '注册时间',
                align: 'center',
                key: 'createTime'
            }
            ],
            userData: [
            {
                userName: 'heicx',
                roleName: '管理员',
                status: '正常',
                createTime: '2017-09-20'
            },
            {
                userName: '陈敏',
                roleName: '管理员',
                status: '禁用',
                createTime: '2017-11-02'
            }
            ]
        }
    },
    computed: mapGetters ({
        userList: 'userList'
    }),
    created () {
        this.$store.dispatch('userList');
    },
    methods: {
    }
}
</script>
