<style scoped lang="less">
.export-btns {
  margin-left: -50px;
  .export-download-btn {
    margin-left: 10px;
  }
}
</style>
<template>
    <div class="order-export-wrapper">
      <Form :model="orderForm" label-position='right' :label-width='60' inline>
        <FormItem label='订单号'>
          <Input v-model="orderForm.orderId" placeholder="请输入订单号"></Input>
        </FormItem>
        <FormItem label='开始时间'>
          <DatePicker v-model="orderForm.beginTime" type="date" placeholder="订单开始时间"></DatePicker>
        </FormItem>
        <FormItem label='结束时间'>
          <DatePicker v-model="orderForm.endTime" type="date" placeholder="订单结束时间"></DatePicker>
        </FormItem>
        <FormItem class="export-btns">
          <Button type="primary" icon="ios-search">搜索</Button>
          <Button type="primary" class="export-download-btn" icon="ios-cloud-download-outline">导出</Button>
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
          model1: -1,
          orderForm: {
            orderId: '',
            beginTime: '',
            endTime: ''
          },
          orderColumns: [
            {
              title: '订单号',
              width: 140,
              align: 'center',
              key: 'orderId'
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
              title: '邮编',
              align: 'center',
              key: 'zipCode'
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
              key: 'payType'
            },
            {
              title: '发货状态',
              align: 'center',
              key: 'sendType'
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
              userName: '陈敏',
              telphone: '139****9908',
              address: '北京市朝阳区望京北路 1 号',
              zipCode: '1000010',
              goodsName: '滑步车',
              price: 1799,
              payType: '已付款',
              sendType: '未发货',
              createTime: '2017-10-10'
            }
          ]
        }
      }
    }
</script>
