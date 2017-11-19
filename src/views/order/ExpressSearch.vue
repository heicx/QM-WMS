<style scoped lang="less">

</style>
<template>
    <div class="index">
      <Form :model="expressForm" label-position='right' :label-width='60' inline>
        <FormItem label='订单号'>
          <Input v-model="expressForm.orderId" placeholder="请输入订单号"></Input>
        </FormItem>
        <FormItem label='快递单号'>
          <Input v-model="expressForm.expressId" placeholder="请输入快递单号"></Input>
        </FormItem>
        <FormItem style="margin-left: -50px;">
          <Button type="primary" icon="ios-search">搜索</Button>
        </FormItem>
      </Form>
      <Table border :columns="orderColumns" :data="orderData"></Table>
      <Card style="margin-top: 20px; width: 450px;">
          <Timeline>
              <TimelineItem>
                  <p class="time">2017-11-02 13:09:07</p>
                  <p class="content">已到广州市，您的订单已审核</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2017-11-02 13:21:52</p>
                  <p class="content">已到广州市，您的订单正准备拣货</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2017-11-02 14:47:59</p>
                  <p class="content">已到广州市，您的订单已经打包完毕，准备出库</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2017-11-02 20:29:44</p>
                  <p class="content">已到广州市，快件在【广州黄埔南方物流园营业部】装车，已发往 【东莞虎门集散中心】</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2017-11-03 02:19:07</p>
                  <p class="content">已到东莞市，快件到达 【东莞虎门集散中心】</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2017-11-03 05:01:49</p>
                  <p class="content">已到东莞市，快件到达 【东莞虎门大宁村营业部】</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2017-11-03 05:53:17</p>
                  <p class="content">已到东莞市，正在派送途中,请您准备签收(派件人:赵军,电话:13129887359) </p>
              </TimelineItem>
          </Timeline>
      </Card>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          expressForm: {
            orderId: '',
            expressId: ''
          },
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
              title: '配方方',
              width: 140,
              align: 'center',
              key: 'expressName'
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
            }
          ],
          orderData: [
            {
              orderId: 'CX0007008120198',
              expressId: '23009766431',
              expressName: '顺丰快递',
              userName: 'heicx_sudo',
              telphone: '139****9908',
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
