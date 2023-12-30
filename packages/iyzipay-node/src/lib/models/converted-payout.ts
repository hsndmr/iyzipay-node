import { OptionalType } from '../types';

export class ConvertedPayout {
  private paidPrice: OptionalType<number> = null;
  private iyziCommissionRateAmount: OptionalType<number> = null;
  private iyziCommissionFee: OptionalType<number> = null;
  private blockageRateAmountMerchant: OptionalType<number> = null;
  private blockageRateAmountSubMerchant: OptionalType<number> = null;
  private subMerchantPayoutAmount: OptionalType<number> = null;
  private merchantPayoutAmount: OptionalType<number> = null;
  private iyziConversionRate: OptionalType<number> = null;
  private iyziConversionRateAmount: OptionalType<number> = null;
  private currency: OptionalType<string> = null;

  getPaidPrice(): OptionalType<number> {
    return this.paidPrice;
  }

  setPaidPrice(paidPrice: OptionalType<number>): void {
    this.paidPrice = paidPrice;
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

  getIyziConversionRate(): OptionalType<number> {
    return this.iyziConversionRate;
  }

  setIyziConversionRate(iyziConversionRate: OptionalType<number>): void {
    this.iyziConversionRate = iyziConversionRate;
  }

  getIyziConversionRateAmount(): OptionalType<number> {
    return this.iyziConversionRateAmount;
  }

  setIyziConversionRateAmount(
    iyziConversionRateAmount: OptionalType<number>
  ): void {
    this.iyziConversionRateAmount = iyziConversionRateAmount;
  }

  getCurrency(): OptionalType<string> {
    return this.currency;
  }

  setCurrency(currency: OptionalType<string>): void {
    this.currency = currency;
  }
}
