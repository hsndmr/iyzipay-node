import { Currency } from '../enums';
import { PaymentItemMapper } from './payment-item-mapper';

describe('PaymentItemMapper', () => {
  it('should map converted payout with data', () => {
    // Arrange
    const mapper = new PaymentItemMapper();

    // Act
    const convertedPayout = mapper
      .mapPaymentItems([
        {
          convertedPayout: {
            paidPrice: 1,
            iyziCommissionRateAmount: 1,
            iyziCommissionFee: 1,
            blockageRateAmountMerchant: 1,
            blockageRateAmountSubMerchant: 1,
            subMerchantPayoutAmount: 1,
            merchantPayoutAmount: 1,
            iyziConversionRate: 1,
            iyziConversionRateAmount: 1,
            currency: Currency.TL,
          },
        },
      ])
      .pop()
      .getConvertedPayout();

    // Assert
    expect(convertedPayout.getPaidPrice()).toBe(1);
    expect(convertedPayout.getIyziCommissionRateAmount()).toBe(1);
    expect(convertedPayout.getIyziCommissionFee()).toBe(1);
    expect(convertedPayout.getBlockageRateAmountMerchant()).toBe(1);
    expect(convertedPayout.getBlockageRateAmountSubMerchant()).toBe(1);
    expect(convertedPayout.getSubMerchantPayoutAmount()).toBe(1);
    expect(convertedPayout.getMerchantPayoutAmount()).toBe(1);
    expect(convertedPayout.getIyziConversionRate()).toBe(1);
    expect(convertedPayout.getIyziConversionRateAmount()).toBe(1);
    expect(convertedPayout.getCurrency()).toBe(Currency.TL);
  });

  it('should map converted payout with empty data', () => {
    // Arrange
    const mapper = new PaymentItemMapper();

    // Act
    const convertedPayout = mapper
      .mapPaymentItems([
        {
          convertedPayout: {},
        },
      ])
      .pop()
      .getConvertedPayout();

    // Assert
    expect(convertedPayout.getPaidPrice()).toBeNull();
    expect(convertedPayout.getIyziCommissionRateAmount()).toBeNull();
    expect(convertedPayout.getIyziCommissionFee()).toBeNull();
    expect(convertedPayout.getBlockageRateAmountMerchant()).toBeNull();
    expect(convertedPayout.getBlockageRateAmountSubMerchant()).toBeNull();
    expect(convertedPayout.getSubMerchantPayoutAmount()).toBeNull();
    expect(convertedPayout.getMerchantPayoutAmount()).toBeNull();
    expect(convertedPayout.getIyziConversionRate()).toBeNull();
    expect(convertedPayout.getIyziConversionRateAmount()).toBeNull();
    expect(convertedPayout.getCurrency()).toBeNull();
  });

  it('should map converted payout without data', () => {
    // Arrange
    const mapper = new PaymentItemMapper();

    // Act
    const convertedPayout = mapper
      .mapPaymentItems([
        {
          convertedPayout: null,
        },
      ])
      .pop()
      .getConvertedPayout();

    // Assert
    expect(convertedPayout).toBeNull();
  });
});
