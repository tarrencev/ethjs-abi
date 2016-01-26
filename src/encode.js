import { keccak_256 } from 'js-sha3';

export function encode(fnSignature, params) {
    const hash = `0x${ keccak_256(fnSignature).slice(0, 8) }`;
    return hash;
}
