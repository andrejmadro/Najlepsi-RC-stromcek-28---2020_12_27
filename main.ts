radio.onReceivedNumberDeprecated(function (receivedNumber) {
    Recieved = receivedNumber
})
let Recieved = 0
radio.setGroup(44)
Recieved = 0
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
let LEDs = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
LEDs.setBrightness(10)
LEDs.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
LEDs.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
LEDs.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
LEDs.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
LEDs.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
LEDs.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
LEDs.show()
basic.pause(100)
basic.forever(function () {
    LEDs = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
    if (Recieved == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        for (let index = 0; index < 4; index++) {
            LEDs.setBrightness(10)
            LEDs.show()
            LEDs.setBrightness(125)
            LEDs.setPixelColor(5, neopixel.colors(NeoPixelColors.White))
            LEDs.show()
            basic.pause(750)
            LEDs.setBrightness(10)
            LEDs.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
            LEDs.show()
            LEDs.setBrightness(125)
            LEDs.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
            LEDs.show()
            basic.pause(750)
            LEDs.setBrightness(10)
            LEDs.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
            LEDs.show()
            LEDs.setBrightness(125)
            LEDs.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
            LEDs.show()
            basic.pause(750)
            LEDs.setBrightness(10)
            LEDs.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            LEDs.show()
            LEDs.setBrightness(125)
            LEDs.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
            LEDs.show()
            basic.pause(750)
            LEDs.setBrightness(10)
            LEDs.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
            LEDs.show()
            LEDs.setBrightness(125)
            LEDs.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            LEDs.show()
            basic.pause(750)
            LEDs.setBrightness(10)
            LEDs.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
            LEDs.show()
            LEDs.setBrightness(125)
            LEDs.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            LEDs.show()
            basic.pause(750)
            LEDs.setBrightness(10)
            LEDs.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
            LEDs.show()
            basic.pause(750)
        }
    } else if (Recieved == 2) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . .
            # . # . .
            # # . . .
            `)
        LEDs.setBrightness(7)
        LEDs.showColor(neopixel.colors(NeoPixelColors.Red))
        LEDs.show()
        basic.pause(2000)
        LEDs.setBrightness(7)
        LEDs.showColor(neopixel.colors(NeoPixelColors.Green))
        LEDs.show()
        basic.pause(2000)
        LEDs.setBrightness(7)
        LEDs.showColor(neopixel.colors(NeoPixelColors.Blue))
        LEDs.show()
        basic.pause(2000)
        LEDs.setBrightness(7)
        LEDs.showColor(neopixel.colors(NeoPixelColors.Yellow))
        LEDs.show()
        basic.pause(2000)
        LEDs.setBrightness(7)
        LEDs.showColor(neopixel.colors(NeoPixelColors.Indigo))
        LEDs.show()
        basic.pause(2000)
        LEDs.setBrightness(7)
        LEDs.showColor(neopixel.colors(NeoPixelColors.Orange))
        LEDs.show()
        basic.pause(2000)
    } else if (Recieved == 3) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . . .
            # . . # .
            . # # . .
            `)
        LEDs = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
        LEDs.setBrightness(7)
        LEDs.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        LEDs.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
        LEDs.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        LEDs.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        LEDs.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        LEDs.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        LEDs.show()
        basic.pause(100)
    } else if (Recieved == 4) {
        LEDs.setBrightness(10)
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        LEDs.setBrightness(10)
        LEDs.showRainbow(1, 360)
        for (let index = 0; index < 50; index++) {
            LEDs.setBrightness(10)
            LEDs.rotate(1)
            LEDs.show()
            basic.pause(500)
        }
    } else if (Recieved == 5) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . . . . .
            . # # # .
            # . . . #
            `)
        LEDs.setBrightness(7)
        LEDs.show()
        basic.pause(100)
    }
})
