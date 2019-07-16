
const findLocMb = (divide = true) => {
  // 取得各點座標
  const table = document.querySelector('.trend-table table')
  const tbody = document.querySelector('.trend-table table tbody')
  const trs = tbody.querySelectorAll('tr')
  const locArr = []
  const locNumArr = []

  for (let i = 0; i < trs.length; i++) {
    const tds = trs[i].querySelectorAll('td')
    // 分隔線
    trs[i].style.borderBottom = 'none'
    if (divide) {
      if (i !== 0 && i !== (trs.length - 1)) {
        if ((i - 4) % 5 == 0) trs[i].style.borderBottom = '2px solid #ccc'
      }
    }
    // 抓座標
    for (let j = 0; j < tds.length; j++) {
      if (tds[j].classList.length === 2) {
        locNumArr.push([tds[j].offsetLeft + tds[j].offsetWidth / 2, tds[j].offsetTop + tds[j].offsetHeight / 2])
      }
    }
  }

  locArr.push(locNumArr)
  //  畫圖
  const canvas = document.querySelector('#canvas')
  const scale = window.devicePixelRatio
  canvas.setAttribute('width', scale * table.clientWidth)
  canvas.setAttribute('height', scale * table.clientHeight)
  canvas.style.width = canvas.width / scale + 'px'
  canvas.style.height = canvas.height / scale + 'px'
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.scale(scale, scale)
    for (let i = 0; i < locArr[0].length; i++) {
      ctx.fillStyle = '#0092E0'
      ctx.strokeStyle = '#0092E0'
      ctx.lineWidth = 1
      if (window.innerWidth > 1024) ctx.lineWidth = 2

      // 畫線
      if (i !== locArr[0].length - 1) {
        ctx.beginPath()
        ctx.moveTo(locArr[0][i][0], locArr[0][i][1])
        ctx.lineTo(locArr[0][i + 1][0], locArr[0][i + 1][1])
        ctx.closePath()
        ctx.stroke()
      }
    }
  }
}

export default findLocMb
