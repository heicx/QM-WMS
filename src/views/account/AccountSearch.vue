<style scoped lang="less">

</style>
<template>
    <div class="index">
        <Form :model="userForm" label-position='right' :label-width='60' inline>
            <FormItem label="用户名" prop="userName">
                <Input type="text" v-model="expressForm.userName"></Input>
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
        data () {
          return {
              userForm: {
                  userName: ''
              },
              userColumns: [
                {
                    title: '订单号',
                    width: 140,
                    align: 'center',
                    key: 'userName'
                }
              ],
              userData: [
                {
                    userName: 'heicx'
                }
              ]
          }
        },
        methods: {
        }
    }
</script>
