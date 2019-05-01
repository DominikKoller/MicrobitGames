// Auto-generated. Do not edit.
declare namespace parties {

    /**
     * Set your own status, for others to see.
     */
    //% weight=60
    //% blockId=set_status block="Set my status to %s" shim=parties::setStatus
    function setStatus(s: number): void;

    /**
     * Your own current status.
     */
    //% weight=60
    //% blockId=get_status block="my status" shim=parties::getStatus
    function getStatus(): int32;

    /**
     * Filters out old entries in the table
     * Also call at HEARTBEAT_FREQUENCY from TS
     */
    //% shim=parties::filterTable
    function filterTable(): void;

    /**
     * Read a packet from the queue of received packets and react accordingly
     */
    //% shim=parties::receiveData
    function receiveData(): void;

    /** 
     * To be called at Heartbeat Frequency
     */
    //% shim=parties::sendHeartbeat
    function sendHeartbeat(): void;

    /**
     * Send a string to all micro:bits in the party.
     */
    //% weight=60
    //% blockId=party_broadcast_string block="Send %message to all party members" shim=parties::broadcastString
    function broadcastString(message: string): void;

    /**
     * Send a string to the micro:bit with the specified address.
     * duplicate to TS because we cannot use PartyMember type as address.
     */
    //% shim=parties::unicastStringAddress
    function unicastStringAddress(message: string, destAddress: uint32): void;

    /**
     * Send a number to all micro:bits in the party.
     */
    //% weight=60
    //% blockId=party_broadcast_number block="Send %value to all party members" shim=parties::broadcastNumber
    function broadcastNumber(number: number): void;

    /**
     * Send a number to the micro:bit with the specified address
     * duplicate to TS because we cannot use PartyMember type as address.
     */
    //% shim=parties::unicastNumberAddress
    function unicastNumberAddress(number: number, destAddress: number): void;

    /**
     * Use this only to call receiveData from Typescript
     * (workaround, cannot figure out how to pass c++ function to registerWithDal)
     * Note: Only one function can be registered at once, so the radio module
     * will have to be disabled.
     */
    //% shim=parties::onDataReceived
    function onDataReceived(body: () => void): void;

    /**
     * Use as frequency to call sendHeartbeat
     */
    //% shim=parties::getHeartbeatFrequency
    function getHeartbeatFrequency(): int32;

    /**
     * Numer of Party Members
     */
    //% weight=40
    //% blockId=party_size block="party size" shim=parties::partySize
    function partySize(): int32;

    /**
     * Get the address of the party member at the given index
     * This is a workaround as we can neither pass lists nor structs to TS
     */
    //% shim=parties::addressOfPartyMember
    function addressOfPartyMember(i: number): uint32;

    /**
     * Get the status of the party member at the given index
     * This is a workaround as we can neither pass lists nor structs to TS
     */
    //% shim=parties::statusOfPartyMember
    function statusOfPartyMember(i: number): int32;

    /**
     * For TS to check whether there is a new payload to react to
     */
    //% shim=parties::receivedPayloadType
    function receivedPayloadType(): PayloadType;

    /**
     * Get the received string
     */
    //% shim=parties::receivedStringPayload
    function receivedStringPayload(): string;

    /**
     * Get the received number
     */
    //% shim=parties::receivedNumberPayload
    function receivedNumberPayload(): int32;
}

// Auto-generated. Do not edit. Really.
