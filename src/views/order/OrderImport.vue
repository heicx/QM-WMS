<style scoped lang="less">
.order-import-btn {
  margin-left: 5px;
}

.order-selection-btns,
.order-page {
  margin-top: 20px;
}
</style>
<template>
    <div class="order-update-wrapper">
      <Form inline>
        <FormItem>
          <Button type="primary" icon="ios-cloud-upload-outline" class="order-import-btn">导入</Button>
        </FormItem>
        <FormItem>
          <Button type="primary" icon="ios-checkmark-outline" class="order-import-btn" :class='{"disabled": true}'>确认发货</Button>
        </FormItem>
      </Form>
      <Table border ref="selection" :columns="orderColumns" :data="orderData"></Table>
      <div class="order-selection-btns">
        <Button @click="handleSelectAll(true)">全选</Button>
        <Button @click="handleSelectAll(false)">取消全选</Button>
      </div>
      <Page :total="40" size="small" show-elevator show-sizer class="order-page"></Page>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          orderColumns: [
            {
              type: 'selection',
              width: 60,
              align: 'center'
            },
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
      },
      methods: {
        handleSelectAll (status) {
          this.$refs.selection.selectAll(status);
        }
      }
    }
</script>
