import { Options } from './options';

describe('Options', () => {
  let options: Options;

  beforeEach(() => {
    options = new Options();
  });

  it('should set and get apiKey', () => {
    // Arrange
    options.apiKey = 'testApiKey';

    // Act & Assert
    expect(options.apiKey).toBe('testApiKey');
  });

  it('should set and get secretKey', () => {
    // Arrange
    options.secretKey = 'testSecretKey';

    // Act & Assert
    expect(options.secretKey).toBe('testSecretKey');
  });

  it('should set and get baseUrl', () => {
    // Arrange
    options.baseUrl = 'http://testbaseurl.com';

    // Act & Assert
    expect(options.baseUrl).toBe('http://testbaseurl.com');
  });
});
