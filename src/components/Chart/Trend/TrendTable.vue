<template>
  <div class="trend-table">
    <canvas id="canvas"></canvas>
    <table>
      <thead>
        <tr>
          <th rowspan="2">期号</th>
          <th :colspan="numbers.length">{{ btns.length !== 0 ? btns[currentTab].txt : '' }}走势</th>
          <th colspan="3">回摆</th>
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
        <tr v-for="(data, i) in datas" :key="data.series">
          <td>{{ data.series }}</td>
          <td
            v-for="(miss, k) in data.missArr"
            :key="k + i"
            :class="panelValue(miss, k, style)"
          >
            <div
              :class="miss === 0 && k < numbers.length ? 'win-col' : ''"
            >{{ panelValue(miss, k, text) }}</div>
          </td>
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
    'datas',
    'adjustValue',
    'currentTab',
    'btns'
  ],
  data () {
    return {
      text: {
        type: 'text',
        backP: '正',
        backN: '反',
        backE: '重',
        odd: '单',
        even: '双',
        big: '大',
        small: '小'
      },
      style: {
        type: 'style',
        backP: 'dkblue-col',
        backN: 'dkblue-col',
        backE: 'dkblue-col',
        odd: 'green-col',
        even: 'green-col',
        big: 'ltblue-col',
        small: 'ltblue-col'
      }
    }
  },
  methods: {
    panelValue (miss, i, data) {
      const len = this.numbers.length
      // 數字
      if (i < len) {
        if (data.type === 'text') {
          return miss === 0 ? i + this.adjustValue : miss
        } else {
          return miss === 0 ? 'winCol judge' : ''
        }
      }
      // 回擺
      if (i < len + 3) {
        if (i === len) {
          return miss === 0 ? data.backN : miss
        } else if (i === len + 1) {
          return miss === 0 ? data.backE : miss
        } else {
          return miss === 0 ? data.backP : miss
        }
      }
      // 單雙
      if (i < len + 5) {
        if (i === len + 3) {
          return miss === 0 ? data.odd : miss
        } else {
          return miss === 0 ? data.even : miss
        }
      }
      // 大小
      if (i < len + 7) {
        if (i === len + 5) {
          return miss === 0 ? data.big : miss
        } else {
          return miss === 0 ? data.small : miss
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.trend-table{
  padding: .2rem .2rem;
  position: relative;
  #canvas{
    position: absolute;
    top: .2rem;
    left: .2rem;
  }
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
        &:first-child{ width: 10%; }
        &:nth-last-child(1){ width: 3%;}
        &:nth-last-child(2){ width: 3%;}
        &:nth-last-child(3){ width: 3%;}
        &:nth-last-child(4){ width: 3%;}
        &:nth-last-child(5){ width: 3%;}
        &:nth-last-child(6){ width: 3%;}
        &:nth-last-child(7){ width: 3%;}
      }
    }
  }
}
.win-col{
  position: relative;
  z-index: 5;
  width: .22rem;
  height: .22rem;
  line-height: .22rem;
  background: #44a2e0;
  color: #fff;
  margin: auto;
  border-radius: 50%;
}
.miss-col{
  color: #999;
}
.red-col{
  color: #f02f22;
}
.dkblue-col{
  color: #fff;
  background: #588dc8;
}
.green-col{
  color: #fff;
  background: #56b07c;
}
.ltblue-col{
  color: #fff;
  background: #61b1da;
}
</style>
