import { createHash } from 'crypto';
import { Request } from './request';

export class HashGenerator {
  public static generateHash(
    apiKey: string,
    secretKey: string,
    randomString: string,
    request: Request
  ): string {
    const hashStr =
      apiKey + randomString + secretKey + request.toPKIRequestString();
    return createHash('sha1').update(hashStr).digest('base64');
  }
}
