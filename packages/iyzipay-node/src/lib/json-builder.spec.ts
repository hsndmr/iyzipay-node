import { JsonBuilder } from './json-builder';
import { RequestFormatter } from './request-formatter';

describe('JsonBuilder', () => {
  it('should create an empty JSON object', () => {
    // Arrange
    const jsonBuilder = JsonBuilder.create();

    // Act & Assert
    expect(jsonBuilder.getObject()).toEqual({});
  });

  it('should create JSON object from given object', () => {
    // Arrange
    const jsonObject = { key: 'value' };

    // Act
    const jsonBuilder = JsonBuilder.fromJsonObject(jsonObject);

    // Assert
    expect(jsonBuilder.getObject()).toEqual(jsonObject);
  });

  it('should add key-value pairs', () => {
    // Arrange
    const jsonBuilder = JsonBuilder.create();
    jsonBuilder.add('key1', 'value1').add('key2', 123);

    // Act & Assert
    expect(jsonBuilder.getObject()).toEqual({ key1: 'value1', key2: 123 });
  });

  it('should ignore null or undefined values', () => {
    // Arrange
    const jsonBuilder = JsonBuilder.create();

    // Act & Assert
    jsonBuilder.add('key1', null).add('key2', undefined);
    expect(jsonBuilder.getObject()).toEqual({});
  });

  it('should format and add price', () => {
    // Arrange
    jest
      .spyOn(RequestFormatter, 'formatPrice')
      .mockReturnValue('formatted-price');
    const jsonBuilder = JsonBuilder.create();
    jsonBuilder.addPrice('price', '100');

    // Act & Assert
    expect(jsonBuilder.getObject()).toEqual({ price: 'formatted-price' });
    expect(RequestFormatter.formatPrice).toHaveBeenCalledWith('100');
  });

  it('should add array of values', () => {
    // Arrange
    const jsonBuilder = JsonBuilder.create();
    jsonBuilder.addArray('array', [
      1,
      'two',
      null,
      {
        getJsonObject: () => ({}),
      },
    ]);

    // Act & Assert
    expect(jsonBuilder.getObject()).toEqual({ array: [1, 'two', null, {}] });
  });

  it('should encode JSON object to string', () => {
    // Arrange
    const jsonObject = { key: 'value' };

    // Act
    const encoded = JsonBuilder.jsonEncode(jsonObject);

    // Assert
    expect(encoded).toBe(JSON.stringify(jsonObject));
  });

  it('should decode JSON string to object', () => {
    // Arrange
    const jsonString = '{"key":"value"}';

    // Act
    const decoded = JsonBuilder.jsonDecode(jsonString);

    // Assert
    expect(decoded).toEqual(JSON.parse(jsonString));
  });
});
