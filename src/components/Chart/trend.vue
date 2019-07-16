<template>
<div class="trend-el">
  <div class="winNo-title">
    <h3>位置走势</h3>
    <!-- <div>
      选择期数：
      <select name="" id="" v-model="period" @change="setPeriod(period)">
        <option value="30">30期</option>
        <option value="60">60期</option>
        <option value="90">90期</option>
      </select>
    </div> -->
  </div>

  <p class="top-description">
    <span>说明： </span>
    <span>该走势图显示出每个位置的号码走势和号码的遗漏次数。</span>
  </p>

  <div class="btn-group">
    <ul v-if="btns.length !== 0">
      <li
        v-for="btn in btns"
        :key="btn.id"
        @click="chartData(btn.id)"
        :class="currentTab === btn.id ? 'activeBtn' : ''"
      >{{ btn.txt }}</li>
    </ul>
    <ul v-else></ul>
    <div class="filter-group">
      <div class="filter-row" @click="filter">
        <div class="filter-check">
          <!-- <img src="../../assets/checkbox.png" alt="check" :class="isCheck ? 'check-active' : ''"> -->
        </div>
        <span>分割线</span>
      </div>
    </div>
  </div>

  

  <statis-table
    :numbers="numbers"
    :countArr="countArr"
    :maxMiss="maxMiss"
    :btns="btns"
    :currentTab="currentTab"
  />

  <p class="center-description">
    <span>回摆：</span>
    <span>假如本期开出的结果大于上一期开出的结果则为“正向”，假如两期开出的结果相同则为“重号”，反之为“反向”。</span>
  </p>

  <trend-table
    :numbers="numbers"
    :datas="datas"
    :adjustValue="adjustValue"
    :btns="btns"
    :currentTab="currentTab"
  />

</div>
</template>

<script>
// import { mapActions } from 'vuex'
import draw from '../../js/draw.js'
import StatisTable from './Trend/StatisTable'
import TrendTable from './Trend/TrendTable'
export default {
  props: {
    gameData: {
      default: []
    },
    btns: {
      default: []
    },
    numbers: {
      default: [],
      required: true
    },
    oddJudge: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    adjustValue: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {
      currentTab: 0,
      // period: this.$store.state.period || 30,
      isCheck: true,
      datas: [],
      maxMiss: [],
      countArr: []
    }
  },
  components: {
    StatisTable,
    TrendTable
  },
  mounted () {
    this.chartData()
  },
  watch: {
    // gameData (newV, oldV) {
    //   this.chartData(this.currentTab)
    // }
  },
  methods: {
    // ...mapActions(['setPeriod']),
    draw: draw,
    filter () {
      this.isCheck = !this.isCheck
      this.draw(this.isCheck)
    },
    chartData (ball = 0) {
      this.currentTab = ball
      // 資料
      const gameData = JSON.parse(JSON.stringify(this.gameData))
      console.log(gameData)
      const rowLength = this.max - this.min + 1
      const data = []
      // 統計數據陣列
      let missArr = Array(rowLength + 7)
      let countArr = Array(rowLength + 7)
      let maxMiss = Array(rowLength + 7)
      console.log(gameData.length)
      for (let i = (gameData.length - 1); i > -1; i--) {
        console.log(11)
        // 判斷是否為和值的走勢圖
        let winNo
        if (this.btns.length !== 0) {
          winNo = Number(gameData[i].numbers.split(',')[ball])
        } else {
          winNo = Number(gameData[i].numbers.split(',').reduce((a, b) => Number(a) + Number(b)))
        }

        if (i === (gameData.length - 1)) {
          // 先塞初始值
          missArr.fill(1)
          countArr.fill(0)
        } else {
          missArr = data[0].missArr.map(x => x + 1)
        }

        if (winNo !== 'X') {
          missArr[winNo - this.adjustValue] = 0
          countArr[winNo - this.adjustValue] += 1
          // 單雙
          if (winNo % 2 === 0) {
            missArr[rowLength + 4] = 0
            countArr[rowLength + 4] += 1
          } else {
            missArr[rowLength + 3] = 0
            countArr[rowLength + 3] += 1
          }
          // 大小
          if (winNo >= this.oddJudge) {
            missArr[rowLength + 5] = 0
            countArr[rowLength + 5] += 1
          } else {
            missArr[rowLength + 6] = 0
            countArr[rowLength + 6] += 1
          }
          // 回擺
          if (i !== (gameData.length - 1)) {
            if (data[0].winNo === winNo) {
              missArr[rowLength + 1] = 0
              countArr[rowLength + 1] += 1
            }
            if (data[0].winNo > winNo) {
              missArr[rowLength] = 0
              countArr[rowLength] += 1
            }
            if (data[0].winNo < winNo) {
              missArr[rowLength + 2] = 0
              countArr[rowLength + 2] += 1
            }
          }
        }
        
        data.unshift({
          series: gameData[i].series,
          winNo: winNo,
          missArr: missArr
        })

        // 最大遺漏
        for (let k = 0; k < missArr.length; k++) {
          if (i === (gameData.length - 1)) {
            maxMiss[k] = missArr[k]
          } else {
            maxMiss[k] = Math.max(maxMiss[k], data[0].missArr[k])
          }
        }
      }
      this.maxMiss = maxMiss
      this.countArr = countArr
      this.datas = data
      // console.log(this.$store.state.period)
      // console.log(this.datas)
      this.$nextTick(() => {
        this.draw(this.isCheck)
      })
    }
  },
  // beforeDestroy () {
  //   this.$store.state.period = 30
  // }
}
</script>

<style lang="scss" scoped>
.trend-el{
  background: #fff;
}
.winNo-title{
  padding: 0rem .2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  h3{
    font-size: .18rem;
    line-height: 55px;
  }
}
.top-description{
  padding: .2rem .2rem;
  span:first-child{
    color: #333;
    font-weight: 600;
  }
  span:last-child{
    color: #999;
  }
}
.btn-group{
  padding: 0rem .2rem;
  display: flex;
  align-items: center;
  ul{
    width: 85%;
    display: flex;

    li{
      font-size: .14rem;
      cursor: pointer;
      padding: .05rem .15rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      margin-right: .1rem;
      &:hover{
        background-color: #f02f22;
        border: 1px solid #f02f22;
        color: #fff;
      }
    }
    .activeBtn{
      border: 1px solid #f02f22;
      background: #f02f22;
      color: #fff;
    }
  }
  .filter-group{
    width: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .filter-row{
      display: flex;
      cursor: pointer;
    }
    .filter-check{
      width: 16px;
      height: 16px;
      overflow: hidden;
      margin-right: .05rem;
      position: relative;
      img{
        position: absolute;
        top: 0;
        left: 0;
      }
      .check-active{
        top: -16px;
      }
    }
  }
}

.center-description{
  padding: 0rem .2rem .1rem;
  span:first-child{
    color: #f02f22;
    font-weight: 600;
  }
  span:last-child{
    color: #999;
  }
}
.red-col{
  color: #f02f22;
}

</style>
