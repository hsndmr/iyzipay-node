export class ConvertedPayout {
  private paidPrice?: number;
  private iyziCommissionRateAmount?: number;
  private iyziCommissionFee?: number;
  private blockageRateAmountMerchant?: number;
  private blockageRateAmountSubMerchant?: number;
  private subMerchantPayoutAmount?: number;
  private merchantPayoutAmount?: number;
  private iyziConversionRate?: number;
  private iyziConversionRateAmount?: number;
  private currency?: string;

  getPaidPrice(): number | undefined {
    return this.paidPrice;
  }

  setPaidPrice(paidPrice?: number): void {
    this.paidPrice = paidPrice;
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

  getIyziConversionRate(): number | undefined {
    return this.iyziConversionRate;
  }

  setIyziConversionRate(iyziConversionRate?: number): void {
    this.iyziConversionRate = iyziConversionRate;
  }

  getIyziConversionRateAmount(): number | undefined {
    return this.iyziConversionRateAmount;
  }

  setIyziConversionRateAmount(iyziConversionRateAmount?: number): void {
    this.iyziConversionRateAmount = iyziConversionRateAmount;
  }

  getCurrency(): string | undefined {
    return this.currency;
  }

  setCurrency(currency?: string): void {
    this.currency = currency;
  }
}
