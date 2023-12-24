import { BaseModel } from '../base-model';
import { RequestDataBuilder } from '../request-data-builder';
import { RequestStringBuilder } from '../request-string-builder';

export class Address extends BaseModel {
  private address: string;
  private zipCode: string;
  private contactName: string;
  private city: string;
  private country: string;

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getZipCode(): string {
    return this.zipCode;
  }

  public setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
  }

  public getContactName(): string {
    return this.contactName;
  }

  public setContactName(contactName: string): void {
    this.contactName = contactName;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getCountry(): string {
    return this.country;
  }

  public setCountry(country: string): void {
    this.country = country;
  }

  public getJsonObject() {
    return RequestDataBuilder.create()
      .add('address', this.getAddress())
      .add('zipCode', this.getZipCode())
      .add('contactName', this.getContactName())
      .add('city', this.getCity())
      .add('country', this.getCountry())
      .get();
  }

  public toPKIRequestString() {
    return RequestStringBuilder.create()
      .append('address', this.getAddress())
      .append('zipCode', this.getZipCode())
      .append('contactName', this.getContactName())
      .append('city', this.getCity())
      .append('country', this.getCountry())
      .getRequestString();
  }
}
