import { Options } from '../options';
import { CreatePaymentRequest, RetrievePaymentRequest } from '../requests';
import {
  IyzipayHttpClientMock,
  assertResource,
} from '../iyzipay-http-client.mock';
import { Payment } from './payment';
import { IyzipayHttpClient } from '../iyzipay-http-client';

describe('Payment', () => {
  let options: Options;
  let client: IyzipayHttpClient;

  beforeEach(() => {
    options = new Options();
    client = new IyzipayHttpClientMock(options);
  });

  it('should create payment', async () => {
    // Arrange

    const request = new CreatePaymentRequest();

    // Act
    const payment = await Payment.create(request, client);

    // Assert
    assertResource(payment);
  });

  it('should retrieve payment', async () => {
    // Arrange
    const request = new RetrievePaymentRequest();

    // Act
    const payment = await Payment.retrieve(request, client);

    // Assert
    assertResource(payment);
  });
});
