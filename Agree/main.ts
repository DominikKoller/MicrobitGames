let allAgree = false
input.onGesture(Gesture.Shake, function () {
    parties.setStatus(0)
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.A, function () {
    parties.setStatus(1)
    basic.showIcon(IconNames.LeftTriangle)
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
