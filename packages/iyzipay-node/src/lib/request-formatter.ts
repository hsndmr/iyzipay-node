export class RequestFormatter {
  public static formatPrice(price: string): string {
    if (!price.includes('.')) {
      return `${price}.0`;
    }

    let subStrIndex = 0;
    let priceReversed = price.split('').reverse().join('');

    for (let i = 0; i < priceReversed.length; i++) {
      if (priceReversed[i] === '0') {
        subStrIndex = i + 1;
      } else if (priceReversed[i] === '.') {
        priceReversed = '0' + priceReversed;
        break;
      } else {
        break;
      }
    }

    return priceReversed.substring(subStrIndex).split('').reverse().join('');
  }
}
