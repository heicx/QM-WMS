<style scoped lang="less">

</style>
<template>
    <div class="index">
      <Form :model="newsForm" label-position='right' :label-width='70' inline>
        <FormItem label='新闻标题'>
          <Input v-model="newsForm.title" placeholder="请输入新闻标题"></Input>
        </FormItem>
        <FormItem label='创建时间'>
          <DatePicker v-model="newsForm.endTime" type="date" placeholder="请输入创建时间"></DatePicker>
        </FormItem>
        <FormItem label='截止时间'>
          <DatePicker v-model="newsForm.endTime" type="date" placeholder="请输入截止时间"></DatePicker>
        </FormItem>
        <FormItem style="margin-left: -50px;">
          <Button type="primary" icon="ios-search">搜索</Button>
        </FormItem>
      </Form>
      <Table border :columns="newsColumns" :data="newsData"></Table>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          newsForm: {
            title: '',
            beginTime: '',
            endTime: ''
          },
          newsColumns: [
            {
              title: '新闻标题',
              align: 'center',
              key: 'title'
            },
            {
              title: '新闻副标题',
              align: 'center',
              key: 'subTitle'
            },
            {
              title: '作者',
              align: 'center',
              key: 'author'
            },
            {
              title: '状态',
              align: 'center',
              key: 'status'
            },
            {
              title: '更新时间',
              align: 'center',
              key: 'updateTime'
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
                  }, '编辑'),
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
          newsData: [
            {
              title: '新闻标题',
              subTitle: '新闻副标题',
              author: 'heicx',
              status: '未发布',
              updateTime: '2017-10-10'
            }
          ]
        }
      }
    }
</script>
