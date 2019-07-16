<template>
  <div class="statis-table">
    <table>
      <thead>
        <tr>
          <th rowspan="2">统计类型</th>
          <th :colspan="numbers.length">{{ btns.length !== 0 ? btns[currentTab].txt : '' }}</th>
          <th colspan="3">回摆(<span class="red-col">*</span>)</th>
          <th colspan="2">单双</th>
          <th colspan="2">大小</th>
        </tr>
        <tr>
          <th
            v-for="n in numbers"
            :key="n"
          >{{ n }}</th>
          <th>反向</th>
          <th>重号</th>
          <th>正向</th>
          <th>单</th>
          <th>双</th>
          <th>大</th>
          <th>小</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>总次数</td>
          <td
            v-for="(count, i) in countArr"
            :key="i"
          >{{ count }}</td>
        </tr>
        <tr>
          <td>最大遗漏</td>
          <td
            v-for="(max, j) in maxMiss"
            :key="j"
          >{{ max }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: [
    'numbers',
    'statisTitle',
    'countArr',
    'maxMiss',
    'currentTab',
    'btns'
  ]
}
</script>

<style lang="scss" scoped>
.statis-table{
  padding: .2rem .2rem;
  table{
    width: 100%;
    color: #666;
    text-align: center;
    th,td{
      border: 1px solid #e6e6e6;
    }
    thead{
      th{
        padding: .1rem 0rem;
        background: #f2f2f2;
      }
    }
    tbody{
      td{
        padding: .1rem 0rem;
        width: 3%;
        &:first-child{
          width: 8%;
        }
      }
    }
  }
}
.red-col{
  color: #f02f22;
}
</style>
