import {
  isRequestStringConvertible,
  RequestStringConvertible,
} from './request-string-convertible.interface';

describe('isRequestStringConvertible', () => {
  it('should return true for objects with toPKIRequestString method', () => {
    // Arrange
    const requestStringConvertibleObject: RequestStringConvertible = {
      toPKIRequestString: () => 'some string',
    };

    // Act & Assert
    expect(
      isRequestStringConvertible(requestStringConvertibleObject)
    ).toBeTruthy();
  });

  it('should return false for objects without toPKIRequestString method', () => {
    // Arrange
    const nonRequestStringConvertibleObject = {};

    // Act & Assert
    expect(
      isRequestStringConvertible(nonRequestStringConvertibleObject)
    ).toBeFalsy();
  });

  it('should return false for null', () => {
    // Arrange & Act & Assert
    expect(isRequestStringConvertible(null)).toBeFalsy();
  });

  it('should return false for undefined', () => {
    // Arrange & Act & Assert
    expect(isRequestStringConvertible(undefined)).toBeFalsy();
  });
});
