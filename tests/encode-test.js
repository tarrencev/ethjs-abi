import { assert } from 'chai';

import { encode } from '../src/encode';

describe('encode', () => {
    it('should correctly encode fn 1', () => {
        const res = encode('baz(uint32,bool)', [ 69, true ]);
        assert.ok(res === '0xcdcd77c000000000000000000000000000000000000000000000000000000000000000450000000000000000000000000000000000000000000000000000000000000001');
    });

    it('should correctly encode fn 2', () => {
        const res = encode('bar(real128x128[2])', [ 2.125, 8.5 ]);
        assert.ok(res === '0x3e27986000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000880000000000000000000000000000000');
    });
});
