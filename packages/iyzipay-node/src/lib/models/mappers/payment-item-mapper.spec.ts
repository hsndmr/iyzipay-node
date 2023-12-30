import { Currency } from '../enums';
import { PaymentItemMapper } from './payment-item-mapper';

describe('PaymentItemMapper', () => {
  it('should map payment items with data', () => {
    // Arrange
    const mapper = new PaymentItemMapper();

    // Act
    const paymentItem = mapper
      .mapPaymentItems([
        {
          itemId: 'itemId',
          paymentTransactionId: 'paymentTransactionId',
          transactionStatus: 1,
          price: 1,
          paidPrice: 1,
          merchantCommissionRate: 1,
          merchantCommissionRateAmount: 1,
          iyziCommissionRateAmount: 1,
          iyziCommissionFee: 1,
          blockageRate: 1,
          blockageRateAmountMerchant: 1,
          blockageRateAmountSubMerchant: 1,
          blockageResolvedDate: '2024-01-01',
          subMerchantPrice: 1,
          subMerchantPayoutRate: 1,
          subMerchantPayoutAmount: 1,
          merchantPayoutAmount: 1,
        },
      ])
      .pop();

    // Assert
    expect(paymentItem.getItemId()).toBe('itemId');
    expect(paymentItem.getPaymentTransactionId()).toBe('paymentTransactionId');
    expect(paymentItem.getTransactionStatus()).toBe(1);
    expect(paymentItem.getPrice()).toBe(1);
    expect(paymentItem.getPaidPrice()).toBe(1);
    expect(paymentItem.getMerchantCommissionRate()).toBe(1);
    expect(paymentItem.getMerchantCommissionRateAmount()).toBe(1);
    expect(paymentItem.getIyziCommissionRateAmount()).toBe(1);
    expect(paymentItem.getIyziCommissionFee()).toBe(1);
    expect(paymentItem.getBlockageRate()).toBe(1);
    expect(paymentItem.getBlockageRateAmountMerchant()).toBe(1);
    expect(paymentItem.getBlockageRateAmountSubMerchant()).toBe(1);
    expect(paymentItem.getBlockageResolvedDate()).toBe('2024-01-01');
    expect(paymentItem.getSubMerchantPrice()).toBe(1);
    expect(paymentItem.getSubMerchantPayoutRate()).toBe(1);
    expect(paymentItem.getSubMerchantPayoutAmount()).toBe(1);
    expect(paymentItem.getMerchantPayoutAmount()).toBe(1);
    expect(paymentItem.getConvertedPayout()).toBeNull();
  });

  it('should map payment items with empty data', () => {
    // Arrange
    const mapper = new PaymentItemMapper();

    // Act
    const paymentItem = mapper.mapPaymentItems([{}]).pop();

    // Assert
    expect(paymentItem.getItemId()).toBeNull();
    expect(paymentItem.getPaymentTransactionId()).toBeNull();
    expect(paymentItem.getTransactionStatus()).toBeNull();
    expect(paymentItem.getPrice()).toBeNull();
    expect(paymentItem.getPaidPrice()).toBeNull();
    expect(paymentItem.getMerchantCommissionRate()).toBeNull();
    expect(paymentItem.getMerchantCommissionRateAmount()).toBeNull();
    expect(paymentItem.getIyziCommissionRateAmount()).toBeNull();
    expect(paymentItem.getIyziCommissionFee()).toBeNull();
    expect(paymentItem.getBlockageRate()).toBeNull();
    expect(paymentItem.getBlockageRateAmountMerchant()).toBeNull();
    expect(paymentItem.getBlockageRateAmountSubMerchant()).toBeNull();
    expect(paymentItem.getBlockageResolvedDate()).toBeNull();
    expect(paymentItem.getSubMerchantPrice()).toBeNull();
    expect(paymentItem.getSubMerchantPayoutRate()).toBeNull();
    expect(paymentItem.getSubMerchantPayoutAmount()).toBeNull();
    expect(paymentItem.getMerchantPayoutAmount()).toBeNull();
    expect(paymentItem.getConvertedPayout()).toBeNull();
  });

  it('should map payment items without data', () => {
    // Arrange
    const mapper = new PaymentItemMapper();

    // Act
    const paymentItems = mapper.mapPaymentItems(null);

    // Assert
    expect(paymentItems).toBeNull();
  });

  it('should map payment items with empty array data', () => {
    // Arrange
    const mapper = new PaymentItemMapper();

    // Act
    const paymentItems = mapper.mapPaymentItems([]);

    // Assert
    expect(paymentItems).toEqual([]);
  });

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
