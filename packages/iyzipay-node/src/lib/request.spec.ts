import { Request } from './request';

describe('Request', () => {
  let request: Request;

  beforeEach(() => {
    request = new Request();
  });

  it('should set and get locale', () => {
    // Arrange
    request.locale = 'en-US';

    // Act & Assert
    expect(request.locale).toBe('en-US');
  });

  it('should set and get conversationId', () => {
    // Arrange
    request.conversationId = '123456';

    // Act & Assert
    expect(request.conversationId).toBe('123456');
  });

  it('should correctly create JSON object', () => {
    // Arrange
    request.locale = 'en-US';
    request.conversationId = '123456';

    // Act
    const jsonObject = request.getJsonObject();

    // Assert
    expect(jsonObject).toEqual({
      locale: 'en-US',
      conversationId: '123456',
    });
  });

  it('should correctly create PKI request string', () => {
    // Arrange
    request.locale = 'en-US';
    request.conversationId = '123456';

    // Act
    const requestString = request.toPKIRequestString();

    // Assert
    expect(requestString).toBe('[locale=en-US,conversationId=123456]');
  });
});
