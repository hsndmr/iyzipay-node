import { Options } from './options';

describe('Options', () => {
  let options: Options;

  beforeEach(() => {
    options = new Options();
  });

  it('should set and get apiKey', () => {
    // Arrange
    options.setApiKey('testApiKey');

    // Act & Assert
    expect(options.getApiKey()).toBe('testApiKey');
  });

  it('should set and get secretKey', () => {
    // Arrange
    options.setSecretKey('testSecretKey');

    // Act & Assert
    expect(options.getSecretKey()).toBe('testSecretKey');
  });

  it('should set and get baseUrl', () => {
    // Arrange
    options.setBaseUrl('http://testbaseurl.com');

    // Act & Assert
    expect(options.getBaseUrl()).toBe('http://testbaseurl.com');
  });
});
