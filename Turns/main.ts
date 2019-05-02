input.onButtonPressed(Button.AB, function () {
    parties.broadcastNumber(0)
    parties.setStatus(Math.randomRange(1, 3))
})
parties.onNumberReceived(function (receivedNumber) {
    parties.setStatus(receivedNumber)
})
input.onGesture(Gesture.Shake, function () {
    if (parties.getStatus() == 1) {
        parties.unicastNumber(Math.randomRange(1, 3), parties.randomPartyMember())
        parties.setStatus(0)
    }
})
input.onButtonPressed(Button.A, function () {
    if (parties.getStatus() == 2) {
        parties.unicastNumber(Math.randomRange(1, 3), parties.randomPartyMember())
        parties.setStatus(0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (parties.getStatus() == 3) {
        parties.unicastNumber(Math.randomRange(1, 3), parties.randomPartyMember())
        parties.setStatus(0)
    }
})
basic.forever(function () {
    if (parties.getStatus() == 1) {
        basic.showString("S")
    } else if (parties.getStatus() == 2) {
        basic.showString("A")
    } else if (parties.getStatus() == 3) {
        basic.showString("B")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
