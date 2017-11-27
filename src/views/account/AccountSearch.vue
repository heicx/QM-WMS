<style scoped lang="less">

</style>
<template>
    <div class="index">
        <Form :model="userForm" label-position='right' :label-width='60' inline>
            <FormItem label="用户名" prop="userName">
                <Input type="text" v-model="userForm.userName"></Input>
            </FormItem>
            <FormItem style="margin-left: -50px;">
            <Button type="primary" icon="ios-search" @click="searchUsers">搜索</Button>
            </FormItem>
        </Form>
        <Table border :columns="userColumns" :data="userList"></Table>
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
        }
    },
    computed: mapGetters ({
        'userList': 'userList'
    }),
    created () {
        this.$store.dispatch('userList');
    },
    methods: {
        searchUsers () {
            if(this.userForm.userName === '') {
                this.$store.commit('searchUsers');    
            }else {
                this.$store.commit('searchUsers', this.userForm.userName);
            }
        }
    }
}
</script>
