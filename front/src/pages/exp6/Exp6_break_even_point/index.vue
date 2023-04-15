<template>
  <a-space align="start" direction="vertical" size="middle">

    <a-button type="primary" shape="round" @click=''>
      <template #icon>
        <DownloadOutlined />
      </template>
      实验指导书下载
    </a-button>

    <a-space size = "middle">
      <a-table :columns="columns" :pagination="false" :data-source="data" bordered style="width: 700px">
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <a>{{ text }}</a>
          </template>
        </template>
        <template #title>实验数据</template>
      </a-table>
      <a-list 
        size="middle"
        split = "false"
        item-layout="vertical" 
        :data-source="formula">
          <template #header>
            <div><b>相关公式</b></div>
          </template>
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card :title = "item.lhs">
                {{ item.rhs }}
              </a-card>
            </a-list-item>
          </template>
        </a-list>
    </a-space>

  </a-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  {
    title: '数据项',
    dataIndex: 'name',
  },
  {
    title: '值',
    className: 'column-money',
    dataIndex: 'money',
  }
];

const data = [
  {
    key: '1',
    name: '固定成本',
    money: '￥50,000.00'
  },
  {
    key: '2',
    name: '单位变动成本',
    money: '￥60.00'
  },
  {
    key: '3',
    name: '单价',
    money: '￥100.00'
  },
];

interface FormularItem{
  lhs : string;
  rhs : string;
}

const formula: FormularItem[] = [
  {
    lhs : '总成本',
    rhs : '单位变动成本 * 销量 + 固定成本'
  },
  {
    lhs: '利润',
    rhs: '单价 * 销量 - 总成本'
  }
];



export default defineComponent({
  setup() {
    return {
      data,
      columns,
      formula
    };
  },
});
</script>
<style>
th.column-money,
td.column-money {
  text-align: left !important;
}
</style>