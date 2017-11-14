<style scoped lang="less">

</style>
<template>
    <div class="index">
      <Form :model="orderForm" inline>
        <FormItem>
          <Button type="primary" icon="ios-search" style="margin-left: 10px;">导入</Button>
        </FormItem>
      </Form>
      <Table border :columns="orderColumns" :data="orderData"></Table>
      <Page :total="40" size="small" show-elevator show-sizer style="margin-top: 20px;"></Page>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          orderColumns: [
            {
              title: '订单号',
              width: 140,
              align: 'center',
              key: 'orderId'
            },
            {
              title: '物流单号',
              width: 140,
              align: 'center',
              key: 'expressId'
            },
            {
              title: '配送方',
              width: 140,
              align: 'center',
              key: 'expressName'
            },
            {
              title: '收件人',
              align: 'center',
              key: 'userName'
            },
            {
              title: '联系方式',
              align: 'center',
              key: 'telphone'
            },
            {
              title: '收货地址',
              align: 'center',
              key: 'address'
            },
            {
              title: '商品名称',
              align: 'center',
              key: 'goodsName'
            },
            {
              title: '商品价格',
              align: 'center',
              key: 'price'
            },
            {
              title: '订单状态',
              align: 'center',
              key: 'status'
            },
            {
              title: '下单时间',
              align: 'center',
              key: 'createTime'
            }
          ],
          orderData: [
            {
              orderId: 'CX0007008120198',
              expressId: '23009766431',
              expressName: '顺丰快递',
              userName: '刘女士',
              telphone: '132****9820',
              address: '北京市朝阳区望京北路 1 号',
              goodsName: '滑步车',
              price: 1799,
              status: '已发货',
              createTime: '2017-10-10'
            }
          ]
        }
      }
    }
</script>
