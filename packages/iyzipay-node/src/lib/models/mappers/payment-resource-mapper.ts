import { PaymentResource } from '../resources/payment-resource';
import { IyzipayResourceMapper } from './iyzipay-resource-mapper';

export class PaymentResourceMapper extends IyzipayResourceMapper {
  public mapResourceFrom(
    resource: PaymentResource,
    responseData
  ): PaymentResource {
    super.mapResourceFrom(resource, responseData);

    return resource;
  }
}
