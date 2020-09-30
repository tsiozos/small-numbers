def showSmallNumber(num: number):
    if num >= 0 and num <= 9:
        numbers[num].show_image(0)
    else:
        if num>=10 and num <= 99:
            im = numbers[num % 10]  #copy the first digit in the first position
            dec = numbers[num // 10]    #decimal digit
            for l in range(5):      #copy the second digit to the decimals position
                for c in range(2):
                    im.set_pixel(c, l, dec.pixel(c+3, l))
            im.show_image(0)
        else:
            basic.clear_screen()

numbers: List[Image] = []
numbers = [images.create_image("""
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    """),       # digit 0
    images.create_image("""
    . . . . #
    . . . # #
    . . . . #
    . . . . #
    . . . . #
    """),       # digit 1
    images.create_image("""
    . . . # #
    . . . . #
    . . . . #
    . . . # .
    . . . # #
    """),       # digit 2
    images.create_image("""
    . . . # #
    . . . . #
    . . . # #
    . . . . #
    . . . # #
    """),       # digit 3
    images.create_image("""
    . . . # .
    . . . # .
    . . . # #
    . . . . #
    . . . . #
    """),       # digit 4
    images.create_image("""
    . . . # #
    . . . # .
    . . . . #
    . . . . #
    . . . # .
    """),       # digit 5
    images.create_image("""
    . . . # #
    . . . # .
    . . . # .
    . . . # #
    . . . # #
    """),       # digit 6
    images.create_image("""
    . . . # #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    """),       # digit 7
    images.create_image("""
    . . . # #
    . . . # #
    . . . . .
    . . . # #
    . . . # #
    """),       # digit 8
    images.create_image("""
    . . . # #
    . . . # #
    . . . # #
    . . . . #
    . . . # #
    """)]       # digit 9


#for i in range(10):
#    showSmallNumber(i)
#    basic.pause(500)

for i in range(100):
    showSmallNumber(i)
    basic.pause(200)

