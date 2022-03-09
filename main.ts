let [x, y] = [2, 2]
input.onButtonPressed(Button.A, function left() {
    
    if (x > 0) {
        x = x - 1
    }
    
})
input.onButtonPressed(Button.B, function right() {
    
    if (x < 4) {
        x = x + 1
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function up() {
    
    if (y > 0) {
        y = y - 1
    }
    
})
input.onPinPressed(TouchPin.P2, function down() {
    
    if (y < 4) {
        y = y + 1
    }
    
})
input.onButtonPressed(Button.AB, function reset() {
    
    if (x > 2 || x < 2) {
        x = 2
    }
    
    if (y > 2 || y < 2) {
        y = 2
    }
    
})
basic.forever(function forever() {
    basic.clearScreen()
    led.plot(x, y)
})
