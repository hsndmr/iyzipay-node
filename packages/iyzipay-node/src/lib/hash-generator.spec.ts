import { HashGenerator } from './hash-generator';
import { Request } from './request';

jest.mock('./request', () => {
  return {
    Request: jest.fn().mockImplementation(() => {
      return {
        toPKIRequestString: () => 'mockedRequestString',
      };
    }),
  };
});

describe('HashGenerator', () => {
  const apiKey = 'testApiKey';
  const secretKey = 'testSecretKey';
  const randomString = 'testRandomString';
  const request = new Request();

  it('should generate a non-empty hash', () => {
    // Arrange & Act
    const hash = HashGenerator.generateHash(
      apiKey,
      secretKey,
      randomString,
      request
    );

    // Assert
    expect(hash).toBeTruthy();
    expect(typeof hash).toBe('string');
    expect(hash.length).toBeGreaterThan(0);
  });

  it('should generate the same hash for the same inputs', () => {
    // Arrange & Act
    const hash1 = HashGenerator.generateHash(
      apiKey,
      secretKey,
      randomString,
      request
    );
    const hash2 = HashGenerator.generateHash(
      apiKey,
      secretKey,
      randomString,
      request
    );

    // Assert
    expect(hash1).toBe(hash2);
  });

  it('should generate different hashes for different inputs', () => {
    // Arrange & Act
    const hash1 = HashGenerator.generateHash(
      apiKey,
      secretKey,
      randomString,
      request
    );

    const differentRandomString = 'differentRandomString';
    const hash2 = HashGenerator.generateHash(
      apiKey,
      secretKey,
      differentRandomString,
      request
    );

    // Assert
    expect(hash1).not.toBe(hash2);
  });

  it('should correctly use the request object to generate the hash', () => {
    // Arrange & Act
    const hash = HashGenerator.generateHash(
      apiKey,
      secretKey,
      randomString,
      request
    );
    const expectedHash = 'nzDp1mEoI5dZXFzGwm+WFgU3rbM=';

    // Assert
    expect(hash).toBe(expectedHash);
  });
});
