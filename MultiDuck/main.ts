input.onButtonPressed(Button.AB, function () {
    let someone_has_the_duck =
        parties.allPartyMembers().some(m => m.status == 1);

    if (!(someone_has_the_duck)) {
        parties.setStatus(1)
        basic.showIcon(IconNames.Duck)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (parties.getStatus() == 1) {
        parties.unicastString("DUCK", parties.randomPartyMember())
        parties.setStatus(0)
        basic.clearScreen()
    }
})
parties.onStringReceived(function (receivedString) {
    if (receivedString == "DUCK") {
        parties.setStatus(1)
        basic.showIcon(IconNames.Duck)
    }
})
