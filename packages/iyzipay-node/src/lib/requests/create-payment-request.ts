import { Request } from '../request';
import { RequestStringBuilder } from '../request-string-builder';
import { PaymentCard } from '../models/payment-card';
import { Buyer } from '../models/buyer';
import { Address } from '../models/address';
import { BasketItem } from '../models/basket-item';
import { FlexibleData } from '../flexible-data.interface';
import { RequestDataBuilder } from '../request-data-builder';
import { Currency, PaymentChannel, PaymentGroup } from '../models';
import { OptionalType } from '../types';

export class CreatePaymentRequest extends Request {
  private price: OptionalType<string> = null;
  private paidPrice: OptionalType<string> = null;
  private installment: OptionalType<number>;
  private paymentChannel: OptionalType<PaymentChannel> = null;
  private basketId: OptionalType<string> = null;
  private paymentGroup: OptionalType<PaymentGroup> = null;
  private reward: OptionalType<string> = null;
  private paymentCard: OptionalType<PaymentCard> = null;
  private buyer: OptionalType<Buyer> = null;
  private shippingAddress: OptionalType<Address> = null;
  private billingAddress: OptionalType<Address> = null;
  private basketItems: OptionalType<BasketItem[]> = null;
  private paymentSource: OptionalType<string> = null;
  private currency: OptionalType<Currency> = null;
  private posOrderId: OptionalType<string> = null;
  private connectorName: OptionalType<string> = null;
  private plusInstallmentUsage: OptionalType<boolean> = null;
  private callbackUrl: OptionalType<string> = null;

  public getPrice(): OptionalType<string> {
    return this.price;
  }

  public setPrice(price: OptionalType<string>): void {
    this.price = price;
  }

  public getPaidPrice(): OptionalType<string> {
    return this.paidPrice;
  }

  public setPaidPrice(paidPrice: OptionalType<string>): void {
    this.paidPrice = paidPrice;
  }

  public getInstallment(): OptionalType<number> {
    return this.installment;
  }

  public setInstallment(installment: OptionalType<number>): void {
    this.installment = installment;
  }

  public getPaymentChannel(): OptionalType<PaymentChannel> {
    return this.paymentChannel;
  }

  public setPaymentChannel(paymentChannel: OptionalType<PaymentChannel>): void {
    this.paymentChannel = paymentChannel;
  }

  public getBasketId(): OptionalType<string> {
    return this.basketId;
  }

  public setBasketId(basketId: OptionalType<string>): void {
    this.basketId = basketId;
  }

  public getPaymentGroup(): OptionalType<PaymentGroup> {
    return this.paymentGroup;
  }

  public setPaymentGroup(paymentGroup: OptionalType<PaymentGroup>): void {
    this.paymentGroup = paymentGroup;
  }

  public getReward(): OptionalType<string> {
    return this.reward;
  }

  public setReward(reward: OptionalType<string>): void {
    this.reward = reward;
  }

  public getPaymentCard(): OptionalType<PaymentCard> {
    return this.paymentCard;
  }

  public setPaymentCard(paymentCard: OptionalType<PaymentCard>): void {
    this.paymentCard = paymentCard;
  }

  public getBuyer(): OptionalType<Buyer> {
    return this.buyer;
  }

  public setBuyer(buyer: OptionalType<Buyer>): void {
    this.buyer = buyer;
  }

  public getShippingAddress(): OptionalType<Address> {
    return this.shippingAddress;
  }

  public setShippingAddress(shippingAddress: OptionalType<Address>): void {
    this.shippingAddress = shippingAddress;
  }

  public getBillingAddress(): OptionalType<Address> {
    return this.billingAddress;
  }

  public setBillingAddress(billingAddress: OptionalType<Address>): void {
    this.billingAddress = billingAddress;
  }

  public getBasketItems(): OptionalType<BasketItem> {
    return this.basketItems;
  }

  public setBasketItems(basketItems: OptionalType<BasketItem>): void {
    this.basketItems = basketItems;
  }

