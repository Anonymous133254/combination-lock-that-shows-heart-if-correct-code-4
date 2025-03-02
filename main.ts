input.onButtonPressed(Button.A, function () {
    Number2 += 1
    if (Number2 == 10) {
        Number2 = 0
    }
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.B, function () {
    if (Number2 == 4) {
        basic.showIcon(IconNames.Heart)
        Number2 = 0
    } else {
        basic.showIcon(IconNames.No)
        Number2 = 0
    }
})
let Number2 = 0
Number2 = 0
basic.showNumber(Number2)
