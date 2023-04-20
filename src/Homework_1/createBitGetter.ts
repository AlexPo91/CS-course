import { BitGetter } from './interface';

export const createBitGetter = (bytes: Uint8Array): BitGetter => {
  const validate = (byteIndex: number, bitIndex: number): void => {
    if (byteIndex < 0 || byteIndex >= bytes.length) {
      throw new Error('Invalid byteIndex');
    }
    if (bitIndex < 0) {
      throw new Error('bitIndex should be a positive number');
    }
    if (bitIndex >= 8) {
      throw new Error('bitIndex should be less or equal 7');
    }
  };

  const get = (byteIndex: number, bitIndex: number): number => {
    validate(byteIndex, bitIndex);
    return Number((bytes[byteIndex] & (1 << bitIndex)) !== 0);
  };
  const set = (byteIndex: number, bitIndex: number, value: number): void => {
    validate(byteIndex, bitIndex);
    if (value === undefined) throw new Error('Value is missing');
    if (value !== 0 && value !== 1) throw new Error('Value is invalid. The value must be 0 or 1');

    const byte = bytes[byteIndex];
    const mask = 1 << bitIndex;
    bytes[byteIndex] = value === 0 ? byte & ~mask : byte | mask;
  };
  return {
    get,
    set,
  };
};
