function showSmallNumber(num: number) {
    let im: Image;
    let dec: Image;
    if (num >= 0 && num <= 9) {
        numbers[num].showImage(0)
    } else if (num >= 10 && num <= 99) {
        im = numbers[num % 10]
        // copy the first digit in the first position
        dec = numbers[Math.idiv(num, 10)]
        // decimal digit
        for (let l = 0; l < 5; l++) {
            // copy the second digit to the decimals position
            for (let c = 0; c < 2; c++) {
                im.setPixel(c, l, dec.pixel(c + 3, l))
            }
        }
        im.showImage(0)
    } else {
        basic.clearScreen()
    }
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let δείκτη = 0; δείκτη < 10; δείκτη++) {
        showSmallNumber(δείκτη)
        basic.pause(1000)
    }
})
let numbers : Image[] = []
numbers = [images.createImage(`
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    `), images.createImage(`
    . . . . #
    . . . # #
    . . . . #
    . . . . #
    . . . . #
    `), images.createImage(`
    . . . # #
    . . . . #
    . . . . #
    . . . # .
    . . . # #
    `), images.createImage(`
    . . . # #
    . . . . #
    . . . # #
    . . . . #
    . . . # #
    `), images.createImage(`
    . . . # .
    . . . # .
    . . . # #
    . . . . #
    . . . . #
    `), images.createImage(`
    . . . # #
    . . . # .
    . . . . #
    . . . . #
    . . . # .
    `), images.createImage(`
    . . . # #
    . . . # .
    . . . # .
    . . . # #
    . . . # #
    `), images.createImage(`
    . . . # #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `), images.createImage(`
    . . . # #
    . . . # #
    . . . . .
    . . . # #
    . . . # #
    `), images.createImage(`
    . . . # #
    . . . # #
    . . . # #
    . . . . #
    . . . # #
    `)]
// for i in range(10):
//     showSmallNumber(i)
//     basic.pause(500)
for (let i = 0; i < 100; i++) {
    showSmallNumber(i)
    basic.pause(200)
}
basic.forever(function on_forever() {
    
})
