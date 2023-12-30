import { IyzipayResource } from '../resources/iyzipay-resource';
import { IyzipayResourceMapper } from './iyzipay-resource-mapper';

describe('IyzipayResourceMapper', () => {
  it('should map resource from response data', () => {
    // Arrange
    const data = {
      status: 'status',
      conversationId: 'conversationId',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      errorGroup: 'errorGroup',
      locale: 'locale',
      systemTime: 'systemTime',
    };
    const mapper = new IyzipayResourceMapper(data);

    // Act
    const resource = mapper.mapResource(new IyzipayResource());

    // Assert
    expect(resource).toBeInstanceOf(IyzipayResource);
    expect(resource.getStatus()).toBe('status');
    expect(resource.getConversationId()).toBe('conversationId');
    expect(resource.getErrorCode()).toBe('errorCode');
    expect(resource.getErrorMessage()).toBe('errorMessage');
    expect(resource.getErrorGroup()).toBe('errorGroup');
    expect(resource.getLocale()).toBe('locale');
    expect(resource.getSystemTime()).toBe('systemTime');
  });

  it('should map resource for null data', () => {
    // Arrange
    const mapper = new IyzipayResourceMapper({});

    // Act
    const resource = mapper.mapResource(new IyzipayResource());

    // Assert
    expect(resource).toBeInstanceOf(IyzipayResource);
    expect(resource.getStatus()).toBeNull();
    expect(resource.getConversationId()).toBeNull();
    expect(resource.getErrorCode()).toBeNull();
    expect(resource.getErrorMessage()).toBeNull();
    expect(resource.getErrorGroup()).toBeNull();
    expect(resource.getLocale()).toBeNull();
    expect(resource.getSystemTime()).toBeNull();
  });
});
