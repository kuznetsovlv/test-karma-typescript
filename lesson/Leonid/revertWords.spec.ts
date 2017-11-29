import { revertWords } from './revertWords';

describe('revertWords function ', () => {
    it('some tests', () => {
        expect(revertWords('s1tar3t 2 hellow')).toEqual('t1rat3s 2 wolleh');
        expect(revertWords('s1ta$%r3t 2 hel^low')).toEqual('t1ra$%t3s 2 wol^leh');
        expect(revertWords('s1tar3t 2   low5')).toEqual('t1rat3s 2   wol5');
        expect(revertWords('мама мыла рам2у')).toEqual('амам алым ума2р');
    });
});
