import { BitGetter } from './interface'

export const createBitGetter = (bytes: Uint8Array): BitGetter => {

    const validate = (byteIndex: number, bitIndex: number): void => {
        if (byteIndex < 0 && byteIndex >= bytes.length) {
            throw new Error("Invalid byteIndex")
        }
        if (bitIndex < 0) {
            throw new Error('bitIndex should be a positive number')
        }
        if (bitIndex >= 8) {
            throw new Error('bitIndex should be less or equal 7')
        }
    }

    const get = (byteIndex: number, bitIndex: number): number => {
        validate(byteIndex, bitIndex)
        const byte = bytes[byteIndex];
        return Number((byte & (1 << bitIndex)) !== 0);
    }
    const set = (byteIndex: number, bitIndex: number, value: number): void => {
        validate(byteIndex, bitIndex)
        if (value === undefined) throw new Error('Value is missing')

        const mask = 1 << bitIndex;
        const newValue = value === 0 ? value & ~mask : value | mask;

        bytes[byteIndex] = newValue;
    }
    return {
        get,
        set
    }
}