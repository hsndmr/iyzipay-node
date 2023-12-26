import { IyzipayResource } from '../../iyzipay-resource';

export class PaymentResource extends IyzipayResource {
  private price: string;
  private paidPrice: string;
  private installment: number;
  private currency: string;
  private paymentId: string;
  private paymentStatus: string;
  private fraudStatus: number;
  private merchantCommissionRate: number;
  private merchantCommissionRateAmount: number;
  private iyziCommissionRateAmount: number;
  private iyziCommissionFee: number;
  private cardType: string;
  private cardAssociation: string;
  private cardFamily: string;
  private cardToken: string;
  private cardUserKey: string;
  private binNumber: string;
  private basketId: string;
  private paymentItems: any[];
  private connectorName: string;
  private authCode: string;
  private phase: string;
  private lastFourDigits: string;
  private posOrderId: string;

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

  public getCurrency(): string {
    return this.currency;
  }

  public setCurrency(currency: string): void {
    this.currency = currency;
  }

  public getPaymentId(): string {
    return this.paymentId;
  }

  public setPaymentId(paymentId: string): void {
    this.paymentId = paymentId;
  }

  public getPaymentStatus(): string {
    return this.paymentStatus;
  }

  public setPaymentStatus(paymentStatus: string): void {
    this.paymentStatus = paymentStatus;
  }

  public getFraudStatus(): number {
    return this.fraudStatus;
  }

  public setFraudStatus(fraudStatus: number): void {
    this.fraudStatus = fraudStatus;
  }

  public getMerchantCommissionRate(): number {
    return this.merchantCommissionRate;
  }

  public setMerchantCommissionRate(merchantCommissionRate: number): void {
    this.merchantCommissionRate = merchantCommissionRate;
  }

  public getMerchantCommissionRateAmount(): number {
    return this.merchantCommissionRateAmount;
  }

  public setMerchantCommissionRateAmount(
    merchantCommissionRateAmount: number
  ): void {
    this.merchantCommissionRateAmount = merchantCommissionRateAmount;
  }

  public getIyziCommissionRateAmount(): number {
    return this.iyziCommissionRateAmount;
  }

  public setIyziCommissionRateAmount(iyziCommissionRateAmount: number): void {
    this.iyziCommissionRateAmount = iyziCommissionRateAmount;
  }

  public getIyziCommissionFee(): number {
    return this.iyziCommissionFee;
  }

  public setIyziCommissionFee(iyziCommissionFee: number): void {
    this.iyziCommissionFee = iyziCommissionFee;
  }

  public getCardType(): string {
    return this.cardType;
  }

  public setCardType(cardType: string): void {
    this.cardType = cardType;
  }

  public getCardAssociation(): string {
    return this.cardAssociation;
  }

  public setCardAssociation(cardAssociation: string): void {
    this.cardAssociation = cardAssociation;
  }

  public getCardFamily(): string {
    return this.cardFamily;
  }

  public setCardFamily(cardFamily: string): void {
    this.cardFamily = cardFamily;
  }

  public getCardToken(): string {
    return this.cardToken;
  }

  public setCardToken(cardToken: string): void {
    this.cardToken = cardToken;
  }

  public getCardUserKey(): string {
    return this.cardUserKey;
  }

  public setCardUserKey(cardUserKey: string): void {
    this.cardUserKey = cardUserKey;
  }

  public getBinNumber(): string {
    return this.binNumber;
  }

  public setBinNumber(binNumber: string): void {
    this.binNumber = binNumber;
  }

  public getBasketId(): string {
    return this.basketId;
  }

  public setBasketId(basketId: string): void {
    this.basketId = basketId;
  }

  public getPaymentItems(): any[] {
    return this.paymentItems;
  }

  public setPaymentItems(paymentItems: any[]): void {
    this.paymentItems = paymentItems;
  }

  public getConnectorName(): string {
    return this.connectorName;
  }

  public setConnectorName(connectorName: string): void {
    this.connectorName = connectorName;
  }

  public getAuthCode(): string {
    return this.authCode;
  }

  public setAuthCode(authCode: string): void {
    this.authCode = authCode;
  }

  public getPhase(): string {
    return this.phase;
  }

  public setPhase(phase: string): void {
    this.phase = phase;
  }

  public getLastFourDigits(): string {
    return this.lastFourDigits;
  }

  public setLastFourDigits(lastFourDigits: string): void {
    this.lastFourDigits = lastFourDigits;
  }

  public getPosOrderId(): string {
    return this.posOrderId;
  }

  public setPosOrderId(posOrderId: string): void {
    this.posOrderId = posOrderId;
  }
}
