import { Request } from './request';
import { createHmac } from 'crypto';
import { substr } from './utils';

export class IyziAuthV2Generator {
  public static generateAuthContent(
    uri: string,
    apiKey: string,
    secretKey: string,
    randomString: string,
    request: Request | null = null
  ): string {
    const hashStr = `apiKey:${apiKey}&randomKey:${randomString}&signature:${this.getHmacSHA256Signature(
      uri,
      secretKey,
      randomString,
      request
    )}`;

    return Buffer.from(hashStr).toString('base64');
  }

  public static getHmacSHA256Signature(
    uri: string,
    secretKey: string,
    randomString: string,
    request: Request | null = null
  ): string {
    const dataToEncrypt = randomString + this.getPayload(uri, request);
    const hash = createHmac('sha256', secretKey).update(dataToEncrypt).digest();

    return hash.toString('hex');
  }

  private static getPayload(
    uri: string,
    request: Request | null = null
  ): string {
    const startNumber = uri.indexOf('/v2');
    let endNumber = uri.indexOf('?');
    endNumber = endNumber === -1 ? 0 : endNumber;

    if (uri.includes('subscription') || uri.includes('ucs')) {
      endNumber = uri.length;
      if (uri.includes('?')) {
        endNumber = uri.indexOf('?');
      }
    }

    endNumber -= startNumber;

    let uriPath = substr(uri, startNumber, endNumber);

    const toRequestDataString = request.toRequestDataString();

    if (request !== null && toRequestDataString !== '{}') {
      uriPath += toRequestDataString;
    }

    return uriPath;
  }
}
