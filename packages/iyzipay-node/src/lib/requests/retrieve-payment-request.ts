import { Request } from '../request';
import { RequestDataBuilder } from '../request-data-builder';
import { RequestStringBuilder } from '../request-string-builder';

export class RetrievePaymentRequest extends Request {
  private paymentId;
  private paymentConversationId;

  public getPaymentId() {
    return this.paymentId;
  }

  public setPaymentId(paymentId) {
    this.paymentId = paymentId;
  }

  public getPaymentConversationId() {
    return this.paymentConversationId;
  }

  public setPaymentConversationId(paymentConversationId) {
    this.paymentConversationId = paymentConversationId;
  }

  public getRequestData() {
    return RequestDataBuilder.fromObject(super.getRequestData())
      .add('paymentId', this.getPaymentId())
      .add('paymentConversationId', this.getPaymentConversationId())
      .get();
  }

  public toPKIRequestString() {
    return RequestStringBuilder.create()
      .appendSuper(super.toPKIRequestString())
      .append('paymentId', this.getPaymentId())
      .append('paymentConversationId', this.getPaymentConversationId())
      .getRequestString();
  }
}
