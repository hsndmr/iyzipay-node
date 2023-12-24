import { BaseModel } from '../base-model';
import { RequestDataBuilder } from '../request-data-builder';
import { RequestStringBuilder } from '../request-string-builder';

export class Buyer extends BaseModel {
  private id: string;
  private name: string;
  private surname: string;
  private identityNumber: string;
  private email: string;
  private gsmNumber: string;
  private registrationDate: string;
  private lastLoginDate: string;
  private registrationAddress: string;
  private city: string;
  private country: string;
  private zipCode: string;
  private ip: string;

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getSurname(): string {
    return this.surname;
  }

  public setSurname(surname: string): void {
    this.surname = surname;
  }

  public getIdentityNumber(): string {
    return this.identityNumber;
  }

  public setIdentityNumber(identityNumber: string): void {
    this.identityNumber = identityNumber;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getGsmNumber(): string {
    return this.gsmNumber;
  }

  public setGsmNumber(gsmNumber: string): void {
    this.gsmNumber = gsmNumber;
  }

  public getRegistrationDate(): string {
    return this.registrationDate;
  }

  public setRegistrationDate(registrationDate: string): void {
    this.registrationDate = registrationDate;
  }

  public getLastLoginDate(): string {
    return this.lastLoginDate;
  }

  public setLastLoginDate(lastLoginDate: string): void {
    this.lastLoginDate = lastLoginDate;
  }

  public getRegistrationAddress(): string {
    return this.registrationAddress;
  }

  public setRegistrationAddress(registrationAddress: string): void {
    this.registrationAddress = registrationAddress;
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

  public getZipCode(): string {
    return this.zipCode;
  }

  public setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
  }

  public getIp(): string {
    return this.ip;
  }

  public setIp(ip: string): void {
    this.ip = ip;
  }

  public getRequestData() {
    return RequestDataBuilder.create()
      .add('id', this.getId())
      .add('name', this.getName())
      .add('surname', this.getSurname())
      .add('identityNumber', this.getIdentityNumber())
      .add('email', this.getEmail())
      .add('gsmNumber', this.getGsmNumber())
      .add('registrationDate', this.getRegistrationDate())
      .add('lastLoginDate', this.getLastLoginDate())
      .add('registrationAddress', this.getRegistrationAddress())
      .add('city', this.getCity())
      .add('country', this.getCountry())
      .add('zipCode', this.getZipCode())
      .add('ip', this.getIp())
      .get();
  }

  public toPKIRequestString() {
    return RequestStringBuilder.create()
      .append('id', this.getId())
      .append('name', this.getName())
      .append('surname', this.getSurname())
      .append('identityNumber', this.getIdentityNumber())
      .append('email', this.getEmail())
      .append('gsmNumber', this.getGsmNumber())
      .append('registrationDate', this.getRegistrationDate())
      .append('lastLoginDate', this.getLastLoginDate())
      .append('registrationAddress', this.getRegistrationAddress())
      .append('city', this.getCity())
      .append('country', this.getCountry())
      .append('zipCode', this.getZipCode())
      .append('ip', this.getIp())
      .getRequestString();
  }
}
