input.onGesture(Gesture.Shake, function () {
    parties.unicastString("hello", parties.randomPartyMember())
})
parties.onStringReceived(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
    basic.showNumber(parties.partySize())
})
