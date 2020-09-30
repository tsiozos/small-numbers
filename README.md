# BBC Micro:bit : How to display two small digits in the led screen in MakeCode Python
## A semi-advanced image object tutorial for MakeCode Python

![](/microbit2digits.png?raw=true)

**ATTN: this is a MakeCode Python (or Static Python) project. This code will not run in MicroPython without changes**


BBC Micro:bit is an excellent educational tool. The MakeCode platform makes it appropriate for beginners (blocks) and advanced (with TypeScript and static Python) programmers alike. The MakeCode platform translates the commands to machine code for fastest execution and your final program is 14 times faster than "MicroPython for Micro:bit".
The device's LED screen can display a single large digit or scroll characters from right to left.
This little project is a simple way to display two digits on the LED screen.


## How it works
We define an array of image objects called "numbers" that contains the single digits 0-9 at the corresponding positions.

```python
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
      etc.
```
Notice that every image is defined (in MakeCode parlance) as a 25 char string. It's aligned as a 5x5 matrix for visibility.
Dots (.) represent an off led and pounds (#) an on led.
When you define an image object like this it is stored off-screen in the Micro:bit RAM (almost 8 Kb).
Here's a definition of an image that will light up the center led at (1,2) when copied to the led screen.
```
imobj = images.create.image("""
  . . . . .
  . . # . .
  . . . . .
  . . . . .
  . . . . .
  """
```
To copy the image to the led screen use the method `imobj.show_image(0)`. It will be copied to column 0 (leftmost) of the led screen.
Image objects can be manipulated with image methods. Some of these are:
```
imobj.show_image(0) to display the image object at the led screen column 0 (leftmost column). Images are always drawn at row 0 (topmost).
imobj.pixel(2,3)  to read the image object's led at position x=2, y=3. Returns True if it's on, False if it's off.
imobj.set_pixel(0,4,True) to set the image object's led at on. Use False as the third parameter to turn it off.
```
You can view all of the image object's methods in the MakeCode Python editor by writing the object's name and pressing the dot (.) to activate the auto-complete feature. A list of methods shows with minimal documentation.

## How to blend (combine) two image objects for display.
To display a two digit number like 54 we need to take the image of digit '4' from the array we defined and copy the image of digit '5' scrolled 3 leds to the left. Then copy the final image to the led screen.
Function showSmallNumber does exactly that:
```
def showSmallNumber(num: number):       # a number in the 0-99 range is sent to the function. No negatives allowed.
    if num >= 0 and num <= 9:           # if it's a single digit number just display the digit
        numbers[num].show_image(0)
    else:
        if num>=10 and num <= 99:       # a double digit number is split in two digits
            im = numbers[num % 10]      # copy the first digit in the ones position
            dec = numbers[num // 10]    # extract the tens digit
            for l in range(5):          # copy the second digit to the tens position
                for c in range(2):
                    im.set_pixel(c, l, dec.pixel(c+3, l))
            im.show_image(0)            # copy the image object to the led screen. It's instant don't worry about speed
        else:
            basic.clear_screen()        # if number is outside the [0,99] range do nothing
```
This concludes this little tutorial. Have a nice day.

Thanos Siozos

PS: if you try to display this code in the Blocks editor you'll see lots of blocks titled 'python code'. This is normal as there are no blocks for the image object's methods. Just use it in Python or TypeScript mode.


> Open this page at [https://tsiozos.github.io/small-numbers/](https://tsiozos.github.io/small-numbers/)
