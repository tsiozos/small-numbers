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
//  digit 0
//  digit 1
//  digit 2
//  digit 3
//  digit 4
//  digit 5
//  digit 6
//  digit 7
//  digit 8
//  digit 9
// for i in range(10):
//     showSmallNumber(i)
//     basic.pause(500)
for (let i = 0; i < 100; i++) {
    showSmallNumber(i)
    basic.pause(200)
}
