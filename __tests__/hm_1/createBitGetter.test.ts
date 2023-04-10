import { createBitGetter } from "../../src/Homework_1/";

describe("Checking createBitGetter", () => {
    const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));
    it("Should return 1", () => {
        expect(bitGetter.get(0, 1)).toBe(1)
    })
    it("Should return 1", () => {
        expect(bitGetter.get(1, 1)).toBe(0)
    })

    bitGetter.set(0, 1, 1)

    it("Should return 0", () => {
        expect(bitGetter.get(0, 1)).toBe(1)
    })

    it("should throw an 'Invalid byteIndex' exception", () => {
        expect(() => bitGetter.get(3, 1)).toThrow('Invalid byteIndex')
    })
    it("should throw an 'bitIndex should be a positive number' exception", () => {
        expect(() => bitGetter.get(1, -1)).toThrow('bitIndex should be a positive number')
    })
    it("should throw an 'bitIndex should be less or equal 7' exception", () => {
        expect(() => bitGetter.get(1, 8)).toThrow('bitIndex should be less or equal 7')
    })
    it("should throw an 'Value is missing", () => {
        expect(() => bitGetter.set(1, 4)).toThrow('Value is missing')
    })
    it("should throw an 'Value is invalid. The value must be 0 or 1", () => {
        expect(() => bitGetter.set(1, 4, 3)).toThrow('Value is invalid. The value must be 0 or 1')
    })
    // console.log(bitGetter.get(0, 1)); // 1
    // console.log(bitGetter.get(1, 1)); // 0

    // console.log(bitGetter.set(0, 1, 1)); //
    // console.log(bitGetter.get(0, 1)); // 0
})