import { RequestFormatter } from './request-formatter';

describe('RequestFormatters', () => {
  it('should append zero given integer', () => {
    // Arrange
    const price = '100230';

    // Act
    const formattedPrice = RequestFormatter.formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('100230.0');
  });

  it('should not append zero given integer as decimal', () => {
    // Arrange
    const price = '100230.0';

    // Act
    const formattedPrice = RequestFormatter.formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('100230.0');
  });

  it('it should remain decimal given not contains zero', () => {
    // Arrange
    const price = '100230.23';

    // Act
    const formattedPrice = RequestFormatter.formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('100230.23');
  });

  it('it should remove zero given decimal', () => {
    // Arrange
    const price = '100230.23000';

    // Act
    const formattedPrice = RequestFormatter.formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('100230.23');
  });

  it('it should remain decimal given contains zero', () => {
    // Arrange
    const price = '100230.2300045';

    // Act
    const formattedPrice = RequestFormatter.formatPrice(price);

    // Assert
    expect(formattedPrice).toBe('100230.2300045');
  });
});
