input.onGesture(Gesture.Shake, function () {
    if (parties.getStatus() == 1) {
        parties.unicastString("DUCK", parties.randomPartyMember())
        parties.setStatus(0)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    parties.setStatus(1)
    basic.showIcon(IconNames.Duck)
})
parties.onStringReceived(function (receivedString) {
    if (receivedString == "DUCK") {
        parties.setStatus(1)
        basic.showIcon(IconNames.Duck)
    }
})
