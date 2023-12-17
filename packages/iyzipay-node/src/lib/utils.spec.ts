import { isNotNullOrUndefined } from './utils';

describe('Utils', () => {
  describe('isNotNullOrUndefined', () => {
    it('should return true for non-null and non-undefined values', () => {
      // Arrange & Act & Assert
      expect(isNotNullOrUndefined(0)).toBeTruthy();
      expect(isNotNullOrUndefined('')).toBeTruthy();
      expect(isNotNullOrUndefined(false)).toBeTruthy();
      expect(isNotNullOrUndefined({})).toBeTruthy();
      expect(isNotNullOrUndefined([])).toBeTruthy();
    });

    it('should return false for null', () => {
      // Arrange & Act & Assert
      expect(isNotNullOrUndefined(null)).toBeFalsy();
    });

    it('should return false for undefined', () => {
      // Arrange & Act & Assert
      expect(isNotNullOrUndefined(undefined)).toBeFalsy();
    });
  });
});
