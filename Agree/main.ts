let allAgree = false
input.onGesture(Gesture.SixG, function () {
    parties.setStatus(0)
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.A, function () {
    parties.setStatus(1)
    basic.showIcon(IconNames.LeftTriangle)
})
input.onGesture(Gesture.ScreenDown, function () {
    parties.setStatus(2)
    basic.showIcon(IconNames.Fabulous)
})
input.onButtonPressed(Button.B, function () {
    parties.setStatus(3)
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.AB, function () {
    parties.setStatus(4)
    basic.showIcon(IconNames.StickFigure)
})
basic.forever(function () {
    allAgree = true
    for (let value of parties.allPartyMembers()) {
        if (parties.statusOf(value) != parties.getStatus()) {
            allAgree = false
        }
    }
    if (allAgree) {
        basic.pause(1000)
        basic.showString("you WON")
    }
})
