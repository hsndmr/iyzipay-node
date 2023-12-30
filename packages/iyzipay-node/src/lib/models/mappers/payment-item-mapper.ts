import { ResponseData, ResponseDataManager } from '../../response-data-manager';
import { OptionalType } from '../../types';
import { ConvertedPayout } from '../converted-payout';
import { PaymentItem } from '../payment-item';

export class PaymentItemMapper {
  public mapPaymentItems(itemTransactions: OptionalType<ResponseData[]>) {
    if (itemTransactions === null) {
      return null;
    }

    const paymentItems: PaymentItem[] = [];
    for (const itemTransaction of itemTransactions) {
      const responseDataManager = new ResponseDataManager(itemTransaction);

      const paymentItem = new PaymentItem();

      paymentItem.setItemId(responseDataManager.get('itemId'));
      paymentItem.setPaymentTransactionId(
        responseDataManager.get('paymentTransactionId')
      );
      paymentItem.setTransactionStatus(
        responseDataManager.get('transactionStatus')
      );
      paymentItem.setPrice(responseDataManager.get('price'));
      paymentItem.setPaidPrice(responseDataManager.get('paidPrice'));
      paymentItem.setMerchantCommissionRate(
        responseDataManager.get('merchantCommissionRate')
      );
      paymentItem.setMerchantCommissionRateAmount(
        responseDataManager.get('merchantCommissionRateAmount')
      );
      paymentItem.setIyziCommissionRateAmount(
        responseDataManager.get('iyziCommissionRateAmount')
      );
      paymentItem.setIyziCommissionFee(
        responseDataManager.get('iyziCommissionFee')
      );
      paymentItem.setBlockageRate(responseDataManager.get('blockageRate'));
      paymentItem.setBlockageRateAmountMerchant(
        responseDataManager.get('blockageRateAmountMerchant')
      );
      paymentItem.setBlockageRateAmountSubMerchant(
        responseDataManager.get('blockageRateAmountSubMerchant')
      );
      paymentItem.setBlockageResolvedDate(
        responseDataManager.get('blockageResolvedDate')
      );
      paymentItem.setSubMerchantKey(responseDataManager.get('subMerchantKey'));
      paymentItem.setSubMerchantPrice(
        responseDataManager.get('subMerchantPrice')
      );
      paymentItem.setSubMerchantPayoutRate(
        responseDataManager.get('subMerchantPayoutRate')
      );
      paymentItem.setSubMerchantPayoutAmount(
        responseDataManager.get('subMerchantPayoutAmount')
      );
      paymentItem.setMerchantPayoutAmount(
        responseDataManager.get('merchantPayoutAmount')
      );
      paymentItem.setConvertedPayout(
        this.mapConvertedPayout(responseDataManager.get('convertedPayout'))
      );

      paymentItems.push(paymentItem);
    }

    return paymentItems;
  }

  private mapConvertedPayout(payout: ResponseData) {
    const responseDataManager = new ResponseDataManager(payout);

    const convertedPayout = new ConvertedPayout();

    convertedPayout.setPaidPrice(responseDataManager.get('paidPrice'));
    convertedPayout.setIyziCommissionRateAmount(
      responseDataManager.get('iyziCommissionRateAmount')
    );
    convertedPayout.setIyziCommissionFee(
      responseDataManager.get('iyziCommissionFee')
    );
    convertedPayout.setBlockageRateAmountMerchant(
      responseDataManager.get('blockageRateAmountMerchant')
    );
    convertedPayout.setBlockageRateAmountSubMerchant(
      responseDataManager.get('blockageRateAmountSubMerchant')
    );
    convertedPayout.setSubMerchantPayoutAmount(
      responseDataManager.get('subMerchantPayoutAmount')
    );
    convertedPayout.setMerchantPayoutAmount(
      responseDataManager.get('merchantPayoutAmount')
    );
    convertedPayout.setIyziConversionRate(
      responseDataManager.get('iyziConversionRate')
    );
    convertedPayout.setIyziConversionRateAmount(
      responseDataManager.get('iyziConversionRateAmount')
    );
    convertedPayout.setCurrency(responseDataManager.get('currency'));

    return convertedPayout;
  }
}
