// 如果没有连接硬件，会显示，正在找设备。
var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {  
  var led = new five.Led(13) // 连的接口
  led.blink(1000)
})  