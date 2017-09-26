// 让电机转动
var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var servo = new five.Servo(9) // pin 是9

  servo.sweep() // 0~180度之间转动

  board.wait(3000, function () {
    servo.stop()
    servo.center()
  })
})