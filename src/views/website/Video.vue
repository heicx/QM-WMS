<style scoped lang="less">

</style>
<template>
    <div class="index">
      <Form :model="orderForm" :label-width="80" label-position="left">
        <FormItem label='订单号'>
          <Row type="flex" justify="start" align="middle" :gutter="16">
            <Col span="6">
              <Input v-model="orderForm.value" placeholder="请输入订单号"></Input>
            </Col>
            <Col span="6">
              <Button type="primary" icon="ios-search">搜索</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
      <Table border :columns="orderColumns" :data="orderData"></Table>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          orderForm: {
            value: ''
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
