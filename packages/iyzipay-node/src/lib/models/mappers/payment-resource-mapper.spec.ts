import { Currency } from '../enums';
import { PaymentResource } from '../resources/payment-resource';
import { PaymentResourceMapper } from './payment-resource-mapper';

describe('PaymentResourceMapper', () => {
  it('should map resource from response data', () => {
    // Arrange
    const mapper = new PaymentResourceMapper({});

    // Act
    const resource = mapper.mapResourceFrom(new PaymentResource(), {
      price: 1,
      paidPrice: 1,
      installment: 1,
      paymentId: '1',
      paymentStatus: '1',
      fraudStatus: '1',
      merchantCommissionRate: 1,
      merchantCommissionRateAmount: 1,
      iyziCommissionRateAmount: 1,
      iyziCommissionFee: 1,
      cardType: '1',
      cardAssociation: '1',
      cardFamily: '1',
      cardUserKey: '1',
      cardToken: '1',
      binNumber: '1',
      basketId: '1',
      currency: Currency.TL,
      itemTransactions: [],
      connectorName: '1',
      authCode: '1',
      phase: '1',
      lastFourDigits: '1',
      posOrderId: '1',
    });

    // Assert
    expect(resource).toBeInstanceOf(PaymentResource);
    expect(resource.getPrice()).toBe(1);
    expect(resource.getPaidPrice()).toBe(1);
    expect(resource.getInstallment()).toBe(1);
    expect(resource.getPaymentId()).toBe('1');
    expect(resource.getPaymentStatus()).toBe('1');
    expect(resource.getFraudStatus()).toBe('1');
    expect(resource.getMerchantCommissionRate()).toBe(1);
    expect(resource.getMerchantCommissionRateAmount()).toBe(1);
    expect(resource.getIyziCommissionRateAmount()).toBe(1);
    expect(resource.getIyziCommissionFee()).toBe(1);
    expect(resource.getCardType()).toBe('1');
    expect(resource.getCardAssociation()).toBe('1');
    expect(resource.getCardFamily()).toBe('1');
    expect(resource.getCardUserKey()).toBe('1');
    expect(resource.getCardToken()).toBe('1');
    expect(resource.getBinNumber()).toBe('1');
    expect(resource.getBasketId()).toBe('1');
    expect(resource.getCurrency()).toBe(Currency.TL);
    expect(resource.getPaymentItems()).toEqual([]);
    expect(resource.getConnectorName()).toBe('1');
    expect(resource.getAuthCode()).toBe('1');
    expect(resource.getPhase()).toBe('1');
    expect(resource.getLastFourDigits()).toBe('1');
    expect(resource.getPosOrderId()).toBe('1');
  });

  it('should map resource from response data with empty response data', () => {
    // Arrange
    const mapper = new PaymentResourceMapper({});

    // Act
    const resource = mapper.mapResourceFrom(new PaymentResource(), {});

    // Assert
    expect(resource.getPrice()).toBeNull();
    expect(resource.getPaidPrice()).toBeNull();
    expect(resource.getInstallment()).toBeNull();
    expect(resource.getPaymentId()).toBeNull();
    expect(resource.getPaymentStatus()).toBeNull();
    expect(resource.getFraudStatus()).toBeNull();
    expect(resource.getMerchantCommissionRate()).toBeNull();
    expect(resource.getMerchantCommissionRateAmount()).toBeNull();
    expect(resource.getIyziCommissionRateAmount()).toBeNull();
    expect(resource.getIyziCommissionFee()).toBeNull();
    expect(resource.getCardType()).toBeNull();
    expect(resource.getCardAssociation()).toBeNull();
    expect(resource.getCardFamily()).toBeNull();
    expect(resource.getCardUserKey()).toBeNull();
    expect(resource.getCardToken()).toBeNull();
    expect(resource.getBinNumber()).toBeNull();
    expect(resource.getBasketId()).toBeNull();
    expect(resource.getCurrency()).toBeNull();
    expect(resource.getPaymentItems()).toBeNull();
    expect(resource.getConnectorName()).toBeNull();
    expect(resource.getAuthCode()).toBeNull();
    expect(resource.getPhase()).toBeNull();
    expect(resource.getLastFourDigits()).toBeNull();
    expect(resource.getPosOrderId()).toBeNull();
  });
});
