import { BaseModel } from '../base-model';
import { RequestDataBuilder } from '../request-data-builder';
import { RequestStringBuilder } from '../request-string-builder';

export class PaymentCard extends BaseModel {
  private cardHolderName: string;
  private cardNumber: string;
  private expireYear: string;
  private expireMonth: string;
  private cvc: string;
  private registerCard: 0 | 1;
  private cardAlias: string;
  private cardToken: string;
  private cardUserKey: string;
  private registerConsumerCard: boolean;
  private ucsToken: string;
  private consumerToken: string;

  public getCardHolderName(): string {
    return this.cardHolderName;
  }

  public setCardHolderName(cardHolderName: string): void {
    this.cardHolderName = cardHolderName;
  }

  public getCardNumber(): string {
    return this.cardNumber;
  }

  public setCardNumber(cardNumber: string): void {
    this.cardNumber = cardNumber;
  }

  public getExpireYear(): string {
    return this.expireYear;
  }

  public setExpireYear(expireYear: string): void {
    this.expireYear = expireYear;
  }

  public getExpireMonth(): string {
    return this.expireMonth;
  }

  public setExpireMonth(expireMonth: string): void {
    this.expireMonth = expireMonth;
  }

  public getCvc(): string {
    return this.cvc;
  }

  public setCvc(cvc: string): void {
    this.cvc = cvc;
  }

  public getRegisterCard(): 0 | 1 {
    return this.registerCard;
  }

  public setRegisterCard(registerCard: 0 | 1): void {
    this.registerCard = registerCard;
  }

  public getCardAlias(): string {
    return this.cardAlias;
  }

  public setCardAlias(cardAlias: string): void {
    this.cardAlias = cardAlias;
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

  public getRegisterConsumerCard(): boolean {
    return this.registerConsumerCard;
  }

  public setRegisterConsumerCard(registerConsumerCard: boolean): void {
    this.registerConsumerCard = registerConsumerCard;
  }

  public getUcsToken(): string {
    return this.ucsToken;
  }

  public setUcsToken(ucsToken: string): void {
    this.ucsToken = ucsToken;
  }

  public getConsumerToken(): string {
    return this.consumerToken;
  }

  public setConsumerToken(consumerToken: string): void {
    this.consumerToken = consumerToken;
  }

  public getRequestData() {
    return RequestDataBuilder.create()
      .add('cardHolderName', this.cardHolderName)
      .add('cardNumber', this.cardNumber)
      .add('expireYear', this.expireYear)
      .add('expireMonth', this.expireMonth)
      .add('cvc', this.cvc)
      .add('registerCard', this.registerCard)
      .add('cardAlias', this.cardAlias)
      .add('cardToken', this.cardToken)
      .add('cardUserKey', this.cardUserKey)
      .add('registerConsumerCard', this.registerConsumerCard)
      .add('consumerToken', this.consumerToken)
      .add('ucsToken', this.ucsToken)
      .get();
  }

  public toPKIRequestString(): string {
    return RequestStringBuilder.create()
      .append('cardHolderName', this.cardHolderName)
      .append('cardNumber', this.cardNumber)
      .append('expireYear', this.expireYear)
      .append('expireMonth', this.expireMonth)
      .append('cvc', this.cvc)
      .append('registerCard', this.registerCard)
      .append('cardAlias', this.cardAlias)
      .append('cardToken', this.cardToken)
      .append('cardUserKey', this.cardUserKey)
      .append('registerConsumerCard', this.registerConsumerCard)
      .append('consumerToken', this.consumerToken)
      .append('ucsToken', this.ucsToken)
      .getRequestString();
  }
}
