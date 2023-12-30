import { OptionalType } from '../../types';
import { PaymentItem } from '../payment-item';
import { IyzipayResource } from './iyzipay-resource';

export class PaymentResource extends IyzipayResource {
  private price: OptionalType<string> = null;
  private paidPrice: OptionalType<string> = null;
  private installment: OptionalType<number> = null;
  private currency: OptionalType<string> = null;
  private paymentId: OptionalType<string> = null;
  private paymentStatus: OptionalType<string> = null;
  private fraudStatus: OptionalType<number> = null;
  private merchantCommissionRate: OptionalType<number> = null;
  private merchantCommissionRateAmount: OptionalType<number> = null;
  private iyziCommissionRateAmount: OptionalType<number> = null;
  private iyziCommissionFee: OptionalType<number> = null;
  private cardType: OptionalType<string> = null;
  private cardAssociation: OptionalType<string> = null;
  private cardFamily: OptionalType<string> = null;
  private cardToken: OptionalType<string> = null;
  private cardUserKey: OptionalType<string> = null;
  private binNumber: OptionalType<string> = null;
  private basketId: OptionalType<string> = null;
  private paymentItems: OptionalType<PaymentItem[]> = null;
  private connectorName: OptionalType<string> = null;
  private authCode: OptionalType<string> = null;
  private phase: OptionalType<string> = null;
  private lastFourDigits: OptionalType<string> = null;
  private posOrderId: OptionalType<string> = null;

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

  public getCurrency(): OptionalType<string> {
    return this.currency;
  }

  public setCurrency(currency: OptionalType<string>): void {
    this.currency = currency;
  }

  public getPaymentId(): OptionalType<string> {
    return this.paymentId;
  }

  public setPaymentId(paymentId: OptionalType<string>): void {
    this.paymentId = paymentId;
  }

  public getPaymentStatus(): OptionalType<string> {
    return this.paymentStatus;
  }

  public setPaymentStatus(paymentStatus: OptionalType<string>): void {
    this.paymentStatus = paymentStatus;
  }

  public getFraudStatus(): OptionalType<number> {
    return this.fraudStatus;
  }

  public setFraudStatus(fraudStatus: OptionalType<number>): void {
    this.fraudStatus = fraudStatus;
  }

  public getMerchantCommissionRate(): OptionalType<number> {
    return this.merchantCommissionRate;
  }

  public setMerchantCommissionRate(
    merchantCommissionRate: OptionalType<number>
  ): void {
    this.merchantCommissionRate = merchantCommissionRate;
  }

  public getMerchantCommissionRateAmount(): OptionalType<number> {
    return this.merchantCommissionRateAmount;
  }

  public setMerchantCommissionRateAmount(
    merchantCommissionRateAmount: OptionalType<number>
  ): void {
    this.merchantCommissionRateAmount = merchantCommissionRateAmount;
  }

  public getIyziCommissionRateAmount(): OptionalType<number> {
    return this.iyziCommissionRateAmount;
  }

  public setIyziCommissionRateAmount(
    iyziCommissionRateAmount: OptionalType<number>
  ): void {
    this.iyziCommissionRateAmount = iyziCommissionRateAmount;
  }

  public getIyziCommissionFee(): OptionalType<number> {
    return this.iyziCommissionFee;
  }

  public setIyziCommissionFee(iyziCommissionFee: OptionalType<number>): void {
    this.iyziCommissionFee = iyziCommissionFee;
  }

  public getCardType(): OptionalType<string> {
    return this.cardType;
  }

  public setCardType(cardType: OptionalType<string>): void {
    this.cardType = cardType;
  }

  public getCardAssociation(): OptionalType<string> {
    return this.cardAssociation;
  }

  public setCardAssociation(cardAssociation: OptionalType<string>): void {
    this.cardAssociation = cardAssociation;
  }

  public getCardFamily(): OptionalType<string> {
    return this.cardFamily;
  }

  public setCardFamily(cardFamily: OptionalType<string>): void {
    this.cardFamily = cardFamily;
  }

  public getCardToken(): OptionalType<string> {
    return this.cardToken;
  }

  public setCardToken(cardToken: OptionalType<string>): void {
    this.cardToken = cardToken;
  }

  public getCardUserKey(): OptionalType<string> {
    return this.cardUserKey;
  }

  public setCardUserKey(cardUserKey: OptionalType<string>): void {
    this.cardUserKey = cardUserKey;
  }

  public getBinNumber(): OptionalType<string> {
    return this.binNumber;
  }

  public setBinNumber(binNumber: OptionalType<string>): void {
    this.binNumber = binNumber;
  }

  public getBasketId(): OptionalType<string> {
    return this.basketId;
  }

  public setBasketId(basketId: OptionalType<string>): void {
    this.basketId = basketId;
  }

  public getPaymentItems(): OptionalType<PaymentItem[]> {
    return this.paymentItems;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public setPaymentItems(paymentItems: OptionalType<PaymentItem[]>): void {
    this.paymentItems = paymentItems;
  }

  public getConnectorName(): OptionalType<string> {
    return this.connectorName;
  }

  public setConnectorName(connectorName: OptionalType<string>): void {
    this.connectorName = connectorName;
  }

  public getAuthCode(): OptionalType<string> {
    return this.authCode;
  }

  public setAuthCode(authCode: OptionalType<string>): void {
    this.authCode = authCode;
  }

  public getPhase(): OptionalType<string> {
    return this.phase;
  }

  public setPhase(phase: OptionalType<string>): void {
    this.phase = phase;
  }

  public getLastFourDigits(): OptionalType<string> {
    return this.lastFourDigits;
  }

  public setLastFourDigits(lastFourDigits: OptionalType<string>): void {
    this.lastFourDigits = lastFourDigits;
  }

  public getPosOrderId(): OptionalType<string> {
    return this.posOrderId;
  }

  public setPosOrderId(posOrderId: OptionalType<string>): void {
    this.posOrderId = posOrderId;
  }
}
