import { ConvertedPayout } from './converted-payout';

export class PaymentItem {
  private itemId?: string;
  private paymentTransactionId?: string;
  private transactionStatus?: string;
  private price?: number;
  private paidPrice?: number;
  private merchantCommissionRate?: number;
  private merchantCommissionRateAmount?: number;
  private iyziCommissionRateAmount?: number;
  private iyziCommissionFee?: number;
  private blockageRate?: number;
  private blockageRateAmountMerchant?: number;
  private blockageRateAmountSubMerchant?: number;
  private blockageResolvedDate?: Date;
  private subMerchantKey?: string;
  private subMerchantPrice?: number;
  private subMerchantPayoutRate?: number;
  private subMerchantPayoutAmount?: number;
  private merchantPayoutAmount?: number;
  private convertedPayout?: ConvertedPayout;

  getItemId(): string | undefined {
    return this.itemId;
  }

  setItemId(itemId?: string): void {
    this.itemId = itemId;
  }

  getPaymentTransactionId(): string | undefined {
    return this.paymentTransactionId;
  }

  setPaymentTransactionId(paymentTransactionId?: string): void {
    this.paymentTransactionId = paymentTransactionId;
  }

  getTransactionStatus(): string | undefined {
    return this.transactionStatus;
  }

  setTransactionStatus(transactionStatus?: string): void {
    this.transactionStatus = transactionStatus;
  }

  getPrice(): number | undefined {
    return this.price;
  }

  setPrice(price?: number): void {
    this.price = price;
  }

  getPaidPrice(): number | undefined {
    return this.paidPrice;
  }

  setPaidPrice(paidPrice?: number): void {
    this.paidPrice = paidPrice;
  }

  getMerchantCommissionRate(): number | undefined {
    return this.merchantCommissionRate;
  }

  setMerchantCommissionRate(merchantCommissionRate?: number): void {
    this.merchantCommissionRate = merchantCommissionRate;
  }

  getMerchantCommissionRateAmount(): number | undefined {
    return this.merchantCommissionRateAmount;
  }

  setMerchantCommissionRateAmount(merchantCommissionRateAmount?: number): void {
    this.merchantCommissionRateAmount = merchantCommissionRateAmount;
  }

  getIyziCommissionRateAmount(): number | undefined {
    return this.iyziCommissionRateAmount;
  }

  setIyziCommissionRateAmount(iyziCommissionRateAmount?: number): void {
    this.iyziCommissionRateAmount = iyziCommissionRateAmount;
  }

  getIyziCommissionFee(): number | undefined {
    return this.iyziCommissionFee;
  }

  setIyziCommissionFee(iyziCommissionFee?: number): void {
    this.iyziCommissionFee = iyziCommissionFee;
  }

  getBlockageRate(): number | undefined {
    return this.blockageRate;
  }

  setBlockageRate(blockageRate?: number): void {
    this.blockageRate = blockageRate;
  }

  getBlockageRateAmountMerchant(): number | undefined {
    return this.blockageRateAmountMerchant;
  }

  setBlockageRateAmountMerchant(blockageRateAmountMerchant?: number): void {
    this.blockageRateAmountMerchant = blockageRateAmountMerchant;
  }

  getBlockageRateAmountSubMerchant(): number | undefined {
    return this.blockageRateAmountSubMerchant;
  }

  setBlockageRateAmountSubMerchant(
    blockageRateAmountSubMerchant?: number
  ): void {
    this.blockageRateAmountSubMerchant = blockageRateAmountSubMerchant;
  }

  getBlockageResolvedDate(): Date | undefined {
    return this.blockageResolvedDate;
  }

  setBlockageResolvedDate(blockageResolvedDate?: Date): void {
    this.blockageResolvedDate = blockageResolvedDate;
  }

  getSubMerchantKey(): string | undefined {
    return this.subMerchantKey;
  }

  setSubMerchantKey(subMerchantKey?: string): void {
    this.subMerchantKey = subMerchantKey;
  }

  getSubMerchantPrice(): number | undefined {
    return this.subMerchantPrice;
  }

  setSubMerchantPrice(subMerchantPrice?: number): void {
    this.subMerchantPrice = subMerchantPrice;
  }

  getSubMerchantPayoutRate(): number | undefined {
    return this.subMerchantPayoutRate;
  }

  setSubMerchantPayoutRate(subMerchantPayoutRate?: number): void {
    this.subMerchantPayoutRate = subMerchantPayoutRate;
  }

  getSubMerchantPayoutAmount(): number | undefined {
    return this.subMerchantPayoutAmount;
  }

  setSubMerchantPayoutAmount(subMerchantPayoutAmount?: number): void {
    this.subMerchantPayoutAmount = subMerchantPayoutAmount;
  }

  getMerchantPayoutAmount(): number | undefined {
    return this.merchantPayoutAmount;
  }

  setMerchantPayoutAmount(merchantPayoutAmount?: number): void {
    this.merchantPayoutAmount = merchantPayoutAmount;
  }

  getConvertedPayout(): ConvertedPayout | undefined {
    return this.convertedPayout;
  }

  setConvertedPayout(convertedPayout?: ConvertedPayout): void {
    this.convertedPayout = convertedPayout;
  }
}
