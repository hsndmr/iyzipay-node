import { isNotNullOrUndefined, substr, uniqid } from './utils';

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
  describe('substr function', () => {
    it('should extract a substring from start to specific length', () => {
      // Arrange & Act & Assert
      expect(substr('Hello, world!', 0, 5)).toBe('Hello');
    });

    it('should handle negative start index', () => {
      // Arrange & Act & Assert
      expect(substr('Hello, world!', -6)).toBe('world!');
    });

    it('should handle negative length', () => {
      // Arrange & Act & Assert
      expect(substr('Hello, world!', 7, -2)).toBe('worl');
    });

    it('should extract till the end if length is not provided', () => {
      // Arrange & Act & Assert
      expect(substr('Hello, world!', 7)).toBe('world!');
    });

    it('should return an empty string for out-of-range index', () => {
      // Arrange & Act & Assert
      expect(substr('Hello, world!', 20)).toBe('');
    });

    it('should return an empty string for excessive negative length', () => {
      // Arrange & Act & Assert
      expect(substr('Hello, world!', 5, -20)).toBe('');
    });
  });

  describe('uniqid function', () => {
    it('should generate a unique ID', () => {
      // Arrange & Act & Assert
      expect(uniqid()).toHaveLength(16);
    });

    it('should apply the optional prefix correctly', () => {
      // Arrange
      const prefix = 'test_';

      // Act
      const id = uniqid(prefix);

      // Assert
      expect(id.startsWith(prefix)).toBeTruthy();
    });
  });
});
