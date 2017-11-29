import { getUnique, primitive } from './getUnique';

describe('getUnique function ', () => {
  it('should return [1, 2, 3, 4] ', () => {
      const result: primitive[] = getUnique(1, 1, 2, 3, 4);
      expect(result).toEqual([1, 2, 3, 4]);
  });
});