import { Options } from '../options';
import { CreatePaymentRequest } from '../requests';
import {
  IyzipayHttpClientMock,
  assertResource,
} from '../iyzipay-http-client.mock';
import { Payment } from './payment';

describe('Payment', () => {
  it('should create payment', async () => {
    // Arrange
    const options = new Options();
    const client = new IyzipayHttpClientMock(options);

    const request = new CreatePaymentRequest();

    // Act
    const payment = await Payment.create(request, client);

    // Assert
    assertResource(payment);
  });
});