  public getPaymentSource(): OptionalType<string> {
    return this.paymentSource;
  }

  public setPaymentSource(paymentSource: OptionalType<string>): void {
    this.paymentSource = paymentSource;
  }

  public getCurrency(): OptionalType<Currency> {
    return this.currency;
  }

  public setCurrency(currency: OptionalType<Currency>): void {
    this.currency = currency;
  }

  public getPosOrderId(): OptionalType<string> {
    return this.posOrderId;
  }

  public setPosOrderId(posOrderId: OptionalType<string>): void {
    this.posOrderId = posOrderId;
  }

  public getConnectorName(): OptionalType<string> {
    return this.connectorName;
  }

  public setConnectorName(connectorName: OptionalType<string>): void {
    this.connectorName = connectorName;
  }

  public getPlusInstallmentUsage(): OptionalType<boolean> {
    return this.plusInstallmentUsage;
  }

  public setPlusInstallmentUsage(
    plusInstallmentUsage: OptionalType<boolean>
  ): void {
    this.plusInstallmentUsage = plusInstallmentUsage;
  }

  public getCallbackUrl(): OptionalType<string> {
    return this.callbackUrl;
  }

  public setCallbackUrl(callbackUrl: OptionalType<string>): void {
    this.callbackUrl = callbackUrl;
  }

  public getRequestData(): FlexibleData {
    return RequestDataBuilder.create()
      .add('locale', this.getLocale())
      .add('conversationId', this.getConversationId())
      .add('price', this.price)
      .add('paidPrice', this.paidPrice)
      .add('installment', this.installment)
      .add('paymentChannel', this.paymentChannel)
      .add('basketId', this.basketId)
      .add('paymentGroup', this.paymentGroup)
      .add('reward', this.reward)
      .add(
        'paymentCard',
        this.paymentCard ? this.paymentCard.getRequestData() : null
      )
      .add('buyer', this.buyer ? this.buyer.getRequestData() : null)
      .add(
        'shippingAddress',
        this.shippingAddress ? this.shippingAddress.getRequestData() : null
      )
      .add(
        'billingAddress',
        this.billingAddress ? this.billingAddress.getRequestData() : null
      )
      .addArray('basketItems', this.basketItems ? this.basketItems : [])
      .add('paymentSource', this.paymentSource)
      .add('currency', this.currency)
      .add('posOrderId', this.posOrderId)
      .add('connectorName', this.connectorName)
      .add('plusInstallmentUsage', this.plusInstallmentUsage)
      .add('callbackUrl', this.callbackUrl)
      .get();
  }

  public toPKIRequestString(): OptionalType<string> {
    return RequestStringBuilder.create()
      .appendSuper(super.toPKIRequestString())
      .appendPrice('price', this.price)
      .appendPrice('paidPrice', this.paidPrice)
      .append('installment', this.installment)
      .append('paymentChannel', this.paymentChannel)
      .append('basketId', this.basketId)
      .append('paymentGroup', this.paymentGroup)
      .append('reward', this.reward)
      .append(
        'paymentCard',
        this.paymentCard ? this.paymentCard.toPKIRequestString() : null
      )
      .append('buyer', this.buyer ? this.buyer.toPKIRequestString() : null)
      .append(
        'shippingAddress',
        this.shippingAddress ? this.shippingAddress.toPKIRequestString() : null
      )
      .append(
        'billingAddress',
        this.billingAddress ? this.billingAddress.toPKIRequestString() : null
      )
      .appendArray(
        'basketItems',
        this.basketItems
          ? this.basketItems.map((item) => item.toPKIRequestString())
          : []
      )
      .append('paymentSource', this.paymentSource)
      .append('currency', this.currency)
      .append('posOrderId', this.posOrderId)
      .append('connectorName', this.connectorName)
      .append('plusInstallmentUsage', this.plusInstallmentUsage)
      .append('callbackUrl', this.callbackUrl)
      .getRequestString();
  }
}
