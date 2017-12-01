<template>
    <Form :label-width="80" :model='accountForm' class="account-form-wrapper" :rules="rules">
        <FormItem label="用户名" prop="name">
            <Input type="text" placeholder="请输入用户名" v-model='accountForm.name'></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" placeholder="请输入密码" v-model='accountForm.password'></Input>
        </FormItem>
        <FormItem label="重复密码" prop="rePassword">
            <Input type="password" placeholder="请重复输入密码" v-model='accountForm.rePassword'></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button type="ghost" @click="resetForm" class="reset-btn">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
          return {
            accountForm: {
                name: '',
                password: '',
                rePassword: ''
            },
            rules: {
                name: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                rePassword: [
                    { required: true, message: '重复密码不能为空', trigger: 'blur' }
                ]
            }
          }
        },
        methods: {
            handleSubmit () {
                if(this.accountForm.name !== '' && this.accountForm.password !== '' && this.accountForm.rePassword !== '') {
                    if(this.accountForm.password.length < 6) {
                        this.$Message.error('输入的密码至少需要六位！');
                    }else if(this.accountForm.password !== this.accountForm.rePassword) {
                        this.$Message.error('两次输入的密码需要保持一致！');
                    }else {
                        this.$store.dispatch('addUser', this.accountForm).then(ret => {
                            if(ret.status) {
                                this.$Message.success('用户添加成功');
                                this.accountForm.name = '';
                                this.accountForm.password = '';
                                this.accountForm.rePassword = '';
                            }else {
                                this.$Message.error(ret.errMsg);
                            }
                        });
                    }
                }
            },
            resetForm () {
                this.accountForm.name = '';
                this.accountForm.password = '';
                this.accountForm.rePassword = '';
            }
        }
    }
</script>
<style scoped lang="less">
.account-form-wrapper {
    width: 360px;
    .reset-btn {
        margin-left: 8px;
    }
}
</style>