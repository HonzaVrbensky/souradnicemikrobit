x,y = 2,2
def left():
    global x
    if x > 0:
        x = x-1
def right():
    global x
    if x < 4:
        x = x+1
def up():
    global y
    if y > 0:
        y = y-1
def down():
    global y
    if y < 4:
        y = y+1
def reset():
    global x,y
    if x > 2 or x <2:
        x=2
    if y > 2 or y <2:
                y=2

input.on_button_pressed(Button.A, left)
input.on_button_pressed(Button.B, right)
input.on_logo_event(TouchButtonEvent.PRESSED, up)
input.on_pin_pressed(TouchPin.P2, down)
input.on_button_pressed(Button.AB, reset)

def forever():
    basic.clear_screen()
    led.plot(x, y)
basic.forever(forever)