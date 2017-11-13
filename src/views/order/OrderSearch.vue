<style scoped lang="less">

</style>
<template>
    <div class="index">
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
        <FormItem label='发货类型'>
          <Select v-model="orderForm.sendType" style="width: 100px;">
              <Option v-for="item in orderForm.sendTypeList" :value="item.value" :key="item.value">{{ item.name }}</Option>
          </Select>
        </FormItem>
        <FormItem style="margin-left: -50px;">
          <Button type="primary" icon="ios-search">搜索</Button>
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
            endTime: '',
            sendType: -1,
            sendTypeList: [
              {
                name: '未发货',
                value: 0
              },
              {
                name: '已发货',
                value: 1
              },
              {
                name: '全部',
                value: -1
              }
            ]
          },
          orderColumns: [
            {
              title: '订单号',
              width: 140,
              align: 'center',
              key: 'orderId'
            },
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
            },
            {
              title: '操作',
              key: 'action',
              width: 150,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.show(params.index)
                      }
                    }
                  }, '查看'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, '删除')
                ]);
              }
            }
          ],
          orderData: [
            {
              orderId: 'CX0007008120198',
              userName: 'heicx_sudo',
              telphone: '139****9908',
              address: '北京市朝阳区望京北路 1 号',
              goodsName: '滑步车',
              price: 1799,
              status: 1,
              createTime: '2017-10-10'
            }
          ]
        }
      }
    }
</script>
