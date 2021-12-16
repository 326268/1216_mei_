function led2 (y: number, speed: number) {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (list[y][index] == 1) {
                led.plot(index, y)
            } else {
                led.unplot(index, y)
            }
        basic.pause(speed)
    }
}
control.inBackground(function () {
    led2(0, 1000)
})
control.inBackground(function () {
    led2(2, 250)
})
control.inBackground(function () {
    led2(1, 500)
})
control.inBackground(function () {
    led2(3, 120)
})
control.inBackground(function () {
    led2(4, 50)
