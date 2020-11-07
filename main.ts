let z = 0
let x = 0
let j = 0
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        led.plot(index, 0)
        basic.pause(100)
    }
    for (let y = 0; y <= 3; y++) {
        led.plot(4, y)
        basic.pause(100)
    }
    z = 4
    for (let index = 0; index < 4; index++) {
        led.plot(z, 4)
        basic.pause(100)
        z = z - 1
    }
    x = 4
    for (let index = 0; index < 3; index++) {
        led.plot(0, x)
        basic.pause(100)
        x = x - 1
    }
    for (let i = 0; i <= 2; i++) {
        led.plot(i, 1)
        basic.pause(100)
    }
    for (let v = 0; v <= 2; v++) {
        led.plot(3, v)
        basic.pause(100)
    }
    j = 3
    for (let index = 0; index < 3; index++) {
        led.plot(j, 3)
        basic.pause(100)
        j = j - 1
    }
    for (let h = 0; h <= 3; h++) {
        led.plot(h, 2)
        basic.pause(100)
    }
})
