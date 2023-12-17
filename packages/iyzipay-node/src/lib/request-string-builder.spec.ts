import { RequestStringBuilder } from './request-string-builder';

describe('RequestStringBuilder', () => {
  it('should create an empty request string', () => {
    // Arrange
    const builder = RequestStringBuilder.create();

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[]');
  });

  it('should append key-value pairs', () => {
    // Arrange
    const builder = RequestStringBuilder.create().append('key', 'value');

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[key=value]');
  });

  it('should handle null values gracefully', () => {
    // Arrange
    const builder = RequestStringBuilder.create().append('key', null);

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[]');
  });

  it('should append convertible objects', () => {
    // Arrange
    const builder = RequestStringBuilder.create().append('key', {
      toPKIRequestString: () => 'mockValue',
    });

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[key=mockValue]');
  });
});
