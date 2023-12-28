import { ResponseData } from '../../response-data-manager';
import { Payment } from '../payment';
import { PaymentResourceMapper } from './payment-resource-mapper';

export class PaymentMapper extends PaymentResourceMapper {
  public mapPaymentFrom(payment: Payment, responseData: ResponseData): Payment {
    return this.mapResourceFrom(payment, responseData);
  }

  public mapPayment(payment: Payment) {
    return this.mapPaymentFrom(payment, this.responseData);
  }
}
