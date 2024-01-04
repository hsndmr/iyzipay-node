import { IyzipayHttpClient } from '../iyzipay-http-client';
import { CreatePaymentRequest } from '../requests';
import { PaymentMapper } from './mappers/payment-mapper';
import { PaymentResource } from './resources/payment-resource';
import { RetrievePaymentRequest } from '../requests';

export class Payment extends PaymentResource {
  public static async create(
    request: CreatePaymentRequest,
    client: IyzipayHttpClient
  ): Promise<Payment> {
    const response = await client.post(
      '/payment/auth',
      request.getRequestData(),
      {
        headers: client.getHttpHeaders(request),
      }
    );

    return new PaymentMapper(response.data).mapPayment(new Payment());
  }

  public static async retrieve(
    request: RetrievePaymentRequest,
    client: IyzipayHttpClient
  ): Promise<Payment> {
    const response = await client.post(
      '/payment/detail',
      request.getRequestData(),
      {
        headers: client.getHttpHeaders(request),
      }
    );

    return new PaymentMapper(response.data).mapPayment(new Payment());
  }
}
