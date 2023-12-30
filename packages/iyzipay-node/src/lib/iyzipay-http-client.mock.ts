import { IyzipayHttpClient } from './iyzipay-http-client';
import { IyzipayResource } from './models/resources/iyzipay-resource';

jest.mock('./iyzipay-http-client');

const IyzipayHttpClientMock = IyzipayHttpClient as jest.Mocked<
  typeof IyzipayHttpClient
>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//  @ts-expect-error
IyzipayHttpClientMock.prototype.post.mockResolvedValue({
  data: {
    status: 'success',
    errorCode: null,
    errorMessage: null,
    errorGroup: null,
    locale: 'tr',
    systemTime: 1458545234852,
    conversationId: '123456',
  },
});

const assertResource = function (resource: IyzipayResource) {
  expect(resource.getStatus()).toBe('success');
  expect(resource.getErrorCode()).toBeNull();
  expect(resource.getErrorMessage()).toBeNull();
  expect(resource.getErrorGroup()).toBeNull();
  expect(resource.getLocale()).toBe('tr');
  expect(resource.getSystemTime()).toBe(1458545234852);
  expect(resource.getConversationId()).toBe('123456');
};

export { IyzipayHttpClientMock, assertResource };
