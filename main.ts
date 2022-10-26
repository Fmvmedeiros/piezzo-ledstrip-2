let HUE = 0
let valor = 0
let Som = 0
let Treshold = 711
let strip = neopixel.create(DigitalPin.P0, 278, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    while (true) {
        for (let index = 0; index < 16; index++) {
            Som = Som + pins.analogReadPin(AnalogPin.P1)
        }
        Som = Som / 16
        valor = Math.constrain(Math.map(Som - Treshold, 0, 1023 - Treshold, 0, 50), 0, 50)
        HUE = Math.constrain(Math.map(Som - Treshold, 0, 1023 - Treshold, 0, 360), 0, 360)
        strip.setPixelColor(0, neopixel.hsl(HUE, 255, valor))
        strip.shift(1)
        strip.show()
        led.plotBarGraph(
        Som,
        1023
        )
        basic.pause(2)
    }
})
