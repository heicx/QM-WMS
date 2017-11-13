<style scoped lang="less">

</style>
<template>
    <Form ref="formCustom" :label-width="80" style="width: 320px">
        <FormItem label="用户名" prop="userName">
            <Input type="text"></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
            <Input type="password"></Input>
        </FormItem>
        <FormItem label="重复密码" prop="rePasswd">
            <Input type="password" number></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">确定</Button>
            <Button type="ghost" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
          return {}
        },
        methods: {
        }
    }
</script>
