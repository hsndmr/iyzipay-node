import { Request } from './request';
import { IyziAuthV2Generator } from './iyzi-auth-v2-generator';

describe('IyziAuthV2Generator', () => {
  it('should generate auth content default', () => {
    // Arrange
    const uri = 'https://api.iyzipay.com/Iyzilink/v2/Iyzilink/products/';
    const apiKey = 'test';
    const secretKey = 'test';
    const randomString = '123456789';
    const request = new Request();

    // Act
    const result = IyziAuthV2Generator.generateAuthContent(
      uri,
      apiKey,
      secretKey,
      randomString,
      request
    );

    // Assert
    const authContent =
      'YXBpS2V5OnRlc3QmcmFuZG9tS2V5OjEyMzQ1Njc4OSZzaWduYXR1cmU6Y2Y0Mjk5ZTQwYzZkZThmMzYzZGQyMWZiN2QzNjI3MjE2YTUxNjM2MDY1YTViOTM0YTMxODJiNTk0YjQ2ZjVhMA==';

    expect(result).toEqual(authContent);
  });

  it('should generate auth content parameters', () => {
    // Arrange
    const uri =
      'https://api.iyzipay.com/Iyzilink/v2/Iyzilink/products/?locale=tr&page=1&count=100&conversationId=123456';
    const apiKey = 'test';
    const secretKey = 'test';
    const randomString = '123456789';
    const request = new Request();

    // Act
    const result = IyziAuthV2Generator.generateAuthContent(
      uri,
      apiKey,
      secretKey,
      randomString,
      request
    );

    // Assert
    const authContent =
      'YXBpS2V5OnRlc3QmcmFuZG9tS2V5OjEyMzQ1Njc4OSZzaWduYXR1cmU6Nzg3NjFjMmJhZDQ0ZmE2MWI5NDNhZDIyYmM4NmJjNThjM2ZhMWQ3NDgwMDFjMTEzNTdlY2EzZjkwNGM0NGQxYg==';

    expect(result).toEqual(authContent);
  });

  it('should generate auth content parameters', () => {
    // Arrange
    const uri =
      'https://api.iyzipay.com/v2/subscription/customers/?page=1&count=10';
    const apiKey = 'test';
    const secretKey = 'test';
    const randomString = '123456789';
    const request = new Request();

    // Act
    const result = IyziAuthV2Generator.generateAuthContent(
      uri,
      apiKey,
      secretKey,
      randomString,
      request
    );

    // Assert
    const authContent =
      'YXBpS2V5OnRlc3QmcmFuZG9tS2V5OjEyMzQ1Njc4OSZzaWduYXR1cmU6NmYzODQwOTlhYWUzMjhmNzJkYWY5Y2RhYjEwNWViMzdmYjI5NjIwMjUxYzQ3YjRjNTgzZDc0OGQ5ZDBhYjc2NA==';

    expect(result).toEqual(authContent);
  });

  it('should generate auth content parameters', () => {
    // Arrange
    const uri = 'https://api.iyzipay.com/v2/subscription/initialize';
    const apiKey = 'test';
    const secretKey = 'test';
    const randomString = '123456789';
    const request = new Request();

    // Act
    const result = IyziAuthV2Generator.generateAuthContent(
      uri,
      apiKey,
      secretKey,
      randomString,
      request
    );

    // Assert
    const authContent =
      'YXBpS2V5OnRlc3QmcmFuZG9tS2V5OjEyMzQ1Njc4OSZzaWduYXR1cmU6YmM0NGIyZjRkZmI4ZGY3NDE0N2IxZjUyN2ZmNjM2NDQ0YzNiM2QzYTFmZjk3ZGNiMzM2NmJjMjkzZmFjZjI5OA==';

    expect(result).toEqual(authContent);
  });
});
