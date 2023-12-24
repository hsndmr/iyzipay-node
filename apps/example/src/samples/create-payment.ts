import {
  Address,
  Buyer,
  CreatePaymentRequest,
  Currency,
  Locale,
  PaymentCard,
  PaymentChannel,
  PaymentGroup,
} from '@demirjs/iyzipay-node';

export function createPayment() {
  const request = new CreatePaymentRequest();
  request.setLocale(Locale.TR);
  request.setConversationId('123456789');
  request.setPrice('1');
  request.setPaidPrice('1.2');
  request.setCurrency(Currency.TL);
  request.setInstallment(1);
  request.setBasketId('B67832');
  request.setPaymentChannel(PaymentChannel.WEB);
  request.setPaymentGroup(PaymentGroup.PRODUCT);

  const paymentCard = new PaymentCard();
  paymentCard.setCardHolderName('John Doe');
  paymentCard.setCardNumber('5528790000000008');
  paymentCard.setExpireMonth('12');
  paymentCard.setExpireYear('2030');
  paymentCard.setCvc('123');
  paymentCard.setRegisterCard(0);
  request.setPaymentCard(paymentCard);

  const buyer = new Buyer();
  buyer.setId('BY789');
  buyer.setName('John');
  buyer.setSurname('Doe');
  buyer.setGsmNumber('+905350000000');
  buyer.setEmail('email@email.com');
  buyer.setIdentityNumber('74300864791');
  buyer.setLastLoginDate('2015-10-05 12:43:35');
  buyer.setRegistrationDate('2013-04-21 15:12:09');
  buyer.setRegistrationAddress(
    'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1'
  );
  buyer.setIp('85.34.78.112');
  buyer.setCity('Istanbul');
  buyer.setCountry('Turkey');
  buyer.setZipCode('34732');
  request.setBuyer(buyer);

  const shippingAddress = new Address();
  shippingAddress.setContactName('Jane Doe');
  shippingAddress.setCity('Istanbul');
  shippingAddress.setCountry('Turkey');
  shippingAddress.setAddress(
    'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1'
  );
  shippingAddress.setZipCode('34742');
  request.setShippingAddress(shippingAddress);

  const billingAddress = new Address();
  billingAddress.setContactName('Jane Doe');
  billingAddress.setCity('Istanbul');
  billingAddress.setCountry('Turkey');
  billingAddress.setAddress(
    'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1'
  );
  billingAddress.setZipCode('34742');
  request.setBillingAddress(billingAddress);

  // TODO: Add basket items
}
