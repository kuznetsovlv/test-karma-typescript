import { summator } from './summator';
describe('summator function ', () => {
  it('should return 0', () => {
      expect(summator()).toEqual(0);
  });

  it('should return 1', () => {
      expect(summator(1)).toEqual(1);
  });

  it('should return 12', () => {
      expect(summator(2, 3, 7)).toEqual(12);
  });

  it('should return 12', () => {
      expect(summator('2', '3', '7')).toEqual(12);
  });
});
