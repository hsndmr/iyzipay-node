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

  it('should handle an empty array', () => {
    // Arrange
    const builder = RequestStringBuilder.create();
    builder.appendArray('testKey', []);

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[testKey=[]]');
  });

  it('should append an array of strings', () => {
    // Arrange
    const builder = RequestStringBuilder.create();
    builder.appendArray('testKey', ['value1', 'value2']);

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[testKey=[value1, value2]]');
  });

  it('should ignore null values in the array', () => {
    // Arrange
    const builder = RequestStringBuilder.create();
    builder.appendArray('testKey', ['value1', null, 'value2']);

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[testKey=[value1, value2]]');
  });

  it('should append an array of RequestStringConvertible objects', () => {
    // Arrange
    const convertible1 = {
      toPKIRequestString: () => 'value1PKI',
    };

    const convertible2 = {
      toPKIRequestString: () => 'value2PKI',
    };
    const builder = RequestStringBuilder.create();
    builder.appendArray('testKey', [convertible1, convertible2]);

    // Act & Assert
    expect(builder.getRequestString()).toEqual(
      '[testKey=[value1PKI, value2PKI]]'
    );
  });

  it('should handle a mixed array', () => {
    // Arrange
    const convertible = {
      toPKIRequestString: () => 'value1PKI',
    };
    const builder = RequestStringBuilder.create();
    builder.appendArray('testKey', [convertible, 'value2']);

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[testKey=[value1PKI, value2]]');
  });

  it('should append price value correctly', () => {
    // Arrange
    const builder = RequestStringBuilder.create().appendPrice('price', '1');

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[price=1.0]');
  });

  it('should not append null price value', () => {
    // Arrange
    const builder = RequestStringBuilder.create().appendPrice('price', null);

    // Act & Assert
    expect(builder.getRequestString()).toEqual('[]');
  });
});
