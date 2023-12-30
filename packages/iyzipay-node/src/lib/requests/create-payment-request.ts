import { Request } from '../request';
import { RequestStringBuilder } from '../request-string-builder';
import { PaymentCard } from '../models/payment-card';
import { Buyer } from '../models/buyer';
import { Address } from '../models/address';
import { BasketItem } from '../models/basket-item';
import { FlexibleData } from '../flexible-data.interface';
import { RequestDataBuilder } from '../request-data-builder';
import { Currency, PaymentChannel, PaymentGroup } from '../models';

export class CreatePaymentRequest extends Request {
  private price: string;
  private paidPrice: string;
  private installment: number;
  private paymentChannel: PaymentChannel;
  private basketId: string;
  private paymentGroup: PaymentGroup;
  private reward: string;
  private paymentCard: PaymentCard;
  private buyer: Buyer;
  private shippingAddress: Address;
  private billingAddress: Address;
  private basketItems: BasketItem[];
  private paymentSource: string;
  private currency: Currency;
  private posOrderId: string;
  private connectorName: string;
  private plusInstallmentUsage: boolean;
  private callbackUrl: string;

  public getPrice(): string {
    return this.price;
  }

  public setPrice(price: string): void {
    this.price = price;
  }

  public getPaidPrice(): string {
    return this.paidPrice;
  }

  public setPaidPrice(paidPrice: string): void {
    this.paidPrice = paidPrice;
  }

  public getInstallment(): number {
    return this.installment;
  }

  public setInstallment(installment: number): void {
    this.installment = installment;
  }

  public getPaymentChannel(): string {
    return this.paymentChannel;
  }

  public setPaymentChannel(paymentChannel: PaymentChannel): void {
    this.paymentChannel = paymentChannel;
  }

  public getBasketId(): string {
    return this.basketId;
  }

  public setBasketId(basketId: string): void {
    this.basketId = basketId;
  }

  public getPaymentGroup(): string {
    return this.paymentGroup;
  }

  public setPaymentGroup(paymentGroup: PaymentGroup): void {
    this.paymentGroup = paymentGroup;
  }

  public getReward(): string {
    return this.reward;
  }

  public setReward(reward: string): void {
    this.reward = reward;
  }

  public getPaymentCard(): PaymentCard {
    return this.paymentCard;
  }

  public setPaymentCard(paymentCard: PaymentCard): void {
    this.paymentCard = paymentCard;
  }

  public getBuyer(): Buyer {
    return this.buyer;
  }

  public setBuyer(buyer: Buyer): void {
    this.buyer = buyer;
  }

  public getShippingAddress(): Address {
    return this.shippingAddress;
  }

  public setShippingAddress(shippingAddress: Address): void {
    this.shippingAddress = shippingAddress;
  }

  public getBillingAddress(): Address {
    return this.billingAddress;
  }

  public setBillingAddress(billingAddress: Address): void {
    this.billingAddress = billingAddress;
  }

  public getBasketItems(): BasketItem[] {
    return this.basketItems;
  }

  public setBasketItems(basketItems: BasketItem[]): void {
    this.basketItems = basketItems;
  }

  public getPaymentSource(): string {
    return this.paymentSource;
  }

  public setPaymentSource(paymentSource: string): void {
    this.paymentSource = paymentSource;
  }

  public getCurrency(): Currency {
    return this.currency;
  }

  public setCurrency(currency: Currency): void {
    this.currency = currency;
  }

  public getPosOrderId(): string {
    return this.posOrderId;
  }

  public setPosOrderId(posOrderId: string): void {
    this.posOrderId = posOrderId;
  }

  public getConnectorName(): string {
    return this.connectorName;
  }

  public setConnectorName(connectorName: string): void {
    this.connectorName = connectorName;
  }

  public getPlusInstallmentUsage(): boolean {
    return this.plusInstallmentUsage;
  }

  public setPlusInstallmentUsage(plusInstallmentUsage: boolean): void {
    this.plusInstallmentUsage = plusInstallmentUsage;
  }

  public getCallbackUrl(): string {
    return this.callbackUrl;
  }

  public setCallbackUrl(callbackUrl: string): void {
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
      .addArray(
        'basketItems',
        this.basketItems?.length > 0 ? this.basketItems : null
      )
      .add('paymentSource', this.paymentSource)
      .add('currency', this.currency)
      .add('posOrderId', this.posOrderId)
      .add('connectorName', this.connectorName)
      .add('plusInstallmentUsage', this.plusInstallmentUsage)
      .add('callbackUrl', this.callbackUrl)
      .get();
  }

  public toPKIRequestString(): string {
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
