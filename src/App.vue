<template>
  <div id="app">
    <Trend
    :btns="btns"
    :numbers="numbers"
    :max="9"
    :min="0"
    :gameData="gameData"
    :oddJudge="5"
  />
  </div>
</template>

<script>
import Trend from './components/Chart/trend'

export default {
  name: 'app',
  data () {
    return {
      btns: [
        {id: 0, txt: '第一球'},
        {id: 1, txt: '第二球'},
        {id: 2, txt: '第三球'},
        {id: 3, txt: '第四球'},
        {id: 4, txt: '第五球'}
      ],
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      gameData: []
    }
  },
  components: {
    Trend
  },
  created () {
    const data = [
      {
        "date": 20190716,
        "series": "11108500",
        "numbers": "2,6,0,0,9",
        "winTime": "2019-07-16T04:24:12.000Z",
        "encodeTime": "2019-07-16T04:24:16.000Z"
      },
      {
        "date": 20190716,
        "series": "11108499",
        "numbers": "3,7,1,6,5",
        "winTime": "2019-07-16T04:22:57.000Z",
        "encodeTime": "2019-07-16T04:23:00.000Z"
      },
      {
        "date": 20190716,
        "series": "11108498",
        "numbers": "7,9,3,1,8",
        "winTime": "2019-07-16T04:21:42.000Z",
        "encodeTime": "2019-07-16T04:21:46.000Z"
      },
      {
        "date": 20190716,
        "series": "11108497",
        "numbers": "9,3,4,3,7",
        "winTime": "2019-07-16T04:20:27.000Z",
        "encodeTime": "2019-07-16T04:20:30.000Z"
      },
      {
        "date": 20190716,
        "series": "11108496",
        "numbers": "1,4,8,3,2",
        "winTime": "2019-07-16T04:19:12.000Z",
        "encodeTime": "2019-07-16T04:19:18.000Z"
      },
      {
        "date": 20190716,
        "series": "11108495",
        "numbers": "7,2,6,0,0",
        "winTime": "2019-07-16T04:17:57.000Z",
        "encodeTime": "2019-07-16T04:18:04.000Z"
      },
      {
        "date": 20190716,
        "series": "11108494",
        "numbers": "8,9,1,2,0",
        "winTime": "2019-07-16T04:16:42.000Z",
        "encodeTime": "2019-07-16T04:16:46.000Z"
      },
      {
        "date": 20190716,
        "series": "11108493",
        "numbers": "4,7,5,8,4",
        "winTime": "2019-07-16T04:15:27.000Z",
        "encodeTime": "2019-07-16T04:15:33.000Z"
      },
      {
        "date": 20190716,
        "series": "11108492",
        "numbers": "0,4,4,6,4",
        "winTime": "2019-07-16T04:14:12.000Z",
        "encodeTime": "2019-07-16T04:14:17.000Z"
      },
      {
        "date": 20190716,
        "series": "11108491",
        "numbers": "7,6,6,8,9",
        "winTime": "2019-07-16T04:12:57.000Z",
        "encodeTime": "2019-07-16T04:13:05.000Z"
      },
      {
        "date": 20190716,
        "series": "11108490",
        "numbers": "4,6,3,9,3",
        "winTime": "2019-07-16T04:11:42.000Z",
        "encodeTime": "2019-07-16T04:11:45.000Z"
      },
      {
        "date": 20190716,
        "series": "11108489",
        "numbers": "1,8,6,3,6",
        "winTime": "2019-07-16T04:10:27.000Z",
        "encodeTime": "2019-07-16T04:10:33.000Z"
      },
      {
        "date": 20190716,
        "series": "11108488",
        "numbers": "9,4,0,4,7",
        "winTime": "2019-07-16T04:09:12.000Z",
        "encodeTime": "2019-07-16T04:09:18.000Z"
      },
      {
        "date": 20190716,
        "series": "11108487",
        "numbers": "8,1,6,2,3",
        "winTime": "2019-07-16T04:07:57.000Z",
        "encodeTime": "2019-07-16T04:08:03.000Z"
      },
      {
        "date": 20190716,
        "series": "11108486",
        "numbers": "3,1,0,9,0",
        "winTime": "2019-07-16T04:06:42.000Z",
        "encodeTime": "2019-07-16T04:06:45.000Z"
      },
      {
        "date": 20190716,
        "series": "11108485",
        "numbers": "3,9,7,1,2",
        "winTime": "2019-07-16T04:05:27.000Z",
        "encodeTime": "2019-07-16T04:05:32.000Z"
      },
      {
        "date": 20190716,
        "series": "11108484",
        "numbers": "4,1,9,2,8",
        "winTime": "2019-07-16T04:04:12.000Z",
        "encodeTime": "2019-07-16T04:04:17.000Z"
      },
      {
        "date": 20190716,
        "series": "11108483",
        "numbers": "3,8,7,6,4",
        "winTime": "2019-07-16T04:02:57.000Z",
        "encodeTime": "2019-07-16T04:03:02.000Z"
      },
      {
        "date": 20190716,
        "series": "11108482",
        "numbers": "2,4,9,2,3",
        "winTime": "2019-07-16T04:01:42.000Z",
        "encodeTime": "2019-07-16T04:01:46.000Z"
      },
      {
        "date": 20190716,
        "series": "11108481",
        "numbers": "1,8,5,9,2",
        "winTime": "2019-07-16T04:00:27.000Z",
        "encodeTime": "2019-07-16T04:00:33.000Z"
      },
      {
        "date": 20190716,
        "series": "11108480",
        "numbers": "4,6,9,8,1",
        "winTime": "2019-07-16T03:59:12.000Z",
        "encodeTime": "2019-07-16T03:59:24.000Z"
      },
      {
        "date": 20190716,
        "series": "11108479",
        "numbers": "0,4,3,9,8",
        "winTime": "2019-07-16T03:57:57.000Z",
        "encodeTime": "2019-07-16T03:58:05.000Z"
      },
      {
        "date": 20190716,
        "series": "11108478",
        "numbers": "6,3,9,8,4",
        "winTime": "2019-07-16T03:56:42.000Z",
        "encodeTime": "2019-07-16T03:56:47.000Z"
      },
      {
        "date": 20190716,
        "series": "11108477",
        "numbers": "8,7,9,0,3",
        "winTime": "2019-07-16T03:55:27.000Z",
        "encodeTime": "2019-07-16T03:55:30.000Z"
      },
      {
        "date": 20190716,
        "series": "11108476",
        "numbers": "2,6,2,3,5",
        "winTime": "2019-07-16T03:54:12.000Z",
        "encodeTime": "2019-07-16T03:54:18.000Z"
      },
      {
        "date": 20190716,
        "series": "11108475",
        "numbers": "8,1,8,2,5",
        "winTime": "2019-07-16T03:52:57.000Z",
        "encodeTime": "2019-07-16T03:53:05.000Z"
      },
      {
        "date": 20190716,
        "series": "11108474",
        "numbers": "4,4,2,8,6",
        "winTime": "2019-07-16T03:51:42.000Z",
        "encodeTime": "2019-07-16T03:51:47.000Z"
      },
      {
        "date": 20190716,
        "series": "11108473",
        "numbers": "0,6,4,7,0",
        "winTime": "2019-07-16T03:50:27.000Z",
        "encodeTime": "2019-07-16T03:50:32.000Z"
      },
      {
        "date": 20190716,
        "series": "11108472",
        "numbers": "1,9,1,1,3",
        "winTime": "2019-07-16T03:49:12.000Z",
        "encodeTime": "2019-07-16T03:49:16.000Z"
      },
      {
        "date": 20190716,
        "series": "11108471",
        "numbers": "7,5,3,4,7",
        "winTime": "2019-07-16T03:47:57.000Z",
        "encodeTime": "2019-07-16T03:48:03.000Z"
      }
    ]
    this.gameData = data
    // console.log(data)
  }
}
</script>

<style>
@import url('./style/_reset.scss');
html{
  font-size: 625%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  font-size: .16rem;
}
</style>
