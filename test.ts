// Initialize TFT Display
RBTFT18.init()

// Clear screen - replaces whole screen with a black rectangle
RBTFT18.clearScreen()

// Draw a single red pixel
RBTFT18.drawPixel(10, 10, Color.Red)
basic.pause(1000)

// Draw a straight blue line
RBTFT18.drawLine(0, 0, 100, 100, Color.Blue)
basic.pause(1000)

// Draw a yellow rectangle
RBTFT18.drawRectangle(0, 0, 100, 120, Color.Yellow)
basic.pause(1000)

// Draw a green circle
RBTFT18.drawCircle(50, 50, 50, Color.Green)
basic.pause(1000)

// Clear screen - replaces whole screen with a black rectangle
RBTFT18.clearScreen()

// Show white text with black background
RBTFT18.showString("I am your RB-TFT1.8!", 10, 10, 1, Color.White, Color.Black)
basic.pause(1000)

// Turn off display
RBTFT18.turnOff()
basic.pause(1000)

// Turn on display
RBTFT18.turnOn()
