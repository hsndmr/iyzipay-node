import { OptionalType } from '../types';
import { ConvertedPayout } from './converted-payout';

export class PaymentItem {
  private itemId: OptionalType<string> = null;
  private paymentTransactionId: OptionalType<string> = null;
  private transactionStatus: OptionalType<string> = null;
  private price: OptionalType<number> = null;
  private paidPrice: OptionalType<number> = null;
  private merchantCommissionRate: OptionalType<number> = null;
  private merchantCommissionRateAmount: OptionalType<number> = null;
  private iyziCommissionRateAmount: OptionalType<number> = null;
  private iyziCommissionFee: OptionalType<number> = null;
  private blockageRate: OptionalType<number> = null;
  private blockageRateAmountMerchant: OptionalType<number> = null;
  private blockageRateAmountSubMerchant: OptionalType<number> = null;
  private blockageResolvedDate: OptionalType<string> = null;
  private subMerchantKey: OptionalType<string> = null;
  private subMerchantPrice: OptionalType<number> = null;
  private subMerchantPayoutRate: OptionalType<number> = null;
  private subMerchantPayoutAmount: OptionalType<number> = null;
  private merchantPayoutAmount: OptionalType<number> = null;
  private convertedPayout: OptionalType<ConvertedPayout> = null;

  getItemId(): OptionalType<string> {
    return this.itemId;
  }

  setItemId(itemId: OptionalType<string>): void {
    this.itemId = itemId;
  }

  getPaymentTransactionId(): OptionalType<string> {
    return this.paymentTransactionId;
  }

  setPaymentTransactionId(paymentTransactionId: OptionalType<string>): void {
    this.paymentTransactionId = paymentTransactionId;
  }

  getTransactionStatus(): OptionalType<string> {
    return this.transactionStatus;
  }

  setTransactionStatus(transactionStatus: OptionalType<string>): void {
    this.transactionStatus = transactionStatus;
  }

  getPrice(): OptionalType<number> {
    return this.price;
  }

  setPrice(price: OptionalType<number>): void {
    this.price = price;
  }

  getPaidPrice(): OptionalType<number> {
    return this.paidPrice;
  }

  setPaidPrice(paidPrice: OptionalType<number>): void {
    this.paidPrice = paidPrice;
  }

  getMerchantCommissionRate(): OptionalType<number> {
    return this.merchantCommissionRate;
  }

  setMerchantCommissionRate(
    merchantCommissionRate: OptionalType<number>
  ): void {
    this.merchantCommissionRate = merchantCommissionRate;
  }

  getMerchantCommissionRateAmount(): OptionalType<number> {
    return this.merchantCommissionRateAmount;
  }

  setMerchantCommissionRateAmount(
    merchantCommissionRateAmount: OptionalType<number>
  ): void {
    this.merchantCommissionRateAmount = merchantCommissionRateAmount;
  }

  getIyziCommissionRateAmount(): OptionalType<number> {
    return this.iyziCommissionRateAmount;
  }

  setIyziCommissionRateAmount(
    iyziCommissionRateAmount: OptionalType<number>
  ): void {
    this.iyziCommissionRateAmount = iyziCommissionRateAmount;
  }

  getIyziCommissionFee(): OptionalType<number> {
    return this.iyziCommissionFee;
  }

  setIyziCommissionFee(iyziCommissionFee: OptionalType<number>): void {
    this.iyziCommissionFee = iyziCommissionFee;
  }

  getBlockageRate(): OptionalType<number> {
    return this.blockageRate;
  }

  setBlockageRate(blockageRate: OptionalType<number>): void {
    this.blockageRate = blockageRate;
  }

  getBlockageRateAmountMerchant(): OptionalType<number> {
    return this.blockageRateAmountMerchant;
  }

  setBlockageRateAmountMerchant(
    blockageRateAmountMerchant: OptionalType<number>
  ): void {
    this.blockageRateAmountMerchant = blockageRateAmountMerchant;
  }

  getBlockageRateAmountSubMerchant(): OptionalType<number> {
    return this.blockageRateAmountSubMerchant;
  }

  setBlockageRateAmountSubMerchant(
    blockageRateAmountSubMerchant: OptionalType<number>
  ): void {
    this.blockageRateAmountSubMerchant = blockageRateAmountSubMerchant;
  }

  getBlockageResolvedDate(): OptionalType<string> {
    return this.blockageResolvedDate;
  }

  setBlockageResolvedDate(blockageResolvedDate: OptionalType<string>): void {
    this.blockageResolvedDate = blockageResolvedDate;
  }

  getSubMerchantKey(): OptionalType<string> {
    return this.subMerchantKey;
  }

  setSubMerchantKey(subMerchantKey: OptionalType<string>): void {
    this.subMerchantKey = subMerchantKey;
  }

  getSubMerchantPrice(): OptionalType<number> {
    return this.subMerchantPrice;
  }

  setSubMerchantPrice(subMerchantPrice: OptionalType<number>): void {
    this.subMerchantPrice = subMerchantPrice;
  }

  getSubMerchantPayoutRate(): OptionalType<number> {
    return this.subMerchantPayoutRate;
  }

  setSubMerchantPayoutRate(subMerchantPayoutRate: OptionalType<number>): void {
    this.subMerchantPayoutRate = subMerchantPayoutRate;
  }

  getSubMerchantPayoutAmount(): OptionalType<number> {
    return this.subMerchantPayoutAmount;
  }

  setSubMerchantPayoutAmount(
    subMerchantPayoutAmount: OptionalType<number>
  ): void {
    this.subMerchantPayoutAmount = subMerchantPayoutAmount;
  }

  getMerchantPayoutAmount(): OptionalType<number> {
    return this.merchantPayoutAmount;
  }

  setMerchantPayoutAmount(merchantPayoutAmount: OptionalType<number>): void {
    this.merchantPayoutAmount = merchantPayoutAmount;
  }

  getConvertedPayout(): OptionalType<ConvertedPayout> {
    return this.convertedPayout;
  }

  setConvertedPayout(convertedPayout: OptionalType<ConvertedPayout>): void {
    this.convertedPayout = convertedPayout;
  }
}
