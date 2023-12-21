import { Request } from './request';

describe('Request', () => {
  let request: Request;

  beforeEach(() => {
    request = new Request();
  });

  it('should set and get locale', () => {
    // Arrange
    request.setLocale('en-US');

    // Act & Assert
    expect(request.getLocale()).toBe('en-US');
  });

  it('should set and get conversationId', () => {
    // Arrange
    request.setConversationId('123456');

    // Act & Assert
    expect(request.getConversationId()).toBe('123456');
  });

  it('should correctly create JSON object', () => {
    // Arrange
    request.setLocale('en-US');
    request.setConversationId('123456');

    // Act
    const jsonObject = request.getRequestData();

    // Assert
    expect(jsonObject).toEqual({
      locale: 'en-US',
      conversationId: '123456',
    });
  });

  it('should correctly create PKI request string', () => {
    // Arrange
    request.setLocale('en-US');
    request.setConversationId('123456');

    // Act
    const requestString = request.toPKIRequestString();

    // Assert
    expect(requestString).toBe('[locale=en-US,conversationId=123456]');
  });
});
