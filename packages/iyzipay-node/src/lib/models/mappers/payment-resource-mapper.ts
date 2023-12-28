import { IyzipayResourceMapper } from './iyzipay-resource-mapper';
import { ResponseDataManager } from '../../response-data-manager';
import { PaymentResource } from '../resources/payment-resource';
import { PaymentItemMapper } from './payment-item-mapper';
export class PaymentResourceMapper extends IyzipayResourceMapper {
  public mapResourceFrom(
    resource: PaymentResource,
    responseData
  ): PaymentResource {
    super.mapResourceFrom(resource, responseData);

    const responseDataManager = new ResponseDataManager(responseData);

    resource.setPrice(responseDataManager.get('price'));
    resource.setPaidPrice(responseDataManager.get('paidPrice'));
    resource.setInstallment(responseDataManager.get('installment'));
    resource.setPaymentId(responseDataManager.get('paymentId'));
    resource.setPaymentStatus(responseDataManager.get('paymentStatus'));
    resource.setFraudStatus(responseDataManager.get('fraudStatus'));
    resource.setMerchantCommissionRate(
      responseDataManager.get('merchantCommissionRate')
    );
    resource.setMerchantCommissionRateAmount(
      responseDataManager.get('merchantCommissionRateAmount')
    );
    resource.setIyziCommissionRateAmount(
      responseDataManager.get('iyziCommissionRateAmount')
    );
    resource.setIyziCommissionFee(responseDataManager.get('iyziCommissionFee'));
    resource.setCardType(responseDataManager.get('cardType'));
    resource.setCardAssociation(responseDataManager.get('cardAssociation'));
    resource.setCardFamily(responseDataManager.get('cardFamily'));
    resource.setCardUserKey(responseDataManager.get('cardUserKey'));
    resource.setCardToken(responseDataManager.get('cardToken'));
    resource.setBinNumber(responseDataManager.get('binNumber'));
    resource.setBasketId(responseDataManager.get('basketId'));
    resource.setCurrency(responseDataManager.get('currency'));
    resource.setPaymentItems(
      new PaymentItemMapper().mapPaymentItems(
        responseDataManager.get('itemTransactions')
      )
    );
    resource.setConnectorName(responseDataManager.get('connectorName'));
    resource.setAuthCode(responseDataManager.get('authCode'));
    resource.setPhase(responseDataManager.get('phase'));
    resource.setLastFourDigits(responseDataManager.get('lastFourDigits'));
    resource.setPosOrderId(responseDataManager.get('posOrderId'));

    return resource;
  }
}
