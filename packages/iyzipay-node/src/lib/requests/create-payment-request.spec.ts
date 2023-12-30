import {
  Address,
  BasketItem,
  BasketItemType,
  Buyer,
  Currency,
  Locale,
  PaymentCard,
  PaymentChannel,
  PaymentGroup,
} from '../models';
import { CreatePaymentRequest } from './create-payment-request';

describe('CreatePaymentRequest', () => {
  let request: CreatePaymentRequest;

  beforeEach(() => {
    request = new CreatePaymentRequest();
    request.setLocale(Locale.TR);
    request.setConversationId('123456789');
    request.setPrice('1');
    request.setPaidPrice('1.1');
    request.setCurrency(Currency.TL);
    request.setInstallment(1);
    request.setBasketId('B67832');
    request.setPaymentChannel(PaymentChannel.WEB);
    request.setPaymentGroup(PaymentGroup.PRODUCT);
    request.setPaymentSource('payment source');
    request.setConnectorName('connector name');
    request.setPosOrderId('123456');
    request.setCallbackUrl('callback');

    const paymentCard = new PaymentCard();
    paymentCard.setCardAlias('alias');
    paymentCard.setCardHolderName('John Doe');
    paymentCard.setCardNumber('5528790000000008');
    paymentCard.setExpireMonth('12');
    paymentCard.setExpireYear('2030');
    paymentCard.setCvc('123');
    paymentCard.setRegisterCard(0);
    paymentCard.setCardToken('token');
    paymentCard.setCardUserKey('user key');
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

    const basketItems: BasketItem[] = [];
    const firstBasketItem = new BasketItem();
    firstBasketItem.setId('BI101');
    firstBasketItem.setName('Binocular');
    firstBasketItem.setCategory1('Collectibles');
    firstBasketItem.setCategory2('Accessories');
    firstBasketItem.setItemType(BasketItemType.PHYSICAL);
    firstBasketItem.setPrice('0.3');
    firstBasketItem.setSubMerchantPrice('0.27');
    firstBasketItem.setSubMerchantKey('sub merchant key');
    basketItems.push(firstBasketItem);

    request.setBasketItems(basketItems);
  });

  it('should return request data correctly', () => {
    // Arrange && Act && Assert
    expect(request.getRequestData()).toEqual({
      locale: 'tr',
      conversationId: '123456789',
      price: '1.0',
      paidPrice: '1.1',
      installment: 1,
      paymentChannel: 'WEB',
      basketId: 'B67832',
      paymentGroup: 'PRODUCT',
      paymentCard: {
        cardHolderName: 'John Doe',
        cardNumber: '5528790000000008',
        expireYear: '2030',
        expireMonth: '12',
        cvc: '123',
        registerCard: 0,
        cardAlias: 'alias',
        cardToken: 'token',
        cardUserKey: 'user key',
      },
      buyer: {
        id: 'BY789',
        name: 'John',
        surname: 'Doe',
        identityNumber: '74300864791',
        email: 'email@email.com',
        gsmNumber: '+905350000000',
        registrationDate: '2013-04-21 15:12:09',
        lastLoginDate: '2015-10-05 12:43:35',
        registrationAddress:
          'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
        city: 'Istanbul',
        country: 'Turkey',
        zipCode: '34732',
        ip: '85.34.78.112',
      },
      shippingAddress: {
        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
        zipCode: '34742',
        contactName: 'Jane Doe',
        city: 'Istanbul',
        country: 'Turkey',
      },
      billingAddress: {
        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
        zipCode: '34742',
        contactName: 'Jane Doe',
        city: 'Istanbul',
        country: 'Turkey',
      },
      basketItems: [
        {
          id: 'BI101',
          price: '0.3',
          name: 'Binocular',
          category1: 'Collectibles',
          category2: 'Accessories',
          itemType: 'PHYSICAL',
          subMerchantPrice: '0.27',
          subMerchantKey: 'sub merchant key',
        },
      ],
      paymentSource: 'payment source',
      currency: 'TRY',
      posOrderId: '123456',
      connectorName: 'connector name',
      callbackUrl: 'callback',
    });
  });

  it('should return pki request string correctly', () => {
    expect(request.toPKIRequestString()).toEqual(
      '[locale=tr,' +
        'conversationId=123456789,' +
        'price=1.0,' +
        'paidPrice=1.1,' +
        'installment=1,' +
        'paymentChannel=WEB,' +
        'basketId=B67832,' +
        'paymentGroup=PRODUCT,' +
        'paymentCard=[cardHolderName=John Doe,' +
        'cardNumber=5528790000000008,' +
        'expireYear=2030,' +
        'expireMonth=12,' +
        'cvc=123,' +
        'registerCard=0,' +
        'cardAlias=alias,' +
        'cardToken=token,' +
        'cardUserKey=user key],' +
        'buyer=[id=BY789,' +
        'name=John,' +
        'surname=Doe,' +
        'identityNumber=74300864791,' +
        'email=email@email.com,' +
        'gsmNumber=+905350000000,' +
        'registrationDate=2013-04-21 15:12:09,' +
        'lastLoginDate=2015-10-05 12:43:35,' +
        'registrationAddress=Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1,' +
        'city=Istanbul,' +
        'country=Turkey,' +
        'zipCode=34732,' +
        'ip=85.34.78.112],' +
        'shippingAddress=[address=Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1,' +
        'zipCode=34742,' +
        'contactName=Jane Doe,' +
        'city=Istanbul,' +
        'country=Turkey],' +
        'billingAddress=[address=Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1,' +
        'zipCode=34742,' +
        'contactName=Jane Doe,' +
        'city=Istanbul,' +
        'country=Turkey],' +
        'basketItems=[[id=BI101,' +
        'price=0.3,' +
        'name=Binocular,' +
        'category1=Collectibles,' +
        'category2=Accessories,' +
        'itemType=PHYSICAL,' +
        'subMerchantKey=sub merchant key,' +
        'subMerchantPrice=0.27]],' +
        'paymentSource=payment source,' +
        'currency=TRY,' +
        'posOrderId=123456,' +
        'connectorName=connector name,' +
        'callbackUrl=callback]'
    );
  });
});
