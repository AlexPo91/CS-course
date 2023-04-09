export interface BitGetter {
    get(byteIndex: number, bitIndex: number): number,
    set(byteIndex: number, bitIndex: number, value: number): void
}