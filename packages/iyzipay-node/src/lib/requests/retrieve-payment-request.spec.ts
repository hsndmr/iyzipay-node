import { Locale } from '../models';
import { RetrievePaymentRequest } from './retrieve-payment-request';

describe('RetrievePaymentRequest', () => {
  let request: RetrievePaymentRequest;

  beforeEach(() => {
    request = new RetrievePaymentRequest();
    request.setLocale(Locale.TR);
    request.setConversationId('123456789');
    request.setPaymentId(1);
    request.setPaymentConversationId('123456789');
  });

  it('should get request data', () => {
    // Arrange & Act & Assert
    const expectedJsonObject = {
      locale: request.getLocale(),
      conversationId: request.getConversationId(),
      paymentId: request.getPaymentId(),
      paymentConversationId: request.getPaymentConversationId(),
    };

    expect(request.getRequestData()).toEqual(expectedJsonObject);
  });

  it('should generate PKI request string', () => {
    const str = `[locale=tr,conversationId=123456789,paymentId=1,paymentConversationId=123456789]`;

    expect(request.toPKIRequestString()).toEqual(str);
  });
});
