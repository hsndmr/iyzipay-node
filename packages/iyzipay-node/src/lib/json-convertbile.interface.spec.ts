import {
  isJsonConvertible,
  JsonConvertible,
} from './json-convertbile.interface';

describe('isJsonConvertible', () => {
  it('should return true for objects with getJsonObject and toJsonString methods', () => {
    // Arrange
    const jsonConvertibleObject: JsonConvertible = {
      getJsonObject: () => ({}),
      toJsonString: () => '{}',
    };

    // Act & Assert
    expect(isJsonConvertible(jsonConvertibleObject)).toBeTruthy();
  });

  it('should return false for objects without getJsonObject and toJsonString methods', () => {
    // Arrange
    const nonJsonConvertibleObject = {};

    // Act & Assert
    expect(isJsonConvertible(nonJsonConvertibleObject)).toBeFalsy();
  });

  it('should return true for objects with only getJsonObject method', () => {
    // Arrange
    const partialJsonConvertibleObject = {
      getJsonObject: () => ({}),
    };

    // Act & Assert
    expect(isJsonConvertible(partialJsonConvertibleObject)).toBeTruthy();
  });

  it('should return true for objects with only toJsonString method', () => {
    // Arrange
    const partialJsonConvertibleObject = {
      toJsonString: () => '{}',
    };

    // Act & Assert
    expect(isJsonConvertible(partialJsonConvertibleObject)).toBeTruthy();
  });
});
