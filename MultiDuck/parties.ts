/**
 * Radio communication for groups
 */
//% color=#00d3ea weight=100 icon="\uf2b5"
namespace parties {

    export class PartyMember {
        public constructor (public status: number, public address: number) {}
    }

    let stringCallback: (s: string) => void = () => {};
    let numberCallback: (n: number) => void = () => {};

    /**
     * Registers code to run when the radio receives a string in the party
     */
    //% block="on string received"
    //% blockId=party_on_string
    //% draggableParameters=reporter
    export function onStringReceived(c: (receivedString: string) => void) {
        stringCallback = c;
    }

    /**
     * Registers code to run when the radio receives a number in the party
     */
    //% block="on number received"
    //% blockId=party_on_number
    //% draggableParameters=reporter
    export function onNumberReceived(cb: (receivedNo: number) => void) {
        numberCallback = cb;
    }

    //% block
    export function joinParty(name: string) { }

    /**
     * A list of all party members
     */
    //% weight=60
    //% blockId=all_party_members block="all party members"
    export function allPartyMembers(): PartyMember[] {
        let result = [];
        for(let i=0; i < parties.partySize(); i++){
            result.push( new PartyMember(
                parties.statusOfPartyMember(i), 
                parties.addressOfPartyMember(i)
            ));
        }
        return result;
    }

    /**
     * Random Party Member
     */
    //% weight=60
    //% blockId=random_party_member block="random party member"
    export function randomPartyMember(): PartyMember {
        let i = Math.randomRange(0, parties.partySize()-1);
        return new PartyMember(
            statusOfPartyMember(i),
            addressOfPartyMember(i)
            );
    }

    //% block="status of %member"
    //% blockId=status_of
    export function statusOf(member: PartyMember): number {
        return member.status;
    }

    /**
     * Send a string to the micro:bit with the specified address.
     */
    //% weight=60
    //% blockId=party_unicast_string block="Send %message to %destAddress"
    export function unicastString(message: string, member: PartyMember){
        unicastStringAddress(message, member.address);
    }

    /**
     * Send a number to the micro:bit with the specified address
     */
    //% weight=60
    //% blockId=party_unicast_number block="Send %number to %destAddress"
    export function unicastNumber(message: number, member: PartyMember){
        unicastNumberAddress(message, member.address);
    }

    // basic.forever will call inBackground with while(true) and basic.pause(20)
    // using control.inBackground to avoid that
    // see https://makecode.microbit.org/device/reactive
    control.inBackground(function () {
        while (true) {
            parties.filterTable();
            parties.sendHeartbeat();
            basic.pause(parties.getHeartbeatFrequency());
        }
    });

    parties.onDataReceived(() => {
        parties.receiveData();
        switch(parties.receivedPayloadType()){
            case PayloadType.STRING:
                stringCallback(parties.receivedStringPayload());
                break;
            case PayloadType.NUM:
                numberCallback(parties.receivedNumberPayload());
                break;

            default: break;
        }
    });

}
