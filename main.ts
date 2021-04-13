let counter = 0
basic.forever(function () {
    if (counter == 5) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        counter = 0
        basic.showNumber(counter)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        led.plot(2, 2)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        counter += 1
        basic.showNumber(counter)
        basic.pause(1000)
        led.plot(4, 4)
    } else {
        led.unplot(4, 4)
    }
})
