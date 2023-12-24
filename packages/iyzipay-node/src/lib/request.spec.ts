import { Locale } from './models';
import { Request } from './request';

describe('Request', () => {
  let request: Request;

  beforeEach(() => {
    request = new Request();
  });

  it('should set and get locale', () => {
    // Arrange
    request.setLocale(Locale.EN);

    // Act & Assert
    expect(request.getLocale()).toBe(Locale.EN);
  });

  it('should set and get conversationId', () => {
    // Arrange
    request.setConversationId('123456');

    // Act & Assert
    expect(request.getConversationId()).toBe('123456');
  });

  it('should correctly create JSON object', () => {
    // Arrange
    request.setLocale(Locale.EN);
    request.setConversationId('123456');

    // Act
    const jsonObject = request.getRequestData();

    // Assert
    expect(jsonObject).toEqual({
      locale: Locale.EN,
      conversationId: '123456',
    });
  });

  it('should correctly create PKI request string', () => {
    // Arrange
    request.setLocale(Locale.EN);
    request.setConversationId('123456');

    // Act
    const requestString = request.toPKIRequestString();

    // Assert
    expect(requestString).toBe('[locale=en,conversationId=123456]');
  });
});
